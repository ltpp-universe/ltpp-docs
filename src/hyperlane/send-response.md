---
title: 发送响应
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
---

## 设置响应体

```rust
// 省略 server 和 路由处理函数 创建
let mut response: Response = controller_data.get_response().clone();
response.set_body(vec![]);
```

## 设置响应头

```rust
// 省略 server 和 路由处理函数 创建
let mut response: Response = controller_data.get_response().clone();
response.set_header("server", "hyperlane");
```

## 设置状态码

```rust
// 省略 server 和 路由处理函数 创建
let mut response: Response = controller_data.get_response().clone();
response.set_status_code(200);
```

## 发送响应

```rust
// 省略 server 和 路由处理函数 创建
let mut response: Response = controller_data.get_response().clone();
let stream: ControllerDataStream = controller_data.get_stream().clone().unwrap();
let res: ResponseResult = response.send(&stream);
```

## 综合使用

```rust
// 省略 server 创建
server.router("/", |controller_data| {
    let mut response: Response = controller_data.get_response().clone();
    let body: Vec<u8> = "404 Not Found".as_bytes().to_vec();
    let stream: ControllerDataStream = controller_data.get_stream().clone().unwrap();
    let res: ResponseResult = response
        .set_body(body)
        .set_status_code(404)
        .set_header("server", "hyperlane")
        .send(&stream);
});
```
