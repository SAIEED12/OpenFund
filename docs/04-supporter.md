# 04 — Supporter Dashboard

## Home States (Supporter)
- Total contributions made (count, all by Supporter)
- Total pending contributions (count where `status == "pending"`)
- Total amount contributed (sum `contribution_amount` where `status == "approved"`)

## Approved Contributions
Table from contributions collection where `status == "approved"`: `campaign_title | contribution_amount | creator_name | status`.

## Explore Campaigns
All campaigns where deadline not passed AND `status == "approved"`, card format:
`campaign_title | creator_name | deadline | funding_goal | amount_raised | View Details Button`.
- View Details navigates to campaign details route.

## Campaign Details
Full campaign info + Contribution form (1 number input: `contribution_amount`).
On submit insert: `campaign_id, campaign_title, contribution_amount, supporter_email, supporter_name, creator_name, creator_email, current_date, status: "pending"`.

## My Contributions
All contributions where `supporter_email == logged-in email`. Tabular, highlight status. Paginated (see challenges doc).

## Purchase Credit
Stripe-based payment. Packages:
| Credits | Price |
|---------|-------|
| 100 | $10 |
| 300 | $25 |
| 800 | $60 |
| 1500 | $110 |

Clicking card redirects to pay specific amount. After success: save payment info, increase Supporter credits. If Stripe fails, use dummy payment and move on.

## Payment History
Table of all payments made by Supporter.
