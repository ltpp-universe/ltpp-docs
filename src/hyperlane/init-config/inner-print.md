---
title: 框架内部输出
index: true
icon: book
category:
  - clone
  - web
  - rust
  - init-config
  - config
  - inner-print
order: 5
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架内部会对 `panic` 进行输出，默认会启用

### 开启框架内部输出

#### enable_print

```rust
server.enable_print();
```

#### print

```rust
server.print(true);
```

### 关闭框架内部输出

#### disable_print

```rust
server.disable_print().await;
```

#### print

```rust
server.print(true).await;
```

<Bottom />
