
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "rahmanullah97097@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923319709781@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Mrunknown54/EVIL-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1271d54767e6d0c21855a.jpg";
global.devs = "923319709781";
global.sudo = process.env.SUDO || "923319709781";
global.owner = process.env.OWNER_NUMBER || "923319709781";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://n9.cl/evil-md";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "SUHAIL_17_06_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NSxcbiAgICAgICAgNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzksXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg3LFxuICAgICAgICA4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxLFxuICAgICAgICAxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDEzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDc1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAzLFxuICAgICAgICA4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDksXG4gICAgICAgIDk0LFxuICAgICAgICA2MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1LFxuICAgICAgICAyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM1LFxuICAgICAgICA2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMzLFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTczLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZpdzJyTG1CVFhYOWFnV3RndlMxN2Npa2hxcStwWm1QYVNEM2tJdUdBRlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjc4MDY3MjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQjQ1Mjc2QjE2RTYzQjBFNzRENjUyMkIzNTczNjdGRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIzNTkyMTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaVlpT2F0YTlRY0NUcXdPYk8wRUdFUVwiLFxuICBcInBob25lSWRcIjogXCI5YTNhMTRmMi0yZDVjLTQ0MTEtOGJkZC0wMDZlZGJmYzkwYjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMjM0LFxuICAgICAgNzYsXG4gICAgICAxNCxcbiAgICAgIDIxOCxcbiAgICAgIDE2NixcbiAgICAgIDg5LFxuICAgICAgMTQxLFxuICAgICAgMjcsXG4gICAgICAxMixcbiAgICAgIDIyOSxcbiAgICAgIDE1MCxcbiAgICAgIDk5LFxuICAgICAgNzQsXG4gICAgICAxNTIsXG4gICAgICA3MyxcbiAgICAgIDE1NixcbiAgICAgIDI0MixcbiAgICAgIDI0MSxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMTY3LFxuICAgICAgMjI4LFxuICAgICAgODYsXG4gICAgICA2OSxcbiAgICAgIDE4OSxcbiAgICAgIDIxOCxcbiAgICAgIDgsXG4gICAgICA2OSxcbiAgICAgIDExMCxcbiAgICAgIDI1LFxuICAgICAgMTUsXG4gICAgICAxNjUsXG4gICAgICA5OSxcbiAgICAgIDQ4LFxuICAgICAgMTk5LFxuICAgICAgMTUwLFxuICAgICAgMzAsXG4gICAgICAyMDEsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyRTNHWTJDQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjc4MDY3MjY5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc5OTIxMjcxNTUwMDA2OjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQXlhelwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00vNmwzb1FwTHVrdFFZWUJTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibGREM1JCYldDMS9pdUQwL2xVcTdzVEsxdWxEWHhvN0ZSUHFPTlVhV3Azcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3MVpQekdRZksvbmhSc3UyTml5UytheUhWWE0xSzhacGxwTkNMZndUL0JsUlVwNUNONHZCU3gzaWx0M3ArZk1qRDVXZU1KTVVIMFJGUERDTUNnWXZEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFc0lCUnYyalFJTFFGSU5NZWFzUGs1NUN4aktWK0diQkMyc3VKc1lGWFRzR2VZdk4zVEtjL3ZCRDZOZSswSFg5bURvQzVkUVRaTDNWMHlaYW9oVzJBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzgwNjcyNjk6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjM1OTIwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUN1RlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3VGLmpzb24iOiAie1wia2V5RGF0YVwiOlwibnMwV1dtbWw3U3V3blE2SXJCQVhUQ3JuZHl6cVVma1BnbTJqNG1TM2hpdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTYyNDUwNzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " *_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇᴠɪʟ ᴍᴅ²⁰²⁴_*",
  author: process.env.PACK_AUTHER || "ᴇᴠɪʟ-ᴍᴅ",
  packname: process.env.PACK_NAME || "ᴇᴠɪʟ-ᴍᴅ",
  botname: process.env.BOT_NAME || "𝐄𝐕𝐈𝐋-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "ᴅᴀʀᴋ ᴇᴠɪʟ",
  errorChat: process.env.ERROR_CHAT || "923319709781",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "EVIL").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
