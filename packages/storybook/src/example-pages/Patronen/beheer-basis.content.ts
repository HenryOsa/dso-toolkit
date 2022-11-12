import { Breadcrumbs, DefinitionList, Header } from "@dso-toolkit/sources";
import { html, TemplateResult } from "lit-html";

export const header: Header = {
  logo: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQ0IDQ4IiB3aWR0aD0iMjQ0IiBoZWlnaHQ9IjQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJtMjQgMGMtMTMuMjgwNjMyNCAwLTI0IDEwLjcxOTM2NzYtMjQgMjRzMTAuNzE5MzY3NiAyNCAyNCAyNCAyNC0xMC43MTkzNjc2IDI0LTI0Yy0uMDk0ODYxNy0xMy4yODA2MzI0LTEwLjgxNDIyOTItMjQtMjQtMjR6IiBmaWxsPSIjODBiYzAwIi8+PHBhdGggZD0ibTI0IDhjLTguODc4NjEyNyAwLTE2IDcuMTIxMzg3My0xNiAxNnM3LjEyMTM4NzMgMTYgMTYgMTZjOC43ODYxMjcyIDAgMTYtNy4xMjEzODczIDE2LTE2cy03LjIxMzg3MjgtMTYtMTYtMTZ6IiBmaWxsPSIjMjc1OTM3Ii8+PHBhdGggZD0ibTI0IDMyYzQuNDA0NDk0NCAwIDgtMy41OTU1MDU2IDgtOHMtMy41OTU1MDU2LTgtOC04LTggMy41OTU1MDU2LTggOGMwIDQuNDk0MzgyIDMuNTk1NTA1NiA4IDggOHoiIGZpbGw9IiNlMTcwMDAiLz48cGF0aCBkPSJtNzMuMTUgMzMuMTc1YzIuNTUgMCA0LjUwNDE2NjctLjc2NjY2NjcgNS44NjI1LTIuM3MyLjAzNzUtMy43NSAyLjAzNzUtNi42NS0uNjc5MTY2Ny01LjEwODMzMzMtMi4wMzc1LTYuNjI1LTMuMzEyNS0yLjI3NS01Ljg2MjUtMi4yNzUtNC41MDgzMzMzLjc2MjUtNS44NzUgMi4yODc1LTIuMDUgMy43MjkxNjY3LTIuMDUgNi42MTI1YzAgMi45LjY4MzMzMzMgNS4xMTY2NjY3IDIuMDUgNi42NXMzLjMyNSAyLjMgNS44NzUgMi4zem0wLTIuOGMtMS40ODMzMzMzIDAtMi42MTI1LS41MjUtMy4zODc1LTEuNTc1cy0xLjE2MjUtMi41NzUtMS4xNjI1LTQuNTc1LjM4NzUtMy41MTY2NjY3IDEuMTYyNS00LjU1IDEuOTA0MTY2Ny0xLjU1IDMuMzg3NS0xLjU1IDIuNjA4MzMzMy41MTY2NjY3IDMuMzc1IDEuNTUgMS4xNSAyLjU1IDEuMTUgNC41NS0uMzg3NSAzLjUyNS0xLjE2MjUgNC41NzUtMS44OTU4MzMzIDEuNTc1LTMuMzYyNSAxLjU3NXptMTIuNyAyLjY3NWMuODgzMzMzMyAwIDEuMzI1LS4yNDE2NjY3IDEuMzI1LS43MjV2LTguNGMuMTY2NjY2Ny0uMzE2NjY2Ny40NTgzMzMzLS42NTQxNjY3Ljg3NS0xLjAxMjVzLjkwODMzMzMtLjUzNzUgMS40NzUtLjUzNzVjMS4yIDAgMS44LjYxNjY2NjcgMS44IDEuODV2OC4xYzAgLjI1LjEwNDE2NjcuNDMzMzMzMy4zMTI1LjU1cy41NDU4MzMzLjE3NSAxLjAxMjUuMTc1aC40NzVjLjg4MzMzMzMgMCAxLjMyNS0uMjQxNjY2NyAxLjMyNS0uNzI1di04LjRjLjIzMzMzMzMtLjM4MzMzMzMuNTUtLjczNzUuOTUtMS4wNjI1cy44NjY2NjY3LS40ODc1IDEuNC0uNDg3NWMxLjIgMCAxLjguNjE2NjY2NyAxLjggMS44NXY4LjFjMCAuNDgzMzMzMy40NDE2NjY3LjcyNSAxLjMyNS43MjVoLjVjLjg4MzMzMyAwIDEuMzI1LS4yNDE2NjY3IDEuMzI1LS43MjV2LTguNTI1YzAtMi43LTEuMjUtNC4wNS0zLjc1LTQuMDUtLjc2NjY2NjcgMC0xLjQ5NTgzMzMuMTg3NS0yLjE4NzUuNTYyNXMtMS4yNjI1LjgzNzUtMS43MTI1IDEuMzg3NWMtLjUtMS4zLTEuNjI1LTEuOTUtMy4zNzUtMS45NS0uNzUgMC0xLjQ1NDE2NjcuMTc5MTY2Ny0yLjExMjUuNTM3NXMtMS4yMDQxNjY3LjgwNDE2NjctMS42Mzc1IDEuMzM3NWMtLjAxNjY2NjctLjEtLjA1NDE2NjctLjI3OTE2NjctLjExMjUtLjUzNzVzLS4xNDU4MzMzLS41MDQxNjY3LS4yNjI1LS43Mzc1LS4zMDgzMzMzLS4zNS0uNTc1LS4zNWMtLjQzMzMzMzMgMC0uOTI1LjA2MjUtMS40NzUuMTg3NXMtLjgyNS4zMDQxNjY3LS44MjUuNTM3NWMwIC4xMTY2NjY3LjA1LjQzMzMzMzMuMTUuOTVzLjE1IDEuMzMzMzMzMy4xNSAyLjQ1djguMmMwIC40ODMzMzMzLjQ0MTY2NjcuNzI1IDEuMzI1LjcyNXptMjQuMSA1LjI1YzEuOTE2NjY3IDAgMy40MjkxNjctLjM2NjY2NjcgNC41Mzc1LTEuMXMxLjY2MjUtMS43MjUgMS42NjI1LTIuOTc1YzAtMS4xLS4zNDU4MzMtMS44OTU4MzMzLTEuMDM3NS0yLjM4NzVzLTEuNjI5MTY3LS44Mzc1LTIuODEyNS0xLjAzNzVjLS4yNjY2NjctLjA1LS42NS0uMTA4MzMzMy0xLjE1LS4xNzUtLjkxNjY2Ny0uMTE2NjY2Ny0xLjU5MTY2Ny0uMjUtMi4wMjUtLjRzLS42NS0uNDE2NjY2Ny0uNjUtLjhjMC0uNy42MDgzMzMtMS4wNSAxLjgyNS0xLjA1IDEuNTMzMzMzIDAgMi43NTgzMzMtLjM3NSAzLjY3NS0xLjEyNXMxLjM3NS0xLjgxNjY2NjcgMS4zNzUtMy4yYzAtLjI4MzMzMzMtLjA0NTgzMy0uNTc5MTY2Ny0uMTM3NS0uODg3NXMtLjIxMjUtLjU2MjUtLjM2MjUtLjc2MjVsLjA1LS4wNzVjLjMuMDUuNzMzMzMzLjA3NSAxLjMuMDc1LjIgMCAuMzQ1ODMzLS4wNzkxNjY3LjQzNzUtLjIzNzVzLjEzNzUtLjQyMDgzMzMuMTM3NS0uNzg3NXYtLjM3NWMwLS4zODMzMzMzLS4wNTQxNjctLjY1ODMzMzMtLjE2MjUtLjgyNXMtLjI3OTE2Ny0uMjUtLjUxMjUtLjI1aC00LjJjLS41MTY2NjctLjExNjY2NjctMS4xMDgzMzMtLjE3NS0xLjc3NS0uMTc1LTEuNTgzMzMzIDAtMi44NDU4MzMuMzY2NjY2Ny0zLjc4NzUgMS4xcy0xLjQxMjUgMS44LTEuNDEyNSAzLjJjMCAuODUuMTc5MTY3IDEuNTgzMzMzMy41Mzc1IDIuMnMuODYyNSAxLjEwODMzMzMgMS41MTI1IDEuNDc1Yy0uOTY2NjY3LjU1LTEuNDUgMS4zLTEuNDUgMi4yNSAwIC40MzMzMzMzLjA5MTY2Ny44MTY2NjY3LjI3NSAxLjE1cy40NDE2NjcuNTkxNjY2Ny43NzUuNzc1bC0uMDI1LjFjLS43MTY2NjcuMjgzMzMzMy0xLjI3NS42NzkxNjY3LTEuNjc1IDEuMTg3NXMtLjYgMS4xMDQxNjY3LS42IDEuNzg3NWMwIDIuMjE2NjY2NyAxLjg5MTY2NyAzLjMyNSA1LjY3NSAzLjMyNXptLjE3NS0xMi4yNWMtLjY4MzMzMyAwLTEuMjI5MTY3LS4xNTgzMzMzLTEuNjM3NS0uNDc1cy0uNjEyNS0uODE2NjY2Ny0uNjEyNS0xLjUuMjA4MzMzLTEuMTg3NS42MjUtMS41MTI1Ljk1ODMzMy0uNDg3NSAxLjYyNS0uNDg3NWMuNjgzMzMzIDAgMS4yMzMzMzMuMTYyNSAxLjY1LjQ4NzVzLjYyNS44MjkxNjY3LjYyNSAxLjUxMjUtLjIwODMzMyAxLjE4MzMzMzMtLjYyNSAxLjUtLjk2NjY2Ny40NzUtMS42NS40NzV6bS4xIDkuNzVjLS45MzMzMzMgMC0xLjY1ODMzMy0uMTA4MzMzMy0yLjE3NS0uMzI1cy0uNzc1LS41NTgzMzMzLS43NzUtMS4wMjVjMC0uMzUuMTI5MTY3LS42NjI1LjM4NzUtLjkzNzVzLjYxMjUtLjQ5NTgzMzMgMS4wNjI1LS42NjI1Yy40NjY2NjcuMDY2NjY2Ny44MTY2NjcuMTA4MzMzMyAxLjA1LjEyNSAxLjE4MzMzMy4xMzMzMzMzIDIuMDMzMzMzLjI4NzUgMi41NS40NjI1cy43NzUuNDc5MTY2Ny43NzUuOTEyNWMwIC40NjY2NjY3LS4yNDE2NjcuODI1LS43MjUgMS4wNzVzLTEuMi4zNzUtMi4xNS4zNzV6bTE0LjQ1LTIuNjI1Yy42MTY2NjcgMCAxLjI3OTE2Ny0uMDc1IDEuOTg3NS0uMjI1czEuMzA0MTY3LS4zNTgzMzMzIDEuNzg3NS0uNjI1LjcyNS0uNTU4MzMzMy43MjUtLjg3NWMwLS4yMzMzMzMzLS4xMzc1LS41NzA4MzMzLS40MTI1LTEuMDEyNXMtLjUyMDgzMy0uNjYyNS0uNzM3NS0uNjYyNWMtLjA2NjY2NyAwLS4yMzMzMzMuMDU4MzMzMy0uNS4xNzUtLjkzMzMzMy40NjY2NjY3LTEuODUuNy0yLjc1LjctMSAwLTEuNzYyNS0uMjQ1ODMzMy0yLjI4NzUtLjczNzVzLS44MjkxNjctMS4yODc1LS45MTI1LTIuMzg3NWg2LjljLjE1IDAgLjM3NS0uMTcwODMzMy42NzUtLjUxMjVzLjQ1LS42MDQxNjY3LjQ1LS43ODc1YzAtMS45ODMzMzMzLS40Mzc1LTMuNTU4MzMzMy0xLjMxMjUtNC43MjVzLTIuMjEyNS0xLjc1LTQuMDEyNS0xLjc1Yy0xLjkgMC0zLjM3MDgzMy41NTgzMzMzLTQuNDEyNSAxLjY3NXMtMS41NjI1IDIuODI1LTEuNTYyNSA1LjEyNWMwIDIuMTMzMzMzMy41MjUgMy43NzA4MzMzIDEuNTc1IDQuOTEyNXMyLjY1IDEuNzEyNSA0LjggMS43MTI1em0xLjgtNy44NzVoLTQuOWMuMjMzMzMzLTIuMDE2NjY2NyAxLjEyNS0zLjAyNSAyLjY3NS0zLjAyNS43MzMzMzMgMCAxLjI4NzUuMjY2NjY2NyAxLjY2MjUuOHMuNTYyNSAxLjI3NS41NjI1IDIuMjI1em0xMC42IDcuNzVjLjcxNjY2NyAwIDEuMTMzMzMzLS4xNTgzMzMzIDEuMjUtLjQ3NWw0LTExLjc3NWMuMDUtLjE4MzMzMzMuMDc1LS4zMjUuMDc1LS40MjUgMC0uMzMzMzMzMy0uNDMzMzMzLS41LTEuMy0uNWgtLjQ1Yy0uNzUgMC0xLjE2NjY2Ny4xNTgzMzMzLTEuMjUuNDc1bC0xLjg3NSA1LjhjLS4yMzMzMzMuODY2NjY2Ny0uNDY2NjY3IDEuODgzMzMzMy0uNyAzLjA1aC0uMWwtLjItLjg1Yy0uMjgzMzMzLTEuMTY2NjY2Ny0uNDc1LTEuOS0uNTc1LTIuMmwtMS44NS01LjhjLS4wODMzMzMtLjMxNjY2NjctLjUtLjQ3NS0xLjI1LS40NzVoLS41NzVjLS45MTY2NjcgMC0xLjM3NS4xNjY2NjY3LTEuMzc1LjUgMCAuMDgzMzMzMy4wMzMzMzMuMjI1LjEuNDI1bDMuOTc1IDExLjc3NWMuMTE2NjY3LjMxNjY2NjcuNTQxNjY3LjQ3NSAxLjI3NS40NzV6bTguOTUtMTVjLjU2NjY2NyAwIC45NzkxNjctLjA2NjY2NjcgMS4yMzc1LS4ycy4zODc1LS4zNDE2NjY3LjM4NzUtLjYyNXYtMS42MjVjMC0uNTUtLjUyNS0uODI1LTEuNTc1LS44MjUtMS4wODMzMzMgMC0xLjYyNS4yNzUtMS42MjUuODI1djEuNjI1YzAgLjU1LjUyNS44MjUgMS41NzUuODI1em0uMjc1IDE1Yy44ODMzMzMgMCAxLjMyNS0uMjQxNjY2NyAxLjMyNS0uNzI1di0xMS43MjVjMC0uNDgzMzMzMy0uNDQxNjY3LS43MjUtMS4zMjUtLjcyNWgtLjVjLS44ODMzMzMgMC0xLjMyNS4yNDE2NjY3LTEuMzI1LjcyNXYxMS43MjVjMCAuNDgzMzMzMy40NDE2NjcuNzI1IDEuMzI1LjcyNXptNi42MjUgMGMuODgzMzMzIDAgMS4zMjUtLjI0MTY2NjcgMS4zMjUtLjcyNXYtOC40Yy4yNjY2NjctLjQzMzMzMzMuNjEyNS0uOCAxLjAzNzUtMS4xcy44NzkxNjctLjQ1IDEuMzYyNS0uNDVjMS4yNSAwIDEuODc1LjYxNjY2NjcgMS44NzUgMS44NXY4LjFjMCAuNDgzMzMzMy40NDE2NjcuNzI1IDEuMzI1LjcyNWguNDc1Yy40NjY2NjcgMCAuODA0MTY3LS4wNTgzMzMzIDEuMDEyNS0uMTc1cy4zMTI1LS4zLjMxMjUtLjU1di04LjUyNWMwLTIuNy0xLjI2NjY2Ny00LjA1LTMuOC00LjA1LS43MzMzMzMgMC0xLjQzNzUuMTc1LTIuMTEyNS41MjVzLTEuMjI5MTY3LjgtMS42NjI1IDEuMzVjLS4wMTY2NjctLjA4MzMzMzMtLjA1NDE2Ny0uMjU0MTY2Ny0uMTEyNS0uNTEyNXMtLjE0NTgzMy0uNTA4MzMzMy0uMjYyNS0uNzUtLjMxNjY2Ny0uMzYyNS0uNi0uMzYyNWMtLjQzMzMzMyAwLS45MjUuMDYyNS0xLjQ3NS4xODc1cy0uODI1LjMwNDE2NjctLjgyNS41Mzc1YzAgLjExNjY2NjcuMDUuNDMzMzMzMy4xNS45NXMuMTUgMS4zMzMzMzMzLjE1IDIuNDV2OC4yYzAgLjQ4MzMzMzMuNDQxNjY3LjcyNSAxLjMyNS43MjV6bTE2LjgyNSA1LjI1YzEuOTE2NjY3IDAgMy40MjkxNjctLjM2NjY2NjcgNC41Mzc1LTEuMXMxLjY2MjUtMS43MjUgMS42NjI1LTIuOTc1YzAtMS4xLS4zNDU4MzMtMS44OTU4MzMzLTEuMDM3NS0yLjM4NzVzLTEuNjI5MTY3LS44Mzc1LTIuODEyNS0xLjAzNzVjLS4yNjY2NjctLjA1LS42NS0uMTA4MzMzMy0xLjE1LS4xNzUtLjkxNjY2Ny0uMTE2NjY2Ny0xLjU5MTY2Ny0uMjUtMi4wMjUtLjRzLS42NS0uNDE2NjY2Ny0uNjUtLjhjMC0uNy42MDgzMzMtMS4wNSAxLjgyNS0xLjA1IDEuNTMzMzMzIDAgMi43NTgzMzMtLjM3NSAzLjY3NS0xLjEyNXMxLjM3NS0xLjgxNjY2NjcgMS4zNzUtMy4yYzAtLjI4MzMzMzMtLjA0NTgzMy0uNTc5MTY2Ny0uMTM3NS0uODg3NXMtLjIxMjUtLjU2MjUtLjM2MjUtLjc2MjVsLjA1LS4wNzVjLjMuMDUuNzMzMzMzLjA3NSAxLjMuMDc1LjIgMCAuMzQ1ODMzLS4wNzkxNjY3LjQzNzUtLjIzNzVzLjEzNzUtLjQyMDgzMzMuMTM3NS0uNzg3NXYtLjM3NWMwLS4zODMzMzMzLS4wNTQxNjctLjY1ODMzMzMtLjE2MjUtLjgyNXMtLjI3OTE2Ny0uMjUtLjUxMjUtLjI1aC00LjJjLS41MTY2NjctLjExNjY2NjctMS4xMDgzMzMtLjE3NS0xLjc3NS0uMTc1LTEuNTgzMzMzIDAtMi44NDU4MzMuMzY2NjY2Ny0zLjc4NzUgMS4xcy0xLjQxMjUgMS44LTEuNDEyNSAzLjJjMCAuODUuMTc5MTY3IDEuNTgzMzMzMy41Mzc1IDIuMnMuODYyNSAxLjEwODMzMzMgMS41MTI1IDEuNDc1Yy0uOTY2NjY3LjU1LTEuNDUgMS4zLTEuNDUgMi4yNSAwIC40MzMzMzMzLjA5MTY2Ny44MTY2NjY3LjI3NSAxLjE1cy40NDE2NjcuNTkxNjY2Ny43NzUuNzc1bC0uMDI1LjFjLS43MTY2NjcuMjgzMzMzMy0xLjI3NS42NzkxNjY3LTEuNjc1IDEuMTg3NXMtLjYgMS4xMDQxNjY3LS42IDEuNzg3NWMwIDIuMjE2NjY2NyAxLjg5MTY2NyAzLjMyNSA1LjY3NSAzLjMyNXptLjE3NS0xMi4yNWMtLjY4MzMzMyAwLTEuMjI5MTY3LS4xNTgzMzMzLTEuNjM3NS0uNDc1cy0uNjEyNS0uODE2NjY2Ny0uNjEyNS0xLjUuMjA4MzMzLTEuMTg3NS42MjUtMS41MTI1Ljk1ODMzMy0uNDg3NSAxLjYyNS0uNDg3NWMuNjgzMzMzIDAgMS4yMzMzMzMuMTYyNSAxLjY1LjQ4NzVzLjYyNS44MjkxNjY3LjYyNSAxLjUxMjUtLjIwODMzMyAxLjE4MzMzMzMtLjYyNSAxLjUtLjk2NjY2Ny40NzUtMS42NS40NzV6bS4xIDkuNzVjLS45MzMzMzMgMC0xLjY1ODMzMy0uMTA4MzMzMy0yLjE3NS0uMzI1cy0uNzc1LS41NTgzMzMzLS43NzUtMS4wMjVjMC0uMzUuMTI5MTY3LS42NjI1LjM4NzUtLjkzNzVzLjYxMjUtLjQ5NTgzMzMgMS4wNjI1LS42NjI1Yy40NjY2NjcuMDY2NjY2Ny44MTY2NjcuMTA4MzMzMyAxLjA1LjEyNSAxLjE4MzMzMy4xMzMzMzMzIDIuMDMzMzMzLjI4NzUgMi41NS40NjI1cy43NzUuNDc5MTY2Ny43NzUuOTEyNWMwIC40NjY2NjY3LS4yNDE2NjcuODI1LS43MjUgMS4wNzVzLTEuMi4zNzUtMi4xNS4zNzV6bTExLjgtMi42YzEuNDMzMzMzIDAgMi41NzkxNjctLjM3OTE2NjcgMy40Mzc1LTEuMTM3NXMxLjI4NzUtMS43NTQxNjY3IDEuMjg3NS0yLjk4NzVjMC0xLS4yMjUtMS43NjY2NjY3LS42NzUtMi4zcy0xLjE1ODMzMy0uOTkxNjY2Ny0yLjEyNS0xLjM3NWMtLjctLjI4MzMzMzMtMS4xODc1LS40OTE2NjY3LTEuNDYyNS0uNjI1cy0uNTIwODMzLS4zMTY2NjY3LS43Mzc1LS41NS0uMzI1LS41MjUtLjMyNS0uODc1LjE1LS42MjA4MzMzLjQ1LS44MTI1LjctLjI4NzUgMS4yLS4yODc1Yy41ODMzMzMgMCAxLjA4MzMzMy4wOTE2NjY3IDEuNS4yNzVzLjY0MTY2Ny4yNzUuNjc1LjI3NWMuMiAwIC40MTY2NjctLjIyMDgzMzMuNjUtLjY2MjVzLjM1LS44MDQxNjY3LjM1LTEuMDg3NWMwLS40LS4zODMzMzMtLjcyMDgzMzMtMS4xNS0uOTYyNXMtMS41ODMzMzMtLjM2MjUtMi40NS0uMzYyNWMtMS4zMzMzMzMgMC0yLjQwNDE2Ny4zNTgzMzMzLTMuMjEyNSAxLjA3NXMtMS4yMTI1IDEuNjc1LTEuMjEyNSAyLjg3NWMwIDEuMDUuMjY2NjY3IDEuODUuOCAyLjRzMS4yOTE2NjcgMSAyLjI3NSAxLjM1Yy44LjI4MzMzMzMgMS4zNzkxNjcuNTUgMS43Mzc1LjhzLjUzNzUuNi41Mzc1IDEuMDVjMCAuOTMzMzMzMy0uNiAxLjQtMS44IDEuNC0uNDMzMzMzIDAtLjgyMDgzMy0uMDU4MzMzMy0xLjE2MjUtLjE3NXMtLjY2MjUtLjI1NDE2NjctLjk2MjUtLjQxMjUtLjQ4MzMzMy0uMjM3NS0uNTUtLjIzNzVjLS4yMTY2NjcgMC0uNDY2NjY3LjIxMjUtLjc1LjYzNzVzLS40MjUuNzc5MTY2Ny0uNDI1IDEuMDYyNS4yLjU1NDE2NjcuNi44MTI1LjkxNjY2Ny40NjI1IDEuNTUuNjEyNSAxLjI4MzMzMy4yMjUgMS45NS4yMjV6IiBmaWxsPSIjMzk4NzBjIi8+PHBhdGggZD0ibTE5Mi41IDMzLjE3NWMxLjQ2NjY2NyAwIDIuMi0uMzUgMi4yLTEuMDUgMC0uMi0uMDY2NjY3LS41MTI1LS4yLS45Mzc1cy0uMy0uNjM3NS0uNS0uNjM3NWMtLjA2NjY2NyAwLS4xNzUuMDE2NjY2Ny0uMzI1LjA1cy0uMzA4MzMzLjA1LS40NzUuMDVjLS4zNSAwLS42MTY2NjctLjEwNDE2NjctLjgtLjMxMjVzLS4yNzUtLjU1NDE2NjctLjI3NS0xLjAzNzV2LTE0LjQyNWMwLS40NjY2NjY3LS40NDE2NjctLjctMS4zMjUtLjdoLS40NzVjLS44ODMzMzMgMC0xLjMyNS4yMzMzMzMzLTEuMzI1Ljd2MTQuNDc1YzAgMS4zMzMzMzMzLjMxNjY2NyAyLjMwNDE2NjcuOTUgMi45MTI1czEuNDgzMzMzLjkxMjUgMi41NS45MTI1em05LjMyNSAwYzEuOTMzMzMzIDAgMy40MDQxNjctLjU3MDgzMzMgNC40MTI1LTEuNzEyNXMxLjUxMjUtMi44MDQxNjY3IDEuNTEyNS00Ljk4NzUtLjUwNDE2Ny0zLjg1LTEuNTEyNS01LTIuNDc5MTY3LTEuNzI1LTQuNDEyNS0xLjcyNWMtMS45NSAwLTMuNDMzMzMzLjU3NS00LjQ1IDEuNzI1cy0xLjUyNSAyLjgxNjY2NjctMS41MjUgNWMwIDIuMTY2NjY2Ny41MDgzMzMgMy44MjUgMS41MjUgNC45NzVzMi41IDEuNzI1IDQuNDUgMS43MjV6bS0uMDI1LTIuNTI1Yy0uOTMzMzMzIDAtMS42MjUtLjM0NTgzMzMtMi4wNzUtMS4wMzc1cy0uNjc1LTEuNzQ1ODMzMy0uNjc1LTMuMTYyNWMwLTEuNC4yMjUtMi40NDU4MzMzLjY3NS0zLjEzNzVzMS4xNDE2NjctMS4wMzc1IDIuMDc1LTEuMDM3NSAxLjYyMDgzMy4zNDU4MzMzIDIuMDYyNSAxLjAzNzUuNjYyNSAxLjczNzUuNjYyNSAzLjEzNzVjMCAxLjQxNjY2NjctLjIyMDgzMyAyLjQ3MDgzMzMtLjY2MjUgMy4xNjI1cy0xLjEyOTE2NyAxLjAzNzUtMi4wNjI1IDEuMDM3NXptMTAuOCAyLjRjLjkgMCAxLjM1LS4yNDE2NjY3IDEuMzUtLjcyNXYtNS41aC4xbDQgNS44Yy4xLjE2NjY2NjcuMjcwODMzLjI3OTE2NjcuNTEyNS4zMzc1cy41NTQxNjcuMDg3NS45Mzc1LjA4NzVoLjdjLjg4MzMzMyAwIDEuMzI1LS4xMjUgMS4zMjUtLjM3NSAwLS4xMTY2NjY3LS4wNjY2NjctLjI3NS0uMi0uNDc1bC00LjQyNS02LjMyNSAzLjg1LTUuMTVjLjE1LS4yLjIyNS0uMzY2NjY2Ny4yMjUtLjUgMC0uMS0uMS0uMTgzMzMzMy0uMy0uMjVzLS41LS4xLS45LS4xaC0uNjVjLS4zODMzMzMgMC0uNjkxNjY3LjAyOTE2NjctLjkyNS4wODc1cy0uNDA4MzMzLjE3MDgzMzMtLjUyNS4zMzc1bC0zLjYyNSA0Ljk1LS4xLS4wMjV2LTEwLjM1YzAtLjQ2NjY2NjctLjQ1LS43LTEuMzUtLjdoLS40NzVjLS44ODMzMzMgMC0xLjMyNS4yMzMzMzMzLTEuMzI1Ljd2MTcuNDVjMCAuNDgzMzMzMy40NDE2NjcuNzI1IDEuMzI1LjcyNXptMTYuODc1LjEyNWMuNjE2NjY3IDAgMS4yNzkxNjctLjA3NSAxLjk4NzUtLjIyNXMxLjMwNDE2Ny0uMzU4MzMzMyAxLjc4NzUtLjYyNS43MjUtLjU1ODMzMzMuNzI1LS44NzVjMC0uMjMzMzMzMy0uMTM3NS0uNTcwODMzMy0uNDEyNS0xLjAxMjVzLS41MjA4MzMtLjY2MjUtLjczNzUtLjY2MjVjLS4wNjY2NjcgMC0uMjMzMzMzLjA1ODMzMzMtLjUuMTc1LS45MzMzMzMuNDY2NjY2Ny0xLjg1LjctMi43NS43LTEgMC0xLjc2MjUtLjI0NTgzMzMtMi4yODc1LS43Mzc1cy0uODI5MTY3LTEuMjg3NS0uOTEyNS0yLjM4NzVoNi45Yy4xNSAwIC4zNzUtLjE3MDgzMzMuNjc1LS41MTI1cy40NS0uNjA0MTY2Ny40NS0uNzg3NWMwLTEuOTgzMzMzMy0uNDM3NS0zLjU1ODMzMzMtMS4zMTI1LTQuNzI1cy0yLjIxMjUtMS43NS00LjAxMjUtMS43NWMtMS45IDAtMy4zNzA4MzMuNTU4MzMzMy00LjQxMjUgMS42NzVzLTEuNTYyNSAyLjgyNS0xLjU2MjUgNS4xMjVjMCAyLjEzMzMzMzMuNTI1IDMuNzcwODMzMyAxLjU3NSA0LjkxMjVzMi42NSAxLjcxMjUgNC44IDEuNzEyNXptMS44LTcuODc1aC00LjljLjIzMzMzMy0yLjAxNjY2NjcgMS4xMjUtMy4wMjUgMi42NzUtMy4wMjUuNzMzMzMzIDAgMS4yODc1LjI2NjY2NjcgMS42NjI1LjhzLjU2MjUgMS4yNzUuNTYyNSAyLjIyNXptOS44MjUgNy44NzVjMS40NjY2NjcgMCAyLjItLjM1IDIuMi0xLjA1IDAtLjItLjA2NjY2Ny0uNTEyNS0uMi0uOTM3NXMtLjMtLjYzNzUtLjUtLjYzNzVjLS4wODMzMzMgMC0uMi4wMTY2NjY3LS4zNS4wNXMtLjMwODMzMy4wNS0uNDc1LjA1Yy0uMzUgMC0uNjEyNS0uMS0uNzg3NS0uM3MtLjI2MjUtLjU1LS4yNjI1LTEuMDV2LTYuODVoMS41MjVjLjIzMzMzMyAwIC40MDQxNjctLjA4MzMzMzMuNTEyNS0uMjVzLjE2MjUtLjQ0MTY2NjcuMTYyNS0uODI1di0uMzc1YzAtLjM4MzMzMzMtLjA1NDE2Ny0uNjU4MzMzMy0uMTYyNS0uODI1cy0uMjc5MTY3LS4yNS0uNTEyNS0uMjVoLTEuNTI1di0yLjQ1YzAtLjQ4MzMzMzMtLjM1ODMzMy0uNzI1LTEuMDc1LS43MjVoLS42Yy0uNjgzMzMzIDAtMS4wNjY2NjcuMjQxNjY2Ny0xLjE1LjcyNWwtLjMyNSAyLjQ1aC0uNjc1Yy0uMjMzMzMzIDAtLjQwNDE2Ny4wODMzMzMzLS41MTI1LjI1cy0uMTYyNS40NDE2NjY3LS4xNjI1LjgyNXYuMzc1YzAgLjM4MzMzMzMuMDU0MTY3LjY1ODMzMzMuMTYyNS44MjVzLjI3OTE2Ny4yNS41MTI1LjI1aC42NzV2Ni45YzAgMS4zMTY2NjY3LjMyMDgzMyAyLjI4MzMzMzMuOTYyNSAyLjlzMS40OTU4MzMuOTI1IDIuNTYyNS45MjV6IiBmaWxsPSIjMjc1OTM3Ii8+PC9nPjxyZWN0IGZpbGw9IiNlMTcwMDAiIGhlaWdodD0iMTQiIHJ4PSIyIiB0cmFuc2Zvcm09Im1hdHJpeCguOTk2MTk0NyAuMDg3MTU1NzQgLS4wODcxNTU3NCAuOTk2MTk0NyAxLjYxMzk4MyAtMTkuMTg2Mjc4KSIgd2lkdGg9IjQ0IiB4PSIxOTguNTI2IiB5PSIxLjg5MSIvPjxwYXRoIGQ9Im0yMTAuMTMxNTE2IDEyLjg5ODE3NDFjMi4wODggMCAzLjEzMi0uODA0IDMuMTMyLTIuNDEyIDAtLjQ3Mi0uMTI0LS44NTM5OTk5OC0uMzcyLTEuMTQ1OTk5OThzLS41MjgtLjUxNC0uODQtLjY2Ni0uNDY4LS4yMTItLjQ2OC0uMTh2LS4wNDhjLjM1Mi0uMDk2LjY2LS4zMjQuOTI0LS42ODRzLjM5Ni0uNzQuMzk2LTEuMTRjMC0uNjQ4LS4yMy0xLjE2NC0uNjktMS41NDhzLTEuMTI2LS41NzYtMS45OTgtLjU3NmgtMi4xNDhjLS4xMjggMC0uMjIuMDI4LS4yNzYuMDg0cy0uMDg0LjE0OC0uMDg0LjI3NnY3LjY3OTk5OTk4YzAgLjEyOC4wMjguMjIuMDg0LjI3NnMuMTQ4LjA4NC4yNzYuMDg0em0uMDI0LTQuNzc1OTk5OThoLTEuMzkydi0yLjcxMmgxLjM0NGMuNTkyIDAgMS4wMjQuMTA2IDEuMjk2LjMxOHMuNDA4LjU0Mi40MDguOTljMCAuMzkyLS4xNTYuNzI0LS40NjguOTk2cy0uNzA4LjQwOC0xLjE4OC40MDh6bS4zNiAzLjg2Mzk5OTk4aC0xLjc1MnYtMi45NTE5OTk5OGgxLjU0OGMuNjA4IDAgMS4wNy4xMjIgMS4zODYuMzY2cy40NzQuNTkuNDc0IDEuMDM3OTk5OThjMCAuNDgtLjE0NC44NTgtLjQzMiAxLjEzNHMtLjY5Ni40MTQtMS4yMjQuNDE0em04Ljg2OC45MTJjLjA4OCAwIC4xNS0uMDI4LjE4Ni0uMDg0cy4wNTQtLjE0OC4wNTQtLjI3NnYtLjE5MmMwLS4xMjgtLjAxOC0uMjItLjA1NC0uMjc2cy0uMDk4LS4wODQtLjE4Ni0uMDg0aC0zLjUwNHYtMi45Mjc5OTk5OGgzLjEzMmMuMDg4IDAgLjE1LS4wMjguMTg2LS4wODRzLjA1NC0uMTQ4LjA1NC0uMjc2di0uMTkyYzAtLjEyOC0uMDE4LS4yMi0uMDU0LS4yNzZzLS4wOTgtLjA4NC0uMTg2LS4wODRoLTMuMTMydi0yLjczNmgzLjQ5MmMuMDg4IDAgLjE1LS4wMjguMTg2LS4wODRzLjA1NC0uMTQ4LjA1NC0uMjc2di0uMTkyYzAtLjEyOC0uMDE4LS4yMi0uMDU0LS4yNzZzLS4wOTgtLjA4NC0uMTg2LS4wODRoLTQuMTg4Yy0uMTI4IDAtLjIyLjAyOC0uMjc2LjA4NHMtLjA4NC4xNDgtLjA4NC4yNzZ2Ny42Nzk5OTk5OGMwIC4xMjguMDI4LjIyLjA4NC4yNzZzLjE0OC4wODQuMjc2LjA4NHptNC4xODguMDI0Yy4zMiAwIC40OC0uMDg4LjQ4LS4yNjR2LTcuMjQ3OTk5OThoMi4yNjhjLjA4OCAwIC4xNS0uMDI4LjE4Ni0uMDg0cy4wNTQtLjE0OC4wNTQtLjI3NnYtLjE5MmMwLS4xMjgtLjAxOC0uMjItLjA1NC0uMjc2cy0uMDk4LS4wODQtLjE4Ni0uMDg0aC01LjYyOGMtLjA4IDAtLjE0LjAyOC0uMTguMDg0cy0uMDYuMTQ4LS4wNi4yNzZ2LjE5MmMwIC4xMjguMDIuMjIuMDYuMjc2cy4xLjA4NC4xOC4wODRoMi4zMDR2Ny4yNDc5OTk5OGMwIC4xNzYuMTYuMjY0LjQ4LjI2NHptMy40NjggMGMuMjggMCAuNDQtLjA2NC40OC0uMTkybC42ODQtMS45NjhoMy41MjhsLjcwOCAxLjk2OGMuMDQuMTI4LjIuMTkyLjQ4LjE5MmguMDk2Yy4zNDQgMCAuNTE2LS4wNjguNTE2LS4yMDQgMC0uMDQ4LS4wMTItLjEtLjAzNi0uMTU2bC0yLjg0NC03Ljg5NTk5OTk4Yy0uMDMyLS4xMjgtLjE5Mi0uMTkyLS40OC0uMTkyaC0uMzQ4Yy0uMjcyIDAtLjQzMi4wNjQtLjQ4LjE5MmwtMi44NDQgNy44ODM5OTk5OGMtLjAyNC4wNzItLjAzNi4xMjgtLjAzNi4xNjggMCAuMTM2LjE3Mi4yMDQuNTE2LjIwNHptNC4zNjgtMy4wNzE5OTk5OGgtMi44NjhsMS4yNi0zLjU3NmMuMDU2LS4xNDQuMTE2LS4zNzYuMTgtLjY5NmguMDI0Yy4wNTYuMzM2LjEwNC41NjguMTQ0LjY5NnoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5NjE5NDcgLjA4NzE1NTc0IC0uMDg3MTU1NzQgLjk5NjE5NDcgMS41OTc2MDYgLTE5LjE5NTIwMSkiLz48L2c+PC9zdmc+DQo=",
  mainMenu: [
    {
      label: "Menu titel A",
      url: "#",
      active: true,
    },
    {
      label: "Menu titel B",
      url: "#",
    },
    {
      label: "Menu titel C",
      url: "#",
    },
  ],
  useDropDownMenu: "auto",
  authStatus: "none",
  loginUrl: "#login",
  logoutUrl: "#logout",
  userProfileName: "J.A. Jansen",
  userProfileUrl: "#profiel",
  userHomeUrl: "#myhome",
};

