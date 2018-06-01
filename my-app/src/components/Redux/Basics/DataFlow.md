# Data Flow

Redux architecture revolves around a **strict unidirectional data flow**.

This means that all data in an application follows the same lifecycle pattern, making the logic of your app more predictable and easier to understand. It also encouages data normalization, so that ytou don't end up with multiple, independent copies of the same data that are unaware of one another.

If you're still not convinced, read Motivation and The case for Flux for a compelling argument in favor of unidirectional data flow. Although Redux is not exacyly Flux, it shares the same key benefits.