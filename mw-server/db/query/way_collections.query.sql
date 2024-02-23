-- name: CreateWayCollection :one
INSERT INTO way_collections(
    owner_uuid,
    created_at,
    updated_at,
    name
) VALUES (
    $1, $2, $3, $4
) RETURNING *;


-- name: GetListWayCollectionsByUserId :many
SELECT * FROM way_collections
WHERE way_collections.owner_uuid = $1
ORDER BY created_at;

-- name: UpdateWayCollection :one
UPDATE way_collections
SET
name = coalesce(sqlc.narg('name'), name),
updated_at = coalesce(sqlc.narg('updated_at'), updated_at)
WHERE uuid = sqlc.arg('uuid')
RETURNING *;

-- name: DeleteWayCollection :exec
DELETE FROM way_collections
WHERE uuid = $1;