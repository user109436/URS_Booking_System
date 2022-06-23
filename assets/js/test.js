import { Table } from "./helpers/table";
import { request } from "../data/request"

console.log(Table.search(request, "Pending"))
console.log(Table.search(request, "Hi"))

console.log(Table.select(request, "Status", "Pending"))
console.log(Table.select(request, "Status", "Processing"))
console.log(Table.select(request, "Status", "Paid"))