export const breadcrumbs: Breadcrumbs = {
  breadcrumbs: [
    {
      label: "Home",
      url: "#",
    },
    {
      label: "Menu titel A",
      url: "#",
    },
  ],
};

export const definitionList: DefinitionList<TemplateResult> = {
  modifier: "dso-columns dso-3-columns",
  definitions: [
    {
      term: html`Aangemaakt door:`,
      descriptions: [
        {
          content: "Gemeente Rotterdam",
        },
      ],
    },
    {
      term: html`Verzoeknummer:`,
      descriptions: [
        {
          content: "12123497987",
        },
      ],
    },
    {
      term: html`Status:`,
      descriptions: [
        {
          content: "Open",
        },
      ],
    },
    {
      term: html`Contactpersoon:`,
      descriptions: [
        {
          content: "Jan van Veen",
        },
      ],
    },
    {
      term: html`Emailadres:`,
      descriptions: [
        {
          content: "j.veen@testmail.nl",
        },
      ],
    },
    {
      term: html`Telefoonnummer:`,
      descriptions: [
        {
          content: "06-12345678",
        },
      ],
    },
    {
      term: html`Creatie datum:`,
      descriptions: [
        {
          content: "17-12-2019",
        },
      ],
    },
    {
      term: html`Beschrijving:`,
      descriptions: [
        {
          content: "-",
        },
      ],
    },
  ],
};
