---
title: HTTP压缩解压库
index: true
icon: book
category:
  - http-compress
  - compress
  - rust
dir:
  order: 22
---

[GITHUB 地址](https://github.com/ltpp-universe/http-compress)

[LTPP-GIT 地址](https://git.ltpp.vip/root/http-compress)

<Share colorful />
<Catalog />

[![](https://img.shields.io/crates/v/http-compress.svg)](https://crates.io/crates/http-compress)<br>
[![](https://docs.rs/http-compress/badge.svg)](https://docs.rs/http-compress)<br>
[![](https://img.shields.io/crates/l/http-compress.svg)](./license)<br>
[![](https://github.com/ltpp-universe/http-compress/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/http-compress/actions?query=workflow:Rust)

[官方文档](https://docs.ltpp.vip/HTTP-COMPRESS/)
[API 文档](https://docs.rs/http-compress/latest/http_compress/)

> 一个支持 Brotli、Deflate 和 Gzip 的轻量级 HTTP 响应解压库。

## 安装

要使用此 crate，可以运行以下命令：

```shell
cargo add http-compress
```

## 使用示例

```rust
use http_compress::*;
use http_type::*;
use std::collections::HashMap;

let headers: HttpHeaderMap = HashMap::new();
let data: Vec<u8> = vec![];
let body: Vec<u8> = Compress::from(&headers).decode(&data, 1024);

assert_eq!(body, data);
```

## 许可证

此项目基于 MIT 许可证授权。详细信息请查看 [license](license) 文件。

## 贡献

欢迎贡献！请提交 issue 或创建 pull request。

## 联系方式

如有任何疑问，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。