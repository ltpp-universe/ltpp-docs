---
title: 帮助
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - help
order: 8
---

<Share colorful />

### 安装

> [!tip]
>
> 框架不推荐使用 `Cargo.lock`，因为在跨平台下编译可能会导致错误，
> 但是框架会不断升级迭代，这导致开发者需要锁定依赖版本，
> 推荐如下形式，在版本前加 `=` 即可锁定使用此版本，避免了未锁版本导致的不确定错误

```toml
[dependencies]
hyperlane = "=*.*.*"
```

### 异步

> [!tip]
> 由于 `hyperlane` 框架本身涉及到锁的数据均采取 `tokio`中的锁实现，所以涉及到锁的方法调用均需要 `await`

### 死锁问题

> [!tip]
>
> `hyperlane` 框架推荐不要去显示持有锁，通过 `ctx` 的 `get` 和 `set` 方法基本满足日常开发使用

> [!tip]
>
> `hyperlane` 框架为了保证数据在多线程之间安全并发访问，使用 `tokio` 提供的读写锁，需要注意在代码中获取了写锁，
> 如果此锁没有释放，后面重复获取锁会导致死锁，下面举一个简单的示例:
> 此代码会导致死锁，原因是先通过 `get_write_lock` 获取到写锁，
> 但是此锁在离开 `test_middleware` 作用域后才会释放，后续再通过 `get_socket_addr` 获取读锁就会导致死锁

```rust
async fn test_middleware(ctx: Context) {
    let mut ctx_write_lock: RwLockWriteContext = ctx.get_write_lock().await;
    let response: &mut Response = ctx_write_lock.get_mut_response();
    let socket_addr: String = ctx_write_lock.get_socket_addr()
        .await
        .unwrap_or_default();
    response
        .set_header(SERVER, "hyperlane")
        .set_header(CONNECTION, CONNECTION_KEEP_ALIVE)
        .set_header("SocketAddr", socket_addr);
}
```

> [!tip]
>
> 修改后的代码: 此代码先获取读锁并释放了该锁（ `get_socket_addr` 完成即释放读锁），后续可以继续获取写锁

```rust
async fn test_middleware(ctx: Context) {
    let socket_addr: String = ctx.get_socket_addr()
        .await
        .unwrap_or_default();
    let mut ctx_write_lock: RwLockWriteContext = ctx.get_write_lock().await;
    let response: &mut Response = ctx_write_lock.get_mut_response();
    response
        .set_header(SERVER, "hyperlane")
        .set_header(CONNECTION, CONNECTION_KEEP_ALIVE)
        .set_header("SocketAddr", socket_addr);
}
```

<Bottom />
