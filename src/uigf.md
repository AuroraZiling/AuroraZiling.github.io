---
title: UIGF
category:
  - UIGF
  - SRGF
---

## 有关 UIGF 组织

[UIGF-org](https://uigf.org/)

Uniformed Interchangeable Genshin Impact Format Organization

UIGF组织目前制定了4种通用格式，即`UIGF`, `SRGF`, `UIAF` 和 `UIIF`

前两者分别为《原神》和《崩坏：星穹铁道》的通用数据交换格式

`UIAF` 则与《原神》的成就相关，`UIIF` 与背包物品相关

## UIGF 格式

Sangonomiya 项目目前支持`UIGF(Json) v2.2`和`UIGF v2.3`标准

由于UIGF已将`UIGF v2.3`视为最新的UIGF标准，故此处仅介绍`UIGF v2.3`

> Sangonomiya 预计会支持`UIGF(Excel) v2.2`标准的导出，导入将不支持

### 统一可交换抽卡记录标准 v2.3

> Uniformed Interchangeable GachaLog Format standard (UIGF) v2.3

[原文](https://uigf.org/zh/standards/UIGF.html)

以下为`Json Schema`:

```json
{
  "root": {
    "type": "object",
    "properties": {
      "info": {
        "type": "object",
        "properties": {
          "uid": {
            "type": "string",
            "title": "导出记录的 UID"
          },
          "lang": {
            "type": "string",
            "title": "语言 languagecode2-country/regioncode2"
          },
          "export_timestamp": {
            "type": "number",
            "title": "导出 UNIX 时间戳（秒）"
          },
          "export_time": {
            "type": "string",
            "title": "导出时间",
            "description": "yyyy-MM-dd HH:mm:ss"
          },
          "export_app": {
            "type": "string",
            "title": "导出 App 名称"
          },
          "export_app_version": {
            "type": "string",
            "title": "导出 App 版本"
          },
          "uigf_version": {
            "type": "string",
            "title": "UIGF 版本号",
            "pattern": "v\\d+\\.\\d+"
          }
        },
        "required": [
          "uid",
          "uigf_version"
        ],
        "title": "UIGF 导出信息"
      },
      "list": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "uigf_gacha_type": {
              "type": "string",
              "title": "UIGF 卡池类型",
              "description": "用于区分卡池类型不同，但卡池保底计算相同的物品"
            },
            "gacha_type": {
              "type": "string",
              "title": "卡池类型"
            },
            "item_id": {
              "type": "string",
              "title": "物品的内部 ID"
            },
            "count": {
              "type": "string",
              "title": "个数",
              "description": "一般为1"
            },
            "time": {
              "type": "string",
              "title": "获取物品的时间"
            },
            "name": {
              "type": "string",
              "title": "物品名称"
            },
            "item_type": {
              "type": "string",
              "title": "物品类型"
            },
            "rank_type": {
              "type": "string",
              "title": "物品等级"
            },
            "id": {
              "type": "string",
              "title": "记录内部 ID"
            }
          },
          "required": [
            "uigf_gacha_type",
            "gacha_type",
            "id",
            "item_id",
            "time"
          ],
          "title": "UIGF 物品"
        },
        "title": "物品列表"
      }
    },
    "required": [
      "info",
      "list"
    ],
    "title": "UIGF 根对象"
  }
}
```

## SRGF 格式

Asta 项目目前支持`SRGF v1.0`标准

> Asta 预计会加入自定义格式的Excel导出功能，需要注意的是，SRGF并没有支持Excel格式的想法

### 星穹铁道抽卡记录标准 v1.0

> Star Rail GachaLog Format standard (SRGF) v1.0

[原文](https://uigf.org/zh/standards/SRGF.html)

以下为`Json Schema`:

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "info": {
      "type": "object",
      "properties": {
        "uid": {
          "type": "string"
        },
        "lang": {
          "type": "string",
          "description": "语言 languagecode2-country/regioncode2"
        },
        "region_time_zone": {
          "type": "number",
          "description": "时区"
        },
        "export_timestamp": {
          "type": "number",
          "description": "导出 UNIX 时间戳"
        },
        "export_app": {
          "type": "string",
          "description": "导出的 App 名称"
        },
        "export_app_version": {
          "type": "string",
          "description": "导出此份记录的 App 版本号"
        },
        "srgf_version": {
          "type": "string",
          "description": "所应用的 SRGF 的版本,包含此字段以防 SRGF 出现中断性变更时，App 无法处理"
        }
      },
      "description": "包含导出方定义的基本信息",
      "required": [
        "srgf_version",
        "uid",
        "lang",
        "region_time_zone"
      ]
    },
    "list": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "gacha_id": {
            "type": "string",
            "description": "卡池 Id"
          },
          "gacha_type": {
            "type": "string",
            "description": "卡池类型",
            "enum": [
              "1",
              "2",
              "11",
              "12"
            ]
          },
          "item_id": {
            "type": "string",
            "description": "物品 Id"
          },
          "count": {
            "type": "string",
            "description": "数量，通常为1"
          },
          "time": {
            "type": "string",
            "description": "获取物品的时间"
          },
          "name": {
            "type": "string",
            "description": "物品名称"
          },
          "item_type": {
            "type": "string",
            "description": "物品类型"
          },
          "rank_type": {
            "type": "string",
            "description": "物品星级"
          },
          "id": {
            "type": "string",
            "description": "内部 Id"
          }
        },
        "required": [
          "gacha_id",
          "gacha_type",
          "item_id",
          "time",
          "id"
        ]
      },
      "description": "包含卡池记录"
    }
  },
  "required": [
    "info",
    "list"
  ]
}
```