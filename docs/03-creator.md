# 03 — Creator Dashboard

## Dashboard Shell (all roles)
```
Logo | Available Credits | User Image
User Role | User Name
Notification
Navigation
Sections Based on Routes
Footer
```

Role nav:
- Supporter: Home, Explore Campaigns, My Contributions, Purchase Credit, Payment History
- Creator: Home, Add New Campaign, My Campaigns, Withdrawals, Payment History
- Admin: Home, Manage Users, Manage Campaigns, Withdrawal Requests, Reports

## Creator-Home States
- Total campaign count (launched by user)
- Active campaigns (deadline not passed)
- Total amount raised across all campaigns

## Contributions To Review
Table of Contributions where `status == "pending"` for own campaigns:
`supporter_name | campaign_title | contribution_amount | View Contribution Button (modal with message detail) | Approve | Reject`

- Approve: add amount to campaign `raised`, set Contribution `approved`.
- Reject: set Contribution `rejected`, refund amount to Supporter available credits.

## Add New Campaign
Fields: `campaign_title` (e.g. Help us build a solar-powered water pump), `campaign_story`, `category` (Technology, Art, Community, Health), `funding_goal` (number), `minimum_contribution` (number), `deadline`, `reward_info`, `campaign_image_url`.
- imgBB upload supported here.
- On Add: save with `status: "pending"`. Visible to Supporters only after Admin approval.

## My Campaigns
All own campaigns, descending by deadline, table with Update + Delete:
- Update: title, campaign_story, reward_info.
- Delete: remove from campaigns collection, refund all approved Supporters their credits.

## Withdrawals
Business logic: Supporter purchases 10 credits = $1. Creator withdraws 20 credits = $1. Platform earns the spread.
- Min withdraw: 200 credits ($10).

### Creator Total Earnings
Show raised credits + withdrawal $ amount. Example: 500 credits = $25.

### Withdrawal Form
- Credits To Withdraw (number, cannot exceed total raised)
- Withdraw_amount ($) — read-only, auto-computed (20 credits = $1)
- Payment System dropdown: Stripe (required), Bkash, Rocket, Nagad, others optional
- Account Number
- Withdraw Button; if insufficient credit hide button, show "Insufficient credit".
- On submit save: `creator_email, creator_name, withdrawal_credit, withdrawal_amount, payment_system, withdraw_date, status: "pending"`.

## Payment History
Table of all withdrawals paid to Creator.
