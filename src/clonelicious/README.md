---
title: clonelicious
index: true
icon: book
category:
  - clonelicious
  - spawn
  - rust
dir:
  order: 35
---

<Share colorful />

[GITHUB 地址](https://github.com/eastspire/clonelicious)

<center>

[![](https://img.shields.io/crates/v/clonelicious.svg)](https://crates.io/crates/clonelicious)
[![](https://img.shields.io/crates/d/clonelicious.svg)](https://img.shields.io/crates/d/clonelicious.svg)
[![](https://docs.rs/clonelicious/badge.svg)](https://docs.rs/clonelicious)
[![](https://github.com/eastspire/clonelicious/workflows/Rust/badge.svg)](https://github.com/eastspire/clonelicious/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/clonelicious.svg)](./LICENSE)

</center>

[API 文档](https://docs.rs/clonelicious/latest/clonelicious/)

> clonelicious 是一个 Rust 宏库，简化了克隆和闭包执行。`clone!` 宏自动克隆变量并立即执行闭包，使用克隆的值，这简化了 Rust 编程中的常见模式。

## 安装

要安装 `clonelicious`，运行以下命令：

```sh
cargo add clonelicious
```

## 使用方法

```rust
use clonelicious::*;

let s1: String = String::from("Hello");
let s2: String = String::from("World");
let res: String = clone!(s1, s2 => {
    assert_eq!(s1, String::from("Hello"));
    assert_eq!(s2, String::from("World"));
    format!("{} {}", s1, s2)
});
assert_eq!(res, format!("{} {}", s1, s2));

let s1: String = String::from("Hello");
let s2: String = String::from("World");
let res: String = clone!(s1, s2 => async move {
    assert_eq!(s1, String::from("Hello"));
    assert_eq!(s2, String::from("World"));
    format!("{} {}", s1, s2)
})
.await;
assert_eq!(res, format!("{} {}", s1, s2));

let s1: String = String::from("Hello");
let s2: String = String::from("World");
let res = clone!(s1, s2 => |data| {
    assert_eq!(s1, String::from("Hello"));
    assert_eq!(s2, String::from("World"));
    format!("{} {}{}", s1, s2, data)
});
assert_eq!(res("!"), format!("{} {}{}", s1, s2, "!"));

let s1: String = String::from("Hello");
let s2: String = String::from("World");
let res = clone!(s1, s2 =>  |data| async move {
    assert_eq!(s1, String::from("Hello"));
    assert_eq!(s2, String::from("World"));
    format!("{} {}{}", s1, s2, data)
});
assert_eq!(res("!").await, String::from("Hello World!"));

let s1: String = String::from("Hello");
let s2: String = String::from("World");
let res = clone!(s1, s2 => |data: &str| {
    assert_eq!(s1, String::from("Hello"));
    assert_eq!(s2, String::from("World"));
    format!("{} {}{}", s1, s2, data)
});
assert_eq!(res("!"), format!("{} {}{}", s1, s2, "!"));

let s1: String = String::from("Hello");
let s2: String = String::from("World");
let res = clone!(s1, s2 => |data: String| async move {
    assert_eq!(s1, String::from("Hello"));
    assert_eq!(s2, String::from("World"));
    format!("{} {}{}", s1, s2, data)
});
assert_eq!(res("!".to_owned()).await, format!("{} {}{}", s1, s2, "!"));

let s1: String = String::from("Hello");
let s2: String = String::from("World");
let res = clone!(s1, s2 => move |data| {
    assert_eq!(s1, String::from("Hello"));
    assert_eq!(s2, String::from("World"));
    format!("{} {}{}", s1, s2, data)
});
assert_eq!(res("!"), format!("{} {}{}", s1, s2, "!"));

let s1: String = String::from("Hello");
let s2: String = String::from("World");
let res = clone!(s1, s2 => move |data| async move {
    assert_eq!(s1, String::from("Hello"));
    assert_eq!(s2, String::from("World"));
    format!("{} {}{}", s1, s2, data)
});
assert_eq!(res("!").await, format!("{} {}{}", s1, s2, "!"));

let s1: String = String::from("Hello");
let s2: String = String::from("World");
let res = clone!(s1, s2 => move |data: &str| {
    assert_eq!(s1, String::from("Hello"));
    assert_eq!(s2, String::from("World"));
    format!("{} {}{}", s1, s2, data)
});
assert_eq!(res("!"), format!("{} {}{}", s1, s2, "!"));

let s1: String = String::from("Hello");
let s2: String = String::from("World");
let res = clone!(s1, s2 => move |data: String| async move {
    assert_eq!(s1, String::from("Hello"));
    assert_eq!(s2, String::from("World"));
    format!("{} {}{}", s1, s2, data)
});
assert_eq!(res("!".to_owned()).await, format!("{} {}{}", s1, s2, "!"));
```

## 许可证

本项目使用 MIT 许可证。详情请参见 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系

如有任何疑问，请通过电子邮件联系作者：[root@ltpp.vip](mailto:root@ltpp.vip)。

<Bottom />
