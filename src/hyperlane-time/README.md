---
title: hyperlane时间库
index: true
icon: book
category:
  - hyperlane
  - time
  - rust
dir:
  order: 28
---

[GITHUB 地址](https://github.com/ltpp-universe/hyperlane-time)

[LTPP-GIT 地址](https://git.ltpp.vip/root/hyperlane-time)

<Share colorful />
<Catalog />

[![](https://img.shields.io/crates/v/hyperlane-time.svg)](https://crates.io/crates/hyperlane-time)  
[![](https://docs.rs/hyperlane-time/badge.svg)](https://docs.rs/hyperlane-time)  
[![](https://img.shields.io/crates/l/hyperlane-time.svg)](./LICENSE)  
[![](https://github.com/ltpp-universe/hyperlane-time/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/hyperlane-time/actions?query=workflow:Rust)

[官方文档](https://docs.ltpp.vip/hyperlane-time/)  
[API 文档](https://docs.rs/hyperlane-time/latest/hyperlane_time/)

> 一个根据系统的本地设置获取当前时间的库。

## 特性

## 安装

要使用这个库，你可以运行以下命令：

```shell
cargo add hyperlane-time
```

## 使用

```rust
use hyperlane_time::*;
println!("当前时间: {}", current_time());
println!("今天日期: {}", current_date());
```

## 许可证

本项目使用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系

如有任何问题，请通过邮件联系作者 [ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。