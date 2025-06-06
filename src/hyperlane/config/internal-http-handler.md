---
title: 内置HTTP处理
index: true
icon: book
category:
  - clone
  - web
  - rust
  - config
  - internal-http-handler
order: 8
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持配置 `http` 内部处理方式，默认启用，
> 值得一提的是此配置支持动态路由设置。

## 启用框架内部 `http` 处理

### 静态路由

```rust
server.enable_internal_http_handler("/路由").await;
```

### 朴素动态路由

```rust
server.enable_internal_http_handler("/路由/{id}").await;
```

### 正则表达式动态路由

```rust
server.enable_internal_http_handler("/路由/{number:\\d+}").await;
```

## 禁用 `http` 内部处理

### 静态路由

```rust
server.disable_internal_http_handler("/路由").await;
```

### 朴素动态路由

```rust
server.disable_internal_http_handler("/路由/:id").await;
```

### 正则表达式动态路由

```rust
server.disable_internal_http_handler("/路由/:number:\\d+").await;
```

<Bottom />
