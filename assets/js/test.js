import { Table } from "./helpers/table";
import { request } from "../data/request"

console.log(Table.search(request, "P"))
console.log(Table.search(request, ""))

console.log(Table.select(request, "Status", "Pending"))
console.log(Table.select(request, "Status", "Processing"))
console.log(Table.select(request, "Status", "Paid"))