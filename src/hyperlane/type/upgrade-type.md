---
title: UpgradeType
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - upgrade-type
  - type
order: 4
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `UpgradeType` 内部具体类型定义如下

```rust
/// Represents different upgrade types.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum UpgradeType {
    /// WebSocket protocol upgrade
    WebSocket,
    /// HTTP/2 cleartext upgrade (h2c)
    H2c,
    /// TLS upgrade (rare, experimental)
    Tls(String),
    /// Other custom or unknown upgrade protocols
    Unknown(String),
}
```

<Bottom />
