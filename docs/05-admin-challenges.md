# 05 — Admin Dashboard + Challenges

## Admin-Home States
Count of total Supporters, total Creators, total available credits (sum all users' credits), total payments processed.

## Campaign Approvals
Table of campaigns where `status == "pending"` with Approve / Reject:
- Approve: `status -> "approved"` (visible to Supporters).
- Reject: `status -> "rejected"`, notify creator.

## Withdrawal Requests
Table of withdrawals where `status == "pending"` with Payment Success button:
- On click: request `status -> "approved"`, decrease creator raised credits by withdrawal amount.

## Manage Users
Table: `display_name | user_email | photo_url | role | credits` + actions:
- Remove: delete user from DB / server.
- Update Role dropdown: Admin / Creator / Supporter (on change updates role).

## Manage Campaigns
Campaign list table with campaign info + Delete Campaign button (deletes from DB).

## Reports
Reports of suspicious/fraudulent campaigns: reporter name, campaign title, reason, date. Admin can suspend or delete reported campaign.

## Challenges

### Secure Authorization
Role-Based Authorization. Middleware for Supporter, Creator, Admin.

### Notification System
When Creator changes Contribution status, insert into notifications collection:
```js
{ message: "Your Contribution of {amount} credits to {campaignTitle} was approved by {creatorName}", toEmail: "{supporterEmail}", actionRoute: "/dashboard/supporter-home", time: new Date() }
```
Do for: approve/reject Contribution (creator->supporter), approve withdrawal (admin->creator), approve/reject campaign (admin->creator), new Contribution (supporter->creator).
- Click notification icon: show all where `toEmail == current user email`, sorted desc.
- Floating pop-up; click anywhere hides it.

### Pagination
Implement on My Contributions (Supporter).

### Image Uploading (imgBB)
On registration + Add New Campaign routes.

### Additional Info
- Host images anywhere. Vanilla CSS or any library allowed.
- Host on Vercel. Deploy server + client day one.
- Submit: Admin email/password, Front-end live link, Client GitHub, Server GitHub.

### Optional Extras
1. Automated Email Notifications (SendGrid / AWS SES) for approval/rejection, Contribution, withdrawal.
2. Advanced Search/Filter (category, deadline, funding goal, status) via MongoDB aggregation.
3. Report System for invalid campaigns (supporter reports -> admin action).
