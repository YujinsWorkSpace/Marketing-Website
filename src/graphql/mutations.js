/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCoupons = /* GraphQL */ `
  mutation CreateCoupons(
    $input: CreateCouponsInput!
    $condition: ModelCouponsConditionInput
  ) {
    createCoupons(input: $input, condition: $condition) {
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
export const updateCoupons = /* GraphQL */ `
  mutation UpdateCoupons(
    $input: UpdateCouponsInput!
    $condition: ModelCouponsConditionInput
  ) {
    updateCoupons(input: $input, condition: $condition) {
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
export const deleteCoupons = /* GraphQL */ `
  mutation DeleteCoupons(
    $input: DeleteCouponsInput!
    $condition: ModelCouponsConditionInput
  ) {
    deleteCoupons(input: $input, condition: $condition) {
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
export const createAnalytics = /* GraphQL */ `
  mutation CreateAnalytics(
    $input: CreateAnalyticsInput!
    $condition: ModelAnalyticsConditionInput
  ) {
    createAnalytics(input: $input, condition: $condition) {
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
export const updateAnalytics = /* GraphQL */ `
  mutation UpdateAnalytics(
    $input: UpdateAnalyticsInput!
    $condition: ModelAnalyticsConditionInput
  ) {
    updateAnalytics(input: $input, condition: $condition) {
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
export const deleteAnalytics = /* GraphQL */ `
  mutation DeleteAnalytics(
    $input: DeleteAnalyticsInput!
    $condition: ModelAnalyticsConditionInput
  ) {
    deleteAnalytics(input: $input, condition: $condition) {
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
export const createSubscriptions = /* GraphQL */ `
  mutation CreateSubscriptions(
    $input: CreateSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    createSubscriptions(input: $input, condition: $condition) {
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
export const updateSubscriptions = /* GraphQL */ `
  mutation UpdateSubscriptions(
    $input: UpdateSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    updateSubscriptions(input: $input, condition: $condition) {
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
export const deleteSubscriptions = /* GraphQL */ `
  mutation DeleteSubscriptions(
    $input: DeleteSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    deleteSubscriptions(input: $input, condition: $condition) {
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
export const createCampaigns = /* GraphQL */ `
  mutation CreateCampaigns(
    $input: CreateCampaignsInput!
    $condition: ModelCampaignsConditionInput
  ) {
    createCampaigns(input: $input, condition: $condition) {
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
export const updateCampaigns = /* GraphQL */ `
  mutation UpdateCampaigns(
    $input: UpdateCampaignsInput!
    $condition: ModelCampaignsConditionInput
  ) {
    updateCampaigns(input: $input, condition: $condition) {
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
export const deleteCampaigns = /* GraphQL */ `
  mutation DeleteCampaigns(
    $input: DeleteCampaignsInput!
    $condition: ModelCampaignsConditionInput
  ) {
    deleteCampaigns(input: $input, condition: $condition) {
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
export const createOrderItems = /* GraphQL */ `
  mutation CreateOrderItems(
    $input: CreateOrderItemsInput!
    $condition: ModelOrderItemsConditionInput
  ) {
    createOrderItems(input: $input, condition: $condition) {
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
export const updateOrderItems = /* GraphQL */ `
  mutation UpdateOrderItems(
    $input: UpdateOrderItemsInput!
    $condition: ModelOrderItemsConditionInput
  ) {
    updateOrderItems(input: $input, condition: $condition) {
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
export const deleteOrderItems = /* GraphQL */ `
  mutation DeleteOrderItems(
    $input: DeleteOrderItemsInput!
    $condition: ModelOrderItemsConditionInput
  ) {
    deleteOrderItems(input: $input, condition: $condition) {
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
export const createOrders = /* GraphQL */ `
  mutation CreateOrders(
    $input: CreateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    createOrders(input: $input, condition: $condition) {
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
export const updateOrders = /* GraphQL */ `
  mutation UpdateOrders(
    $input: UpdateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    updateOrders(input: $input, condition: $condition) {
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
export const deleteOrders = /* GraphQL */ `
  mutation DeleteOrders(
    $input: DeleteOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    deleteOrders(input: $input, condition: $condition) {
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
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
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
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
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
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
