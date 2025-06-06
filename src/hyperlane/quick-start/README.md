---
title: 快速开始
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - quick-start
  - quick
  - start
dir:
  order: 1
---

<Share colorful />

## Hello World

![](../markdown-images/hello_world.svg)

## 快速开始

> [!tip]
> 这是基于 `hyperlane` 封装的项目（[hyperlane-quick-start](https://github.com/eastspire/hyperlane-quick-start)），旨在简化使用和规范项目代码结构。

### 克隆项目

```sh
git clone https://github.com/eastspire/hyperlane-quick-start.git
```

### 进入项目

```sh
cd hyperlane-quick-start
```

### 运行

> [!tip]
> 此项目使用 `server-manager` 进行服务管理。
> 使用参考 [官方文档](../../server-manager/README.md)。

#### 运行

```sh
cargo run
```

#### 在后台运行

```sh
cargo run -d
```

#### 停止

```sh
cargo run stop
```

#### 重启

```sh
cargo run restart
```

#### 重启在后台运行

```sh
cargo run restart -d
```

#### 热重启

```sh
cargo run hot
```

<Bottom />
