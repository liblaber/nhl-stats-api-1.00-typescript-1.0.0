# MiscellaneousService

A list of all methods in the `MiscellaneousService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                                                           |
| :---------------------------------------------------- | :------------------------------------------------------------------------------------ |
| [getConfiguration](#getconfiguration)                 | Retrieve configuration information.                                                   |
| [pingServer](#pingserver)                             | Ping the server to check connectivity.                                                |
| [getCountryInformation](#getcountryinformation)       | Retrieve country information. Returns list of all countries with a hockey presence(?) |
| [getShiftCharts](#getshiftcharts)                     | Retrieve shift charts for a specific game.                                            |
| [getGlossary](#getglossary)                           | Retrieve the glossary for a specific language.                                        |
| [getContentModule](#getcontentmodule)                 | Retrieve content module information.                                                  |
| [getContentModuleMetadata](#getcontentmodulemetadata) | Retrieve metadata for content modules.                                                |

## getConfiguration

Retrieve configuration information.

- HTTP Method: `GET`
- Endpoint: `/{lang}/config`

**Parameters**

| Name | Type   | Required | Description   |
| :--- | :----- | :------- | :------------ |
| lang | string | ✅       | Language code |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NhlStats } from 'nhl_stats';

(async () => {
  const nhlStats = new NhlStats({});

  const { data } = await nhlStats.miscellaneous.getConfiguration('lang');

  console.log(data);
})();
```

## pingServer

Ping the server to check connectivity.

- HTTP Method: `GET`
- Endpoint: `/ping`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NhlStats } from 'nhl_stats';

(async () => {
  const nhlStats = new NhlStats({});

  const { data } = await nhlStats.miscellaneous.pingServer();

  console.log(data);
})();
```

## getCountryInformation

Retrieve country information. Returns list of all countries with a hockey presence(?)

- HTTP Method: `GET`
- Endpoint: `/{lang}/country`

**Parameters**

| Name | Type   | Required | Description   |
| :--- | :----- | :------- | :------------ |
| lang | string | ✅       | Language code |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NhlStats } from 'nhl_stats';

(async () => {
  const nhlStats = new NhlStats({});

  const { data } = await nhlStats.miscellaneous.getCountryInformation('lang');

  console.log(data);
})();
```

## getShiftCharts

Retrieve shift charts for a specific game.

- HTTP Method: `GET`
- Endpoint: `/{lang}/shiftcharts`

**Parameters**

| Name       | Type   | Required | Description   |
| :--------- | :----- | :------- | :------------ |
| lang       | string | ✅       | Language code |
| cayenneExp | string | ✅       | Required      |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NhlStats } from 'nhl_stats';

(async () => {
  const nhlStats = new NhlStats({});

  const { data } = await nhlStats.miscellaneous.getShiftCharts('lang', {
    cayenneExp: 'cayenneExp',
  });

  console.log(data);
})();
```

## getGlossary

Retrieve the glossary for a specific language.

- HTTP Method: `GET`
- Endpoint: `/{lang}/glossary`

**Parameters**

| Name | Type   | Required | Description   |
| :--- | :----- | :------- | :------------ |
| lang | string | ✅       | Language code |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NhlStats } from 'nhl_stats';

(async () => {
  const nhlStats = new NhlStats({});

  const { data } = await nhlStats.miscellaneous.getGlossary('lang');

  console.log(data);
})();
```

## getContentModule

Retrieve content module information.

- HTTP Method: `GET`
- Endpoint: `/{lang}/content/module`

**Parameters**

| Name | Type   | Required | Description   |
| :--- | :----- | :------- | :------------ |
| lang | string | ✅       | Language code |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NhlStats } from 'nhl_stats';

(async () => {
  const nhlStats = new NhlStats({});

  const { data } = await nhlStats.miscellaneous.getContentModule('lang');

  console.log(data);
})();
```

## getContentModuleMetadata

Retrieve metadata for content modules.

- HTTP Method: `GET`
- Endpoint: `/content/module/meta`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NhlStats } from 'nhl_stats';

(async () => {
  const nhlStats = new NhlStats({});

  const { data } = await nhlStats.miscellaneous.getContentModuleMetadata();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
