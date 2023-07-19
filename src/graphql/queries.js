/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoupons = /* GraphQL */ `
  query GetCoupons($id: ID!) {
    getCoupons(id: $id) {
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
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
    $filter: ModelCouponsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coupon_code
        discount_value
        validity_date
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAnalytics = /* GraphQL */ `
  query GetAnalytics($id: ID!) {
    getAnalytics(id: $id) {
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
export const listAnalytics = /* GraphQL */ `
  query ListAnalytics(
    $filter: ModelAnalyticsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnalytics(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const analyticsByUsersID = /* GraphQL */ `
  query AnalyticsByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAnalyticsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    analyticsByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getSubscriptions = /* GraphQL */ `
  query GetSubscriptions($id: ID!) {
    getSubscriptions(id: $id) {
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
export const listSubscriptions = /* GraphQL */ `
  query ListSubscriptions(
    $filter: ModelSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const subscriptionsByUsersID = /* GraphQL */ `
  query SubscriptionsByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subscriptionsByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCampaigns = /* GraphQL */ `
  query GetCampaigns($id: ID!) {
    getCampaigns(id: $id) {
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
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getOrderItems = /* GraphQL */ `
  query GetOrderItems($id: ID!) {
    getOrderItems(id: $id) {
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
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const orderItemsByOrdersID = /* GraphQL */ `
  query OrderItemsByOrdersID(
    $ordersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByOrdersID(
      ordersID: $ordersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const orderItemsByProductsID = /* GraphQL */ `
  query OrderItemsByProductsID(
    $productsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByProductsID(
      productsID: $productsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getOrders = /* GraphQL */ `
  query GetOrders($id: ID!) {
    getOrders(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usersID
        OrderItems {
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
      nextToken
      __typename
    }
  }
`;
export const ordersByUsersID = /* GraphQL */ `
  query OrdersByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        usersID
        OrderItems {
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
      nextToken
      __typename
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        product_name
        description
        price
        SKU
        image
        OrderItems {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        email
        password
        contact_numer
        address
        Orders {
          nextToken
          __typename
        }
        Subscriptions {
          nextToken
          __typename
        }
        Analytics {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
