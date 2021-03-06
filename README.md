# Official ZAP-UP Discord Bot API Wrapper
Simple API to search videos, playlists on YouTube.

# Installation
## Node

```sh
$ npm install
```

-------------------------------------------------------------------------------------------------

# Examples

```js
https://api.zap-up.ml/api/youtube/play/Тлее
https://api.zap-up.ml/api/youtube/search/Тлее
https://api.zap-up.ml/api/youtube/info/Тлее
https://api.zap-up.ml/api/youtube/playlist/2021
```

# API
https://api.zap-up.ml/api/youtube/
## play
## search
## info
## playlist

## Response Example

> **URL:** https://api.zap-up.ml/api/youtube/info/Indila - Dernière Danse

```json
{
   "info":{
      "embed":{
         "iframeUrl":"https://www.youtube.com/embed/K5KAc5CoCuk",
         "flashUrl":"http://www.youtube.com/v/K5KAc5CoCuk?version=3&autohide=1",
         "width":1280,
         "height":720,
         "flashSecureUrl":"https://www.youtube.com/v/K5KAc5CoCuk?version=3&autohide=1"
      },
      "title":"Indila - Dernière Danse (Clip Officiel)",
      "description":"1er Album « Mini World » sur iTunes http://po.st/MiniWorld\n\nFacebook : https://www.facebook.com/IndilaOfficiel\nTwitter : http://www.twitter.com/Indila\n\nCompositeurs: Indila - Skalpovich\nAuteur: Indila\nRéalisateur du clip: Sylvain Bressollette",
      "lengthSeconds":"215",
      "ownerProfileUrl":"http://www.youtube.com/user/IndilaVEVO",
      "externalChannelId":"UCN2yX1-7Mc36reG_xuR_J5w",
      "isFamilySafe":true,
      "availableCountries":[
         "AD",
         "AE",
         "AF",
         "AG",
         "AI",
         "AL",
         "AM",
         "AO",
         "AQ",
         "AR",
         "AS",
         "AT",
         "AU",
         "AW",
         "AX",
         "AZ",
         "BA",
         "BB",
         "BD",
         "BE",
         "BF",
         "BG",
         "BH",
         "BI",
         "BJ",
         "BL",
         "BM",
         "BN",
         "BO",
         "BQ",
         "BR",
         "BS",
         "BT",
         "BV",
         "BW",
         "BY",
         "BZ",
         "CA",
         "CC",
         "CD",
         "CF",
         "CG",
         "CH",
         "CI",
         "CK",
         "CL",
         "CM",
         "CN",
         "CO",
         "CR",
         "CU",
         "CV",
         "CW",
         "CX",
         "CY",
         "CZ",
         "DE",
         "DJ",
         "DK",
         "DM",
         "DO",
         "DZ",
         "EC",
         "EE",
         "EG",
         "EH",
         "ER",
         "ES",
         "ET",
         "FI",
         "FJ",
         "FK",
         "FM",
         "FO",
         "FR",
         "GA",
         "GB",
         "GD",
         "GE",
         "GF",
         "GG",
         "GH",
         "GI",
         "GL",
         "GM",
         "GN",
         "GP",
         "GQ",
         "GR",
         "GS",
         "GT",
         "GU",
         "GW",
         "GY",
         "HK",
         "HM",
         "HN",
         "HR",
         "HT",
         "HU",
         "ID",
         "IE",
         "IL",
         "IM",
         "IN",
         "IO",
         "IQ",
         "IR",
         "IS",
         "IT",
         "JE",
         "JM",
         "JO",
         "JP",
         "KE",
         "KG",
         "KH",
         "KI",
         "KM",
         "KN",
         "KP",
         "KR",
         "KW",
         "KY",
         "KZ",
         "LA",
         "LB",
         "LC",
         "LI",
         "LK",
         "LR",
         "LS",
         "LT",
         "LU",
         "LV",
         "LY",
         "MA",
         "MC",
         "MD",
         "ME",
         "MF",
         "MG",
         "MH",
         "MK",
         "ML",
         "MM",
         "MN",
         "MO",
         "MP",
         "MQ",
         "MR",
         "MS",
         "MT",
         "MU",
         "MV",
         "MW",
         "MX",
         "MY",
         "MZ",
         "NA",
         "NC",
         "NE",
         "NF",
         "NG",
         "NI",
         "NL",
         "NO",
         "NP",
         "NR",
         "NU",
         "NZ",
         "OM",
         "PA",
         "PE",
         "PF",
         "PG",
         "PH",
         "PK",
         "PL",
         "PM",
         "PN",
         "PR",
         "PS",
         "PT",
         "PW",
         "PY",
         "QA",
         "RE",
         "RO",
         "RS",
         "RU",
         "RW",
         "SA",
         "SB",
         "SC",
         "SD",
         "SE",
         "SG",
         "SH",
         "SI",
         "SJ",
         "SK",
         "SL",
         "SM",
         "SN",
         "SO",
         "SR",
         "SS",
         "ST",
         "SV",
         "SX",
         "SY",
         "SZ",
         "TC",
         "TD",
         "TF",
         "TG",
         "TH",
         "TJ",
         "TK",
         "TL",
         "TM",
         "TN",
         "TO",
         "TR",
         "TT",
         "TV",
         "TW",
         "TZ",
         "UA",
         "UG",
         "UM",
         "US",
         "UY",
         "UZ",
         "VA",
         "VC",
         "VE",
         "VG",
         "VI",
         "VN",
         "VU",
         "WF",
         "WS",
         "YE",
         "YT",
         "ZA",
         "ZM",
         "ZW"
      ],
      "isUnlisted":false,
      "hasYpcMetadata":false,
      "viewCount":"701279534",
      "category":"Music",
      "publishDate":"2013-12-04",
      "ownerChannelName":"IndilaVEVO",
      "uploadDate":"2013-12-04",
      "videoId":"K5KAc5CoCuk",
      "keywords":[
         "Indila",
         "Dernière",
         "Danse",
         "AZ",
         "French",
         "Pop",
         "vevo",
         "vevo official",
         "indila vevo"
      ],
      "channelId":"UCN2yX1-7Mc36reG_xuR_J5w",
      "isOwnerViewing":false,
      "isCrawlable":true,
      "averageRating":4.9000897,
      "allowRatings":true,
      "author":{
         "id":"UCX4EBb-NmxyntI0mQAErHvQ",
         "name":"IndilaVEVO",
         "user":"IndilaVEVO",
         "channel_url":"https://www.youtube.com/channel/UCX4EBb-NmxyntI0mQAErHvQ",
         "external_channel_url":"https://www.youtube.com/channel/UCN2yX1-7Mc36reG_xuR_J5w",
         "user_url":"http://www.youtube.com/user/IndilaVEVO",
         "thumbnails":[
            {
               "url":"https://yt3.ggpht.com/ytc/AAUvwnhmbFd3NqZRewJG-iSY1XITcqlxK4lG6s7j2r8g=s48-c-k-c0xffffffff-no-nd-rj-mo",
               "width":48,
               "height":48
            },
            {
               "url":"https://yt3.ggpht.com/ytc/AAUvwnhmbFd3NqZRewJG-iSY1XITcqlxK4lG6s7j2r8g=s88-c-k-c0xffffffff-no-nd-rj-mo",
               "width":88,
               "height":88
            },
            {
               "url":"https://yt3.ggpht.com/ytc/AAUvwnhmbFd3NqZRewJG-iSY1XITcqlxK4lG6s7j2r8g=s176-c-k-c0xffffffff-no-nd-rj-mo",
               "width":176,
               "height":176
            }
         ],
         "verified":false,
         "subscriber_count":3930000
      },
      "isPrivate":false,
      "isUnpluggedCorpus":false,
      "isLiveContent":false,
      "media":{
         "song":"Dernière danse",
         "category":"Music",
         "category_url":"https://music.youtube.com/",
         "artist":"Indila",
         "artist_url":"https://www.youtube.com/channel/UCX4EBb-NmxyntI0mQAErHvQ",
         "licensed to youtube by":"UMG (on behalf of Universal Music Division Capitol Music France); UMPG Publishing, SODRAC, Muserk Rights Management, LatinAutor, ASCAP, LatinAutor - UMPG, UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM, LatinAutorPerf, and 19 Music Rights Societies"
      },
      "likes":5485986,
      "dislikes":140537,
      "age_restricted":false,
      "video_url":"https://www.youtube.com/watch?v=K5KAc5CoCuk",
      "storyboards":[
         {
            "templateUrl":"https://i.ytimg.com/sb/K5KAc5CoCuk/storyboard3_L0/default.jpg?sqp=-oaymwENSDfyq4qpAwVwAcABAaLzl_8DBgjfhfrTBQ%3D%3D&sigh=rs%24AOn4CLC7pYiAV-EaUetYfvi1EkgsGK7Ubw",
            "thumbnailWidth":48,
            "thumbnailHeight":27,
            "thumbnailCount":100,
            "interval":0,
            "columns":10,
            "rows":10,
            "storyboardCount":1
         },
         {
            "templateUrl":"https://i.ytimg.com/sb/K5KAc5CoCuk/storyboard3_L1/M$M.jpg?sqp=-oaymwENSDfyq4qpAwVwAcABAaLzl_8DBgjfhfrTBQ%3D%3D&sigh=rs%24AOn4CLBYwWSac1S8CxT2f31HlzKxr4UVqw",
            "thumbnailWidth":80,
            "thumbnailHeight":45,
            "thumbnailCount":109,
            "interval":2000,
            "columns":10,
            "rows":10,
            "storyboardCount":2
         },
         {
            "templateUrl":"https://i.ytimg.com/sb/K5KAc5CoCuk/storyboard3_L2/M$M.jpg?sqp=-oaymwENSDfyq4qpAwVwAcABAaLzl_8DBgjfhfrTBQ%3D%3D&sigh=rs%24AOn4CLB2AVqt9rO1VFhyoDEHmBNyBU6HLQ",
            "thumbnailWidth":160,
            "thumbnailHeight":90,
            "thumbnailCount":109,
            "interval":2000,
            "columns":5,
            "rows":5,
            "storyboardCount":5
         }
      ],
      "thumbnails":[
         {
            "url":"https://i.ytimg.com/vi/K5KAc5CoCuk/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDr4GiE8gr5_qQYrwOCp3PpASSKDA",
            "width":168,
            "height":94
         },
         {
            "url":"https://i.ytimg.com/vi/K5KAc5CoCuk/hqdefault.jpg?sqp=-oaymwEYCMQBEG5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBUWlYVsNlRFAm4tktD6B8hzd0Icg",
            "width":196,
            "height":110
         },
         {
            "url":"https://i.ytimg.com/vi/K5KAc5CoCuk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAxufdPeKD4UUwGokdNAkf4N-pl7w",
            "width":246,
            "height":138
         },
         {
            "url":"https://i.ytimg.com/vi/K5KAc5CoCuk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDqzDQ3wJSUZnmkMeFcG4zXEk7tjA",
            "width":336,
            "height":188
         },
         {
            "url":"https://i.ytimg.com/vi_webp/K5KAc5CoCuk/maxresdefault.webp",
            "width":1920,
            "height":1080
         }
      ]
   }
}
```

# Discord
- mert cimke#4741
