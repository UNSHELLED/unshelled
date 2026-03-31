# Active Work

> What's in flight. One focus. Update as work progresses.

## Now

- **Task:** Implementing inventory sync with external warehouse API
- **File:** src/server/routers/inventory.ts
- **Status:** Writing the webhook handler for stock updates
- **Branch:** feature/inventory-sync

## Last

- **Completed:** Database schema for inventory tracking
- **Commit:** `feat: inventory tables with trigger timestamps`
- **PR:** #247 (merged)

## Next

1. Webhook signature verification (HMAC-SHA256)
2. Rate limiting for warehouse API calls
3. Error handling for partial syncs
4. Background job for retrying failed updates

## Blockers

None currently.

## Notes

- Warehouse API uses HMAC-SHA256 for webhooks, shared secret in WAREHOUSE_WEBHOOK_SECRET
- They send updates every 5 minutes, batching changes
- Each webhook can contain up to 1000 SKU updates
- Need to handle out-of-order updates (timestamp-based deduplication)

## Related Files

- src/server/routers/inventory.ts — webhook handler
- src/db/schema.prisma — InventoryLog table
- src/server/clients/warehouse.ts — API client
- src/workers/inventory-sync.ts — background job processor

## Decisions Pending

- Should we process webhooks sync (simpler) or async (more scalable)?
- Warehouse wants immediate confirmation, but large batches take time.
