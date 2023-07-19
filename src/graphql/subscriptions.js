/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCoupons = /* GraphQL */ `
  subscription OnCreateCoupons($filter: ModelSubscriptionCouponsFilterInput) {
    onCreateCoupons(filter: $filter) {
      id
      coupon_code
      discount_value
      validity_date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCoupons = /* GraphQL */ `
  subscription OnUpdateCoupons($filter: ModelSubscriptionCouponsFilterInput) {
    onUpdateCoupons(filter: $filter) {
      id
      coupon_code
      discount_value
      validity_date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCoupons = /* GraphQL */ `
  subscription OnDeleteCoupons($filter: ModelSubscriptionCouponsFilterInput) {
    onDeleteCoupons(filter: $filter) {
      id
      coupon_code
      discount_value
      validity_date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAnalytics = /* GraphQL */ `
  subscription OnCreateAnalytics(
    $filter: ModelSubscriptionAnalyticsFilterInput
  ) {
    onCreateAnalytics(filter: $filter) {
      id
      usersID
      page_views
      unique_visitors
      referral_source
      conversion_rate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAnalytics = /* GraphQL */ `
  subscription OnUpdateAnalytics(
    $filter: ModelSubscriptionAnalyticsFilterInput
  ) {
    onUpdateAnalytics(filter: $filter) {
      id
      usersID
      page_views
      unique_visitors
      referral_source
      conversion_rate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAnalytics = /* GraphQL */ `
  subscription OnDeleteAnalytics(
    $filter: ModelSubscriptionAnalyticsFilterInput
  ) {
    onDeleteAnalytics(filter: $filter) {
      id
      usersID
      page_views
      unique_visitors
      referral_source
      conversion_rate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSubscriptions = /* GraphQL */ `
  subscription OnCreateSubscriptions(
    $filter: ModelSubscriptionSubscriptionsFilterInput
  ) {
    onCreateSubscriptions(filter: $filter) {
      id
      usersID
      subscription_type
      start_date
      renewal_date
      subscription_status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSubscriptions = /* GraphQL */ `
  subscription OnUpdateSubscriptions(
    $filter: ModelSubscriptionSubscriptionsFilterInput
  ) {
    onUpdateSubscriptions(filter: $filter) {
      id
      usersID
      subscription_type
      start_date
      renewal_date
      subscription_status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSubscriptions = /* GraphQL */ `
  subscription OnDeleteSubscriptions(
    $filter: ModelSubscriptionSubscriptionsFilterInput
  ) {
    onDeleteSubscriptions(filter: $filter) {
      id
      usersID
      subscription_type
      start_date
      renewal_date
      subscription_status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCampaigns = /* GraphQL */ `
  subscription OnCreateCampaigns(
    $filter: ModelSubscriptionCampaignsFilterInput
  ) {
    onCreateCampaigns(filter: $filter) {
      id
      campaign_name
      start_date
      end_date
      target_audiance
      campaign_details
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCampaigns = /* GraphQL */ `
  subscription OnUpdateCampaigns(
    $filter: ModelSubscriptionCampaignsFilterInput
  ) {
    onUpdateCampaigns(filter: $filter) {
      id
      campaign_name
      start_date
      end_date
      target_audiance
      campaign_details
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCampaigns = /* GraphQL */ `
  subscription OnDeleteCampaigns(
    $filter: ModelSubscriptionCampaignsFilterInput
  ) {
    onDeleteCampaigns(filter: $filter) {
      id
      campaign_name
      start_date
      end_date
      target_audiance
      campaign_details
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateOrderItems = /* GraphQL */ `
  subscription OnCreateOrderItems(
    $filter: ModelSubscriptionOrderItemsFilterInput
  ) {
    onCreateOrderItems(filter: $filter) {
      id
      ordersID
      productsID
      quantity
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateOrderItems = /* GraphQL */ `
  subscription OnUpdateOrderItems(
    $filter: ModelSubscriptionOrderItemsFilterInput
  ) {
    onUpdateOrderItems(filter: $filter) {
      id
      ordersID
      productsID
      quantity
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteOrderItems = /* GraphQL */ `
  subscription OnDeleteOrderItems(
    $filter: ModelSubscriptionOrderItemsFilterInput
  ) {
    onDeleteOrderItems(filter: $filter) {
      id
      ordersID
      productsID
      quantity
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders($filter: ModelSubscriptionOrdersFilterInput) {
    onCreateOrders(filter: $filter) {
      id
      usersID
      OrderItems {
        items {
          id
          ordersID
          productsID
          quantity
          price
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      date
      status
      amount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateOrders = /* GraphQL */ `
  subscription OnUpdateOrders($filter: ModelSubscriptionOrdersFilterInput) {
    onUpdateOrders(filter: $filter) {
      id
      usersID
      OrderItems {
        items {
          id
          ordersID
          productsID
          quantity
          price
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      date
      status
      amount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteOrders = /* GraphQL */ `
  subscription OnDeleteOrders($filter: ModelSubscriptionOrdersFilterInput) {
    onDeleteOrders(filter: $filter) {
      id
      usersID
      OrderItems {
        items {
          id
          ordersID
          productsID
          quantity
          price
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      date
      status
      amount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onCreateProducts(filter: $filter) {
      id
      product_name
      description
      price
      SKU
      image
      OrderItems {
        items {
          id
          ordersID
          productsID
          quantity
          price
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onUpdateProducts(filter: $filter) {
      id
      product_name
      description
      price
      SKU
      image
      OrderItems {
        items {
          id
          ordersID
          productsID
          quantity
          price
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts($filter: ModelSubscriptionProductsFilterInput) {
    onDeleteProducts(filter: $filter) {
      id
      product_name
      description
      price
      SKU
      image
      OrderItems {
        items {
          id
          ordersID
          productsID
          quantity
          price
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
      id
      first_name
      last_name
      email
      password
      contact_numer
      address
      Orders {
        items {
          id
          usersID
          date
          status
          amount
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Subscriptions {
        items {
          id
          usersID
          subscription_type
          start_date
          renewal_date
          subscription_status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Analytics {
        items {
          id
          usersID
          page_views
          unique_visitors
          referral_source
          conversion_rate
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
      id
      first_name
      last_name
      email
      password
      contact_numer
      address
      Orders {
        items {
          id
          usersID
          date
          status
          amount
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Subscriptions {
        items {
          id
          usersID
          subscription_type
          start_date
          renewal_date
          subscription_status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Analytics {
        items {
          id
          usersID
          page_views
          unique_visitors
          referral_source
          conversion_rate
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
      id
      first_name
      last_name
      email
      password
      contact_numer
      address
      Orders {
        items {
          id
          usersID
          date
          status
          amount
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Subscriptions {
        items {
          id
          usersID
          subscription_type
          start_date
          renewal_date
          subscription_status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Analytics {
        items {
          id
          usersID
          page_views
          unique_visitors
          referral_source
          conversion_rate
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
