---
title: ControllerData类型
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 1
---

> [!tip]
> ControllerData 作为中间件和路由处理函数的参数类型，具体类型定义如下

```rust
#[derive(Clone, Debug, Lombok)]
pub struct ControllerData {
    pub(super) stream: OptionArcRwLockStream,
    pub(super) request: Request,
    pub(super) response: Response,
    pub(super) log: Log,
}
```

## 请求

### 获取请求信息

```rust
let controller_data = arc_lock_controller_data.write().await;;
let request: Request = controller_data.get_request().clone();
```

```rust
let controller_data = get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
let request: Request = controller_data.get_request().clone();
```

### 获取可变请求信息

```rust
let controller_data = arc_lock_controller_data.write().await;;
let request: &mut Request = controller_data.get_mut_request();
```

```rust
let controller_data = get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
let request: &mut Request = controller_data.get_mut_request();
```

### 设置请求信息

```rust
let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;;
controller_data.set_request(Request::default());
```

```rust
let mut controller_data = get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
controller_data.set_request(Request::default());
```

## stream

### 获取 `stream`

```rust
let controller_data = arc_lock_controller_data.write().await;;
let stream_lock: Arc<TcpStream> = controller_data.get_stream().clone().unwrap();
```

```rust
let controller_data = get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
let stream_lock: Arc<TcpStream> = controller_data.get_stream().clone().unwrap();
```

### 获取可变 `stream`

```rust
let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;;
controller_data.get_mut_stream().and_then(|mut stream| {});
```

```rust
let mut controller_data = get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
controller_data.get_mut_stream().and_then(|mut stream| {});
```

### 设置 `stream`

```rust
let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;;
controller_data.set_stream(None);
```

```rust
let mut controller_data = get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
controller_data.set_stream(None);
```

## 响应

### 获取响应

```rust
let controller_data = arc_lock_controller_data.write().await;;
let response: Response = controller_data.get_response().clone();
```

```rust
let controller_data = get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
let response: Response = controller_data.get_response().clone();
```

### 获取可变响应

```rust
let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;;
let response: &mut Response = controller_data.get_mut_response();
```

```rust
let mut controller_data = get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
let response: &mut Response = controller_data.get_mut_response();
```

### 设置响应

```rust
let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;;
controller_data.set_response(Response::default());
```

```rust
let mut controller_data = get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
controller_data.set_response(Response::default());
```

## 日志

### 获取日志

```rust
let controller_data = arc_lock_controller_data.write().await;;
let log: &Log = controller_data.get_log();
```

```rust
let controller_data = get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
let log: &Log = controller_data.get_log();
```

### 获取可变日志

```rust
let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;;
let log: &mut Log = controller_data.get_mut_log();
```

```rust
let mut controller_data = get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
let log: &mut Log = controller_data.get_mut_log();
```

### 设置日志

```rust
let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;;
controller_data.set_log(Log::default());
```

```rust
let mut controller_data = get_rw_lock_write_controller_data(&arc_lock_controller_data).await;
controller_data.set_log(Log::default());
```

<Bottom />
