---
title: 路由
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - usage-introduction
  - request
order: 5
---

<Share colorful />

## 静态路由

> [!tip]
>
> `hyperlane` 框架支持静态路由（如果重复注册相同的静态路由，框架会抛出异常，程序退出运行），使用方法如下：

### 注册

```rust
server.route("/test", |ctx: Context| {}).await;
```

## 动态路由

> [!tip]
>
> `hyperlane` 框架支持动态路由（如果重复注册相同模式的动态路由，框架会抛出异常，程序退出运行），具体使用方法如下：

### 注册

> [!tip]
> 动态路由使用 `:`（英文冒号）开头，后面的字符串作为 `key` 存储在 `ctx` 中。

```rust
server.route("/test/:text", |ctx: Context| {}).await;
```

### 获取全部动态路由参数

```rust
ctx.get_route_params().await;
```

### 获取某个动态路由参数

```rust
ctx.get_route_param("text").await;
```

<Bottom />
