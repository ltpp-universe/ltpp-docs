---
title: 可恢复线程池
index: true
icon: book
category:
  - recoverable-thread-pool
  - spawn
  - rust
dir:
  order: 34
---

[GITHUB 地址](https://github.com/ltpp-universe/recoverable-thread-pool)

[LTPP-GIT 地址](https://git.ltpp.vip/root/recoverable-thread-pool)

<Share colorful />
<Catalog />
## recoverable-thread-pool

[![](https://img.shields.io/crates/v/recoverable-thread-pool.svg)](https://crates.io/crates/recoverable-thread-pool)<br>
[![](https://docs.rs/recoverable-thread-pool/badge.svg)](https://docs.rs/recoverable-thread-pool)<br>
[![](https://img.shields.io/crates/l/recoverable-thread-pool.svg)](./LICENSE)<br>
[![](https://github.com/ltpp-universe/recoverable-thread-pool/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/recoverable-thread-pool/actions?query=workflow:Rust)

[官方文档](https://docs.ltpp.vip/recoverable-thread-pool/)

[API 文档](https://docs.rs/recoverable-thread-pool/latest/recoverable_thread_pool/)

> 一个支持自动从恐慌中恢复的线程池，允许线程在发生恐慌后重新启动。适用于网络和 Web 编程中的高容错并发场景。

## 安装

要使用此 crate，可以运行以下命令：

```shell
cargo add recoverable-thread-pool
```

## 使用示例

```rust
use recoverable_thread_pool::*;
let thread_pool: ThreadPool = ThreadPool::new(1);
let first_res: SendResult = thread_pool.execute(
    || {
        println!("first");
    },
    |_err| {},
    || {
        println!("finally");
    },
);
println!("{:?}", first_res);
let panic_res: SendResult = thread_pool.execute(
    || {
        panic!("[panic]");
    },
    |err| {
        println!("Catch panic {}", err);
        panic!("[panic]");
    },
    || {
        println!("finally");
    },
);
println!("{:?}", panic_res);
let second_res: SendResult = thread_pool.execute(
    || {
        panic!("[panic]");
    },
    |_err| {
        panic!("[panic]");
    },
    || {
        println!("finally");
    },
);
println!("{:?}", second_res);
loop {}
```

## 许可证

此项目基于 MIT 许可证。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交 issue 或 pull request。

## 联系方式

如有任何问题，请通过以下邮箱联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />