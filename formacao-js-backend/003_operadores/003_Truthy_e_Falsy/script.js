/*
Returns true:
    if (true)
    if ({})
    if ([])
    if (42)
    if ("0")
    if ("false")
    if (new Date())
    if (-42)
    if (12n)
    if (3.14)
    if (-3.14)
    if (Infinity)
    if (-Infinity)

Returns false:
    if (false) {
    // Not reachable
    }

    if (null) {
    // Not reachable
    }

    if (undefined) {
    // Not reachable
    }

    if (0) {
    // Not reachable
    }

    if (-0) {
    // Not reachable
    }

    if (0n) {
    // Not reachable
    }

    if (NaN) {
    // Not reachable
    }

    if ("") {
    // Not reachable
    }

*/