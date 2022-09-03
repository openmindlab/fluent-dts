export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Json: any;
};

/**  Query type defines the GraphQL operations that fetch data from the server */
export type Query = {
  __typename?: 'Query';
  /**  Find a Article entity */
  articleById?: Maybe<Article>;
  /**  Search for ArticleItem entities */
  articleItems?: Maybe<ArticleItemConnection>;
  /**  Search for Article entities */
  articles?: Maybe<ArticleConnection>;
  /**  Returns the articles currently enroute to, or awaiting collection from, a given location or set of locations. Either 'fromLocation' or 'toLocation' should be provided. */
  articlesByLocation?: Maybe<ArticleConnection>;
  /**  Find a BillingAccount entity */
  billingAccount?: Maybe<BillingAccount>;
  /**  Search for BillingAccount entities */
  billingAccounts?: Maybe<BillingAccountConnection>;
  /**  Find a Carrier entity */
  carrier?: Maybe<Carrier>;
  /**  Search for CarrierAttribute entities */
  carrierAttributes?: Maybe<CarrierAttributeConnection>;
  /**  Find a Carrier entity */
  carrierById?: Maybe<Carrier>;
  /**  Find a CarrierConsignment entity */
  carrierConsignment?: Maybe<CarrierConsignment>;
  /**  Find a CarrierConsignmentArticle entity */
  carrierConsignmentArticleById?: Maybe<CarrierConsignmentArticle>;
  /**  Search for CarrierConsignmentArticle entities */
  carrierConsignmentArticles?: Maybe<CarrierConsignmentArticleConnection>;
  /**  Search for CarrierConsignment entities */
  carrierConsignments?: Maybe<CarrierConsignmentConnection>;
  /**  Search for CarrierDetails entities */
  carrierDetailses?: Maybe<CarrierDetailsConnection>;
  /**  Search for Carrier entities */
  carriers?: Maybe<CarrierConnection>;
  /**  Search for Category entities */
  categories?: Maybe<CategoryConnection>;
  /**  Find a Category entity */
  category?: Maybe<Category>;
  /**  Find a Comment entity */
  commentById?: Maybe<Comment>;
  /**  Search for Comment entities */
  comments?: Maybe<CommentConnection>;
  /**  Find a ConsignmentArticle entity */
  consignmentArticleById?: Maybe<ConsignmentArticle>;
  /**  Search for ConsignmentArticle entities */
  consignmentArticles?: Maybe<ConsignmentArticleConnection>;
  /**  Find a Consignment entity */
  consignmentById?: Maybe<Consignment>;
  /**  Search for Consignment entities */
  consignments?: Maybe<ConsignmentConnection>;
  /**  Find a Control entity */
  control?: Maybe<Control>;
  /**  Find a ControlGroup entity */
  controlGroup?: Maybe<ControlGroup>;
  /**  Search for ControlGroup entities */
  controlGroups?: Maybe<ControlGroupConnection>;
  /**  Search for Control entities */
  controls?: Maybe<ControlConnection>;
  /**  Find a CreditMemo entity */
  creditMemo?: Maybe<CreditMemo>;
  /**  Search for CreditMemo entities */
  creditMemoes?: Maybe<CreditMemoConnection>;
  /**  Find a CreditMemoItem entity */
  creditMemoItem?: Maybe<CreditMemoItem>;
  /**  Search for CreditMemoItem entities */
  creditMemoItems?: Maybe<CreditMemoItemConnection>;
  /**  Search for Currency entities */
  currencies?: Maybe<CurrencyConnection>;
  /**  Find a Currency entity */
  currency?: Maybe<Currency>;
  /**  Find a Customer entity */
  customer?: Maybe<Customer>;
  /**  Find a CustomerAddress entity */
  customerAddressById?: Maybe<CustomerAddress>;
  /**  Search for CustomerAddress entities */
  customerAddresses?: Maybe<CustomerAddressConnection>;
  /**  Find a Customer entity */
  customerById?: Maybe<Customer>;
  /**  Search for Customer entities */
  customers?: Maybe<CustomerConnection>;
  /**
   *  _Disclaimer:  This query is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
   *  Find a `DecisionTable` entity
   */
  decisionTable?: Maybe<DecisionTable>;
  /**  Search for FinancialTransaction entities */
  financialTransactions?: Maybe<FinancialTransactionConnection>;
  /**  Find a Fulfilment entity */
  fulfilmentById?: Maybe<Fulfilment>;
  /**  Search for FulfilmentChoice entities */
  fulfilmentChoices?: Maybe<FulfilmentChoiceConnection>;
  /**  Search for FulfilmentItem entities */
  fulfilmentItems?: Maybe<FulfilmentItemConnection>;
  /**  Find a FulfilmentOption entity */
  fulfilmentOptionById?: Maybe<FulfilmentOption>;
  /**  Search for FulfilmentOption entities */
  fulfilmentOptions?: Maybe<FulfilmentOptionConnection>;
  /**  Find a FulfilmentPlan entity */
  fulfilmentPlanById?: Maybe<FulfilmentPlan>;
  /**  Search for FulfilmentPlan entities */
  fulfilmentPlans?: Maybe<FulfilmentPlanConnection>;
  /**  Search for Fulfilment entities */
  fulfilments?: Maybe<FulfilmentConnection>;
  /**  Find a GroupProduct entity */
  groupProduct?: Maybe<GroupProduct>;
  /**  Search for GroupProduct entities */
  groupProducts?: Maybe<GroupProductConnection>;
  /**  Find a InventoryCatalogue entity */
  inventoryCatalogue?: Maybe<InventoryCatalogue>;
  /**  Search for InventoryCatalogue entities */
  inventoryCatalogues?: Maybe<InventoryCatalogueConnection>;
  /**  Find a InventoryPosition entity */
  inventoryPosition?: Maybe<InventoryPosition>;
  /**  Retrieve the aggregate onHand of Inventory Position for one Product */
  inventoryPositionAggregate?: Maybe<InventoryPositionAggregateOutput>;
  /**  Search for InventoryPosition entities */
  inventoryPositions?: Maybe<InventoryPositionConnection>;
  /**  Search for InventoryQuantity entities */
  inventoryQuantities?: Maybe<InventoryQuantityConnection>;
  /**  Find a InventoryQuantity entity */
  inventoryQuantity?: Maybe<InventoryQuantity>;
  /**  Retrieve the aggregate qty of Inventory Quantity */
  inventoryQuantityAggregate?: Maybe<InventoryQuantityAggregateOutput>;
  /**  Find a Invoice entity */
  invoice?: Maybe<Invoice>;
  /**  Find a InvoiceItem entity */
  invoiceItem?: Maybe<InvoiceItem>;
  /**  Search for InvoiceItem entities */
  invoiceItems?: Maybe<InvoiceItemConnection>;
  /**  Search for Invoice entities */
  invoices?: Maybe<InvoiceConnection>;
  /**  Find a Location entity */
  location?: Maybe<Location>;
  /**  Find a Location entity */
  locationById?: Maybe<Location>;
  /**  Search for Location entities */
  locations?: Maybe<LocationConnection>;
  /**  Find a Manifest entity */
  manifest?: Maybe<Manifest>;
  /**  Search for Manifest entities */
  manifests?: Maybe<ManifestConnection>;
  /**  Find a User entity */
  me?: Maybe<User>;
  /**  Find a Network entity */
  network?: Maybe<Network>;
  /**  Find a Network entity */
  networkById?: Maybe<Network>;
  /**  Search for Network entities */
  networks?: Maybe<NetworkConnection>;
  /**  Search for OpeningSchedule entities */
  openingSchedules?: Maybe<OpeningScheduleConnection>;
  /**  Find a Order entity */
  order?: Maybe<Order>;
  /**  Find a Order entity */
  orderById?: Maybe<Order>;
  /**  Find a OrderItem entity */
  orderItemById?: Maybe<OrderItem>;
  /**  Search for OrderItem entities */
  orderItems?: Maybe<OrderItemConnection>;
  /**  Search for Order entities */
  orders?: Maybe<OrderConnection>;
  /**  Find a Payment entity */
  payment?: Maybe<Payment>;
  /**  Search for Payment entities */
  payments?: Maybe<PaymentConnection>;
  /**  Find a PaymentServiceProvider entity */
  paymentServiceProvider?: Maybe<PaymentServiceProvider>;
  /**  Search for PaymentServiceProvider entities */
  paymentServiceProviders?: Maybe<PaymentServiceProviderConnection>;
  /**  Search for PaymentTransaction entities */
  paymentTransactions?: Maybe<PaymentTransactionConnection>;
  /**  Find a Permission entity */
  permission?: Maybe<Permission>;
  /**  Search for Permission entities */
  permissions?: Maybe<PermissionConnection>;
  /**  Search for Price entities */
  prices?: Maybe<PriceConnection>;
  /**  Find a ProductCatalogue entity */
  productCatalogue?: Maybe<ProductCatalogue>;
  /**  Search for ProductCatalogue entities */
  productCatalogues?: Maybe<ProductCatalogueConnection>;
  /**  Find a Retailer entity */
  retailerById?: Maybe<Retailer>;
  /**  Search for Retailer entities */
  retailers?: Maybe<RetailerConnection>;
  /**  Find a ReturnFulfilment entity */
  returnFulfilment?: Maybe<ReturnFulfilment>;
  /**  Find a ReturnFulfilmentItem entity */
  returnFulfilmentItem?: Maybe<ReturnFulfilmentItem>;
  /**  Search for ReturnFulfilmentItem entities */
  returnFulfilmentItems?: Maybe<ReturnFulfilmentItemConnection>;
  /**  Search for ReturnFulfilment entities */
  returnFulfilments?: Maybe<ReturnFulfilmentConnection>;
  /**  Find a ReturnOrder entity */
  returnOrder?: Maybe<ReturnOrder>;
  /**  Find a ReturnOrderItem entity */
  returnOrderItem?: Maybe<ReturnOrderItem>;
  /**  Search for ReturnOrderItem entities */
  returnOrderItems?: Maybe<ReturnOrderItemConnection>;
  /**  Search for ReturnOrder entities */
  returnOrders?: Maybe<ReturnOrderConnection>;
  /**  Search for ReturnVerification entities */
  returnVerifications?: Maybe<ReturnVerificationConnection>;
  /**  Find a Role entity */
  role?: Maybe<Role>;
  /**  Search for Role entities */
  roles?: Maybe<RoleConnection>;
  /**  This query searches the virtual inventory to return locations and available-to-sell stock for the requested products and their given quantities. */
  searchVirtualInventory?: Maybe<VirtualInventoryConnection>;
  /**  Find a Setting entity */
  setting?: Maybe<Setting>;
  /**  Search for Setting entities */
  settings?: Maybe<SettingConnection>;
  /**  Find a StandardProduct entity */
  standardProduct?: Maybe<StandardProduct>;
  /**  Search for StandardProduct entities */
  standardProducts?: Maybe<StandardProductConnection>;
  /**  Find a StorageArea entity */
  storageAreaById?: Maybe<StorageArea>;
  /**  Search for StorageArea entities */
  storageAreas?: Maybe<StorageAreaConnection>;
  /**  Find a StoreAddress entity */
  storeAddressById?: Maybe<StoreAddress>;
  /**  Search for StoreAddress entities */
  storeAddresses?: Maybe<StoreAddressConnection>;
  /**  Find a User entity */
  user?: Maybe<User>;
  /**  Find a User entity */
  userById?: Maybe<User>;
  /**  Search for User entities */
  users?: Maybe<UserConnection>;
  /**  Find a VariantProduct entity */
  variantProduct?: Maybe<VariantProduct>;
  /**  Search for VariantProduct entities */
  variantProducts?: Maybe<VariantProductConnection>;
  /**  Find a VirtualCatalogue entity */
  virtualCatalogue?: Maybe<VirtualCatalogue>;
  /**  Search for VirtualCatalogue entities */
  virtualCatalogues?: Maybe<VirtualCatalogueConnection>;
  /**  Find a VirtualPosition entity */
  virtualPosition?: Maybe<VirtualPosition>;
  /**  Search for VirtualPosition entities */
  virtualPositions?: Maybe<VirtualPositionConnection>;
  /**
   *  _Disclaimer:  This query is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
   *  Find a `VirtualView` entity
   */
  virtualView?: Maybe<VirtualView>;
  /**
   *  _Disclaimer:  This query is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
   *  This query searches a Virtual View to find locations that contain the required stock of products and provide that data as available
   * inventory levels. The query looks into the buffered inventory of the locations. The maximum number of locations returned by this query is 100.
   */
  virtualViewInventoryLevels?: Maybe<VirtualViewInventoryLevelsOutput>;
  /**  Find a Wave entity */
  waveById?: Maybe<Wave>;
  /**  Search for WaveItem entities */
  waveItems?: Maybe<WaveItemConnection>;
  /**  Search for Wave entities */
  waves?: Maybe<WaveConnection>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryArticleByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryArticleItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  barcode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Array<Scalars['Int']>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Array<Scalars['Float']>>;
  last?: InputMaybe<Scalars['Int']>;
  length?: InputMaybe<Array<Scalars['Float']>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  weight?: InputMaybe<Array<Scalars['Float']>>;
  width?: InputMaybe<Array<Scalars['Float']>>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryArticlesByLocationArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  carrierName?: InputMaybe<Scalars['String']>;
  consignmentStatus?: InputMaybe<Array<Scalars['String']>>;
  createdOn?: InputMaybe<DateRange>;
  customerEmail?: InputMaybe<Scalars['String']>;
  customerFirstName?: InputMaybe<Scalars['String']>;
  customerLastName?: InputMaybe<Scalars['String']>;
  customerPhone?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  fromLocation?: InputMaybe<Array<LocationKey>>;
  last?: InputMaybe<Scalars['Int']>;
  orderRef?: InputMaybe<Array<Scalars['String']>>;
  orderType?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<Scalars['String']>>;
  toLocation?: InputMaybe<Array<LocationKey>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryBillingAccountArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryBillingAccountsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  customer?: InputMaybe<CustomerLinkInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  retailer?: InputMaybe<RetailerLinkInput>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
  workflow?: InputMaybe<WorkflowLinkInput>;
  workflowRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  workflowVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  value?: InputMaybe<Array<Scalars['String']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierConsignmentArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierConsignmentArticleByIdArgs = {
  article?: InputMaybe<ArticleId>;
  carrierConsignment?: InputMaybe<CarrierConsignmentKey>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierConsignmentArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierConsignmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  consignmentReference?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  labelUrl?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  orderSummaryUrl?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trackingLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierDetailsesArgs = {
  after?: InputMaybe<Scalars['String']>;
  agentId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  before?: InputMaybe<Scalars['String']>;
  carrierId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  retailerId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarriersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<ProductCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCategoryArgs = {
  catalogue: ProductCatalogueKey;
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCommentByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  entityId?: InputMaybe<Array<Scalars['ID']>>;
  entityType?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryConsignmentArticleByIdArgs = {
  article?: InputMaybe<ArticleId>;
  consignment?: InputMaybe<ConsignmentId>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryConsignmentArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryConsignmentByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryConsignmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  consignmentReference?: InputMaybe<Array<Scalars['String']>>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  labelUrl?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  orderSummaryUrl?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trackingLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryControlArgs = {
  controlGroup: ControlGroupKey;
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryControlGroupArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryControlGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  retailerRefs?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryControlsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  executionOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCreditMemoArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCreditMemoesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  currency?: InputMaybe<CurrencyLinkInput>;
  first?: InputMaybe<Scalars['Int']>;
  issueDate?: InputMaybe<DateRange>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<OrderLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  returnOrder?: InputMaybe<ReturnOrderLinkInput>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
  workflow?: InputMaybe<WorkflowLinkInput>;
  workflowRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  workflowVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCreditMemoItemArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCreditMemoItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderItem?: InputMaybe<OrderItemLinkInput>;
  product?: InputMaybe<ProductLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  returnOrderItem?: InputMaybe<ReturnOrderItemLinkInput>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCurrenciesArgs = {
  after?: InputMaybe<Scalars['String']>;
  alphabeticCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  isISO4217?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  last?: InputMaybe<Scalars['Int']>;
  minorUnits?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numericCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCurrencyArgs = {
  alphabeticCode: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCustomerArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCustomerAddressByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCustomerAddressesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  companyName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  longitude?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  postcode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  region?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  street?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timeZone?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCustomerByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  department?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primaryEmail?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primaryPhone?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionOptIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timezone?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryDecisionTableArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFinancialTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  cardType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  currency?: InputMaybe<Array<Scalars['String']>>;
  externalTransactionCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalTransactionId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  paymentMethod?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paymentProviderName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  total?: InputMaybe<Array<Scalars['Float']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentChoicesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  currency?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  deliveryInstruction?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  deliveryType?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['Int']>;
  fulfilmentPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  fulfilmentTaxPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  fulfilmentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  pickupLocationRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filledQuantity?: InputMaybe<Array<Scalars['Int']>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rejectedQuantity?: InputMaybe<Array<Scalars['Int']>>;
  requestedQuantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  status?: InputMaybe<Array<Scalars['String']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentOptionByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locationRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orderType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  retailerId?: InputMaybe<Array<Scalars['Int']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trackingCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentPlanByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentPlansArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  eta?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  retailerId?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  splitCount?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  deliveryType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eta?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expiryTime?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  fromLocation?: InputMaybe<LocationLinkInput>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryGroupProductArgs = {
  catalogue: ProductCatalogueKey;
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryGroupProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<ProductCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryCatalogueArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryCataloguesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  retailerRefs?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryPositionArgs = {
  catalogue: InventoryCatalogueKey;
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryPositionAggregateArgs = {
  catalogue: InventoryCatalogueKey;
  networkRef?: InputMaybe<Scalars['String']>;
  productRef: Scalars['String'];
  status?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryPositionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<InventoryCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locationRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onHand?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  productRef?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryQuantitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<InventoryCatalogueKey>;
  condition?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  expectedOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  storageAreaRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryQuantityArgs = {
  catalogue: InventoryCatalogueKey;
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryQuantityAggregateArgs = {
  expectedOn?: InputMaybe<DateRange>;
  position: InventoryPositionKey;
  status?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInvoiceArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInvoiceItemArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInvoiceItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<ProductLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInvoicesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  currency?: InputMaybe<CurrencyLinkInput>;
  dueDate?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  fulfilment?: InputMaybe<FulfilmentLinkInput>;
  issueDate?: InputMaybe<DateRange>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<OrderLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
  workflow?: InputMaybe<WorkflowLinkInput>;
  workflowRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  workflowVersion?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryLocationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  ref?: InputMaybe<Scalars['String']>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryLocationByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  defaultCarrier?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultCarrierName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supportPhoneNumber?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryManifestArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryManifestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  carrierManifestLink?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryNetworkArgs = {
  id?: InputMaybe<Scalars['ID']>;
  ref?: InputMaybe<Scalars['String']>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryNetworkByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryNetworksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryOpeningSchedulesArgs = {
  after?: InputMaybe<Scalars['String']>;
  allHours?: InputMaybe<Array<Scalars['Boolean']>>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  friEnd?: InputMaybe<Array<Scalars['Int']>>;
  friStart?: InputMaybe<Array<Scalars['Int']>>;
  last?: InputMaybe<Scalars['Int']>;
  monEnd?: InputMaybe<Array<Scalars['Int']>>;
  monStart?: InputMaybe<Array<Scalars['Int']>>;
  satEnd?: InputMaybe<Array<Scalars['Int']>>;
  satStart?: InputMaybe<Array<Scalars['Int']>>;
  sunEnd?: InputMaybe<Array<Scalars['Int']>>;
  sunStart?: InputMaybe<Array<Scalars['Int']>>;
  thuEnd?: InputMaybe<Array<Scalars['Int']>>;
  thuStart?: InputMaybe<Array<Scalars['Int']>>;
  tueEnd?: InputMaybe<Array<Scalars['Int']>>;
  tueStart?: InputMaybe<Array<Scalars['Int']>>;
  updatedOn?: InputMaybe<DateRange>;
  wedEnd?: InputMaybe<Array<Scalars['Int']>>;
  wedStart?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']>;
  ref?: InputMaybe<Scalars['String']>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryOrderByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryOrderItemByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryOrderItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  currency?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  paidPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  quantity?: InputMaybe<Array<Scalars['Int']>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<Scalars['String']>>;
  taxPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  taxType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  totalTaxPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  customerLink?: InputMaybe<CustomerLinkInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  payment?: InputMaybe<PaymentLinkInput>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  totalTaxPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPaymentArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  retailer?: InputMaybe<RetailerLinkInput>;
  status?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflow?: InputMaybe<WorkflowLinkInput>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPaymentServiceProviderArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPaymentServiceProvidersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  clientId?: InputMaybe<Array<Scalars['String']>>;
  clientSecret?: InputMaybe<Array<Scalars['String']>>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  host?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  port?: InputMaybe<Array<Scalars['Int']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  retailer?: InputMaybe<RetailerLinkInput>;
  serviceAuthToken?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPaymentTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  authorizationKey?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  before?: InputMaybe<Scalars['String']>;
  cardType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  currency?: InputMaybe<CurrencyLinkInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  paymentMethod?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflow?: InputMaybe<WorkflowLinkInput>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPermissionArgs = {
  name: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPermissionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPricesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Array<Scalars['String']>>;
  value?: InputMaybe<Array<Scalars['Float']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryProductCatalogueArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryProductCataloguesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  retailerRefs?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryRetailerByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryRetailersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  primaryEmail?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supportContactName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supportEmail?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supportPhone?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tradingName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
  websiteUrl?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  websiteUrlName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnFulfilmentArgs = {
  ref: Scalars['String'];
  returnOrder: ReturnOrderKey;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnFulfilmentItemArgs = {
  ref: Scalars['String'];
  returnFulfilment: ReturnFulfilmentKey;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnFulfilmentItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<ProductLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnFulfilmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  destinationLocation?: InputMaybe<LocationLinkInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  lodgedLocation?: InputMaybe<LocationLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflow?: InputMaybe<WorkflowLinkInput>;
  workflowRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  workflowVersion?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnOrderArgs = {
  ref: Scalars['String'];
  retailer: RetailerId;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnOrderItemArgs = {
  ref: Scalars['String'];
  returnOrder: ReturnOrderKey;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnOrderItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderItem?: InputMaybe<OrderItemLinkInput>;
  product?: InputMaybe<ProductLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  returnConditionComment?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  returnReasonComment?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  creditMemo?: InputMaybe<CreditMemoLinkInput>;
  currency?: InputMaybe<CurrencyLinkInput>;
  customer?: InputMaybe<CustomerLinkInput>;
  destinationLocation?: InputMaybe<LocationLinkInput>;
  exchangeOrder?: InputMaybe<OrderLinkInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  lodgedLocation?: InputMaybe<LocationLinkInput>;
  order?: InputMaybe<OrderLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  retailer?: InputMaybe<RetailerLinkInput>;
  returnAuthorisationKey?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  returnAuthorisationKeyExpiry?: InputMaybe<DateRange>;
  status?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflow?: InputMaybe<WorkflowLinkInput>;
  workflowRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  workflowVersion?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnVerificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  verificationDetails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryRoleArgs = {
  name: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QuerySearchVirtualInventoryArgs = {
  excludedLocationRefs?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['Int']>;
  orderByProximity?: InputMaybe<GeoCoordinateInput>;
  productQuantities: Array<ProductQuantityInput>;
  virtualCatalogue: VirtualCatalogueKey;
  virtualPosition?: InputMaybe<VirtualPositionInput>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QuerySettingArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QuerySettingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  context?: InputMaybe<Array<Scalars['String']>>;
  contextId?: InputMaybe<Array<Scalars['Int']>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  value?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  valueType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryStandardProductArgs = {
  catalogue: ProductCatalogueKey;
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryStandardProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<ProductCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  gtin?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryStorageAreaByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryStorageAreasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryStoreAddressByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryStoreAddressesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  companyName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  directions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  longitude?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  postcode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  region?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  street?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timeZone?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryUserByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  department?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primaryEmail?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primaryPhone?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionOptIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timezone?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  username?: InputMaybe<Array<Scalars['String']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVariantProductArgs = {
  catalogue: ProductCatalogueKey;
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVariantProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<ProductCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  gtin?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVirtualCatalogueArgs = {
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVirtualCataloguesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  controlGroupRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  inventoryCatalogueRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  networkIds?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
  productCatalogueRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  retailerRefs?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVirtualPositionArgs = {
  catalogue: VirtualCatalogueKey;
  ref: Scalars['String'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVirtualPositionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<VirtualCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  groupRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  productRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVirtualViewArgs = {
  input: VirtualViewInput;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVirtualViewInventoryLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  input: VirtualViewInventoryLevelsInput;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryWaveByIdArgs = {
  id: Scalars['ID'];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryWaveItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Array<Scalars['Int']>>;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryWavesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  processingLocation?: InputMaybe<LocationLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**  An Article can be created when a fulfilment is fulfilled, or when a dispatch occurs. The Article represents the physical parcel that contains the customer order items. The Article is the entity received by the customer. */
export type Article = Node & Orchestrateable & {
  __typename?: 'Article';
  /**  Attributes of article */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Relationships between carrierConsignment and article */
  carrierConsignmentArticles?: Maybe<CarrierConsignmentArticleConnection>;
  /**  Relationships between consignment and article */
  consignmentArticles?: Maybe<ConsignmentArticleConnection>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Description */
  description?: Maybe<Scalars['String']>;
  /**  Fulfilments associated with this article */
  fulfilments?: Maybe<FulfilmentConnection>;
  /**  Height */
  height: Scalars['Float'];
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Items within this article */
  items?: Maybe<ArticleItemConnection>;
  /**  Length */
  length: Scalars['Float'];
  /**  Name */
  name?: Maybe<Scalars['String']>;
  /**  Quantity */
  quantity?: Maybe<Scalars['Int']>;
  /**  The unique article reference provided by the retailer */
  ref?: Maybe<Scalars['String']>;
  /**  The current status of the `Article`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  The storage areas of the article */
  storageArea?: Maybe<StorageArea>;
  /**  Type of the `Article`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  Weight */
  weight: Scalars['Float'];
  /**  Width */
  width: Scalars['Float'];
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


/**  An Article can be created when a fulfilment is fulfilled, or when a dispatch occurs. The Article represents the physical parcel that contains the customer order items. The Article is the entity received by the customer. */
export type ArticleCarrierConsignmentArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/**  An Article can be created when a fulfilment is fulfilled, or when a dispatch occurs. The Article represents the physical parcel that contains the customer order items. The Article is the entity received by the customer. */
export type ArticleConsignmentArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/**  An Article can be created when a fulfilment is fulfilled, or when a dispatch occurs. The Article represents the physical parcel that contains the customer order items. The Article is the entity received by the customer. */
export type ArticleFulfilmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  deliveryType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eta?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expiryTime?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  fromLocation?: InputMaybe<LocationLinkInput>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  An Article can be created when a fulfilment is fulfilled, or when a dispatch occurs. The Article represents the physical parcel that contains the customer order items. The Article is the entity received by the customer. */
export type ArticleItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  barcode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Array<Scalars['Int']>>;
  updatedOn?: InputMaybe<DateRange>;
};

/**  Represents an object with `ID`. */
export type Node = {
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

/**  Represents an object that can be orchestrated via a workflow */
export type Orchestrateable = {
  status?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  workflowRef: Scalars['String'];
  workflowVersion: Scalars['Int'];
};

/**
 *  An `attribute` is a trio of *name*, *type* and *value*. Attributes are useful for storing additional information into objects. <br/>
 *  <br/><br/>**USAGE**<br/>
 *  Attributes should be unique by `name`. If an attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else they will be inserted.
 */
export type Attribute = {
  __typename?: 'Attribute';
  /**  Name of the `attribute` */
  name: Scalars['String'];
  /**  Type of the attribute's `value`. This is a free string and can be used by the client to interpret and cast the `value` into the appropriate type. */
  type: Scalars['String'];
  /**  Value of the `attribute` */
  value: Scalars['Json'];
};

/**  A list of results that matched against a CarrierConsignmentArticle search query */
export type CarrierConsignmentArticleConnection = {
  __typename?: 'CarrierConsignmentArticleConnection';
  /**  A list of edges that links to CarrierConsignmentArticle type node */
  edges?: Maybe<Array<Maybe<CarrierConsignmentArticleEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a CarrierConsignmentArticle connection to the CarrierConsignmentArticle type */
export type CarrierConsignmentArticleEdge = {
  __typename?: 'CarrierConsignmentArticleEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the CarrierConsignmentArticle edge */
  node?: Maybe<CarrierConsignmentArticle>;
};

/**  The relationship between carrierConsignment and article */
export type CarrierConsignmentArticle = {
  __typename?: 'CarrierConsignmentArticle';
  /**  Article */
  article?: Maybe<Article>;
  /**  Consignment */
  carrierConsignment?: Maybe<CarrierConsignment>;
};

/**  A `Consignment` is the object representing the booking of an article for delivery. */
export type CarrierConsignment = Extendable & Node & Referenceable & {
  __typename?: 'CarrierConsignment';
  /**  A list of attributes associated with this Consignment. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Carrier used for the consignment */
  carrier?: Maybe<Carrier>;
  /**  Relationships between consignment and article */
  carrierConsignmentArticles?: Maybe<CarrierConsignmentArticleConnection>;
  /**  The external consignment reference assigned by the carrier */
  consignmentReference?: Maybe<Scalars['String']>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  The URL used to retrieve the shipping label */
  labelUrl?: Maybe<Scalars['String']>;
  /**  Manifests that contain the consignment */
  manifests?: Maybe<ManifestConnection>;
  /**  A url to represent the order summary. Usually the manifest url from the service provider. */
  orderSummaryUrl?: Maybe<Scalars['String']>;
  /**  External reference of the `Consignment`. Must be unique. */
  ref: Scalars['String'];
  /**  Retailer who is booking the consignment */
  retailer?: Maybe<Retailer>;
  /**  The status of the consignment */
  status?: Maybe<Scalars['String']>;
  /**  Tracking label of the consignment */
  trackingLabel?: Maybe<Scalars['String']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification */
  workflowRef: Scalars['String'];
  /**   The version of the workflow */
  workflowVersion: Scalars['Int'];
};


/**  A `Consignment` is the object representing the booking of an article for delivery. */
export type CarrierConsignmentCarrierConsignmentArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/**  A `Consignment` is the object representing the booking of an article for delivery. */
export type CarrierConsignmentManifestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  carrierManifestLink?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**  Represents an object with `attribute`s */
export type Extendable = {
  /**  Array of attributes */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
};

/**  Represents an object with an external reference */
export type Referenceable = {
  /**  The reference key */
  ref: Scalars['String'];
};

/**  The carrier information */
export type Carrier = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'Carrier';
  /**  A list of attributes associated with this Carrier. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  A connection to associated Consignments */
  carrierConsignments?: Maybe<CarrierConsignmentConnection>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  A list of manifests associated with this Carrier. */
  manifests?: Maybe<Array<Maybe<Manifest>>>;
  /**  The carrier name */
  name: Scalars['String'];
  /**  The reference identifier used to identify an entity */
  ref: Scalars['String'];
  /**  The retailer */
  retailer?: Maybe<Retailer>;
  /**  The current status of the `Carrier`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**
   *  Type of the `Carrier`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  The type field can be used to differentiate between Inventory Position workflows
   */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**
   *  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/>
   *  The reference used for workflow identification
   */
  workflowRef: Scalars['String'];
  /**
   *  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/>
   *   The version of the workflow
   */
  workflowVersion: Scalars['Int'];
};


/**  The carrier information */
export type CarrierCarrierConsignmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  consignmentReference?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  labelUrl?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  orderSummaryUrl?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trackingLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**
 *  Type to be used for comparisons on `DateTime` type fields. All `DateTime` comparisons will be done by converting the values in the UTC format. If a `DateTime` value does not contain timezone information, it is assumed to be UTC. The results will also be in the UTC format. <br/> This type can be used for identifying records <br />
 *  * _on_ a given date and/or timestamp.
 *  * _on_ and _after_ a given date and/or timestamp.
 *  * _after_ a given date and/or time.
 *  * _on_ and _before_ a given date and/or timestamp.
 *  * _before_ a given date and/or timestamp.
 *  * _between_ two dates/timestamps with the input dates/timestamps excluded.
 *  * _between_ two dates/timestamps with the input dates/timestamps included.
 *  <br />
 *  Please note that all date comparisons assume that all `DateTime` # values are sent in a valid ISO8601 format. Please see [ISO8601 documentation] (https://www.iso.org/iso-8601-date-and-time-format.html) to see valid `DateTime` formats.
 *  <br/><br/>**USAGE**<br/>
 *  You must pass at least one of the `from` or `to` fields. Requests missing both of these fields will result in error.
 */
export type DateRange = {
  /**  `DateTime` in a valid ISO8601 format for identifying records _after_ or _at_ the given timestamp. If this field is not passed in the request, the response will contain all records from the beginning of time till the `to` date. */
  from?: InputMaybe<Scalars['DateTime']>;
  /**  `DateTime` in a valid ISO8601 format for identifying records _before_ or _at_ the given timestamp. If this field is not passed in the request, the response will contain all records after the `from` date. */
  to?: InputMaybe<Scalars['DateTime']>;
};

/**  A list of results that matched against a CarrierConsignment search query */
export type CarrierConsignmentConnection = {
  __typename?: 'CarrierConsignmentConnection';
  /**  A list of edges that links to CarrierConsignment type node */
  edges?: Maybe<Array<Maybe<CarrierConsignmentEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a CarrierConsignment connection to the CarrierConsignment type */
export type CarrierConsignmentEdge = {
  __typename?: 'CarrierConsignmentEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the CarrierConsignment edge */
  node?: Maybe<CarrierConsignment>;
};

/**  Information to aid in pagination */
export type PageInfo = {
  __typename?: 'PageInfo';
  /**  true if there are one or more pages of items beyond the current page */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /**  true if there are one or more pages of items before the current page */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type Manifest = Extendable & Node & Referenceable & {
  __typename?: 'Manifest';
  /**  A list of attributes associated with the `Manifest`. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  The `Carrier` the `Manifest` is for */
  carrier: Carrier;
  /**  A list of the `CarrierConsignment`s contained by the manifest */
  carrierConsignments?: Maybe<CarrierConsignmentConnection>;
  /**  The link where the carrier's manifest is stored. Not all the carriers generates one, so this field is optional. */
  carrierManifestLink?: Maybe<Scalars['String']>;
  /**  The time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  The `Location` the `Manifest` is associated with */
  location?: Maybe<Location>;
  /**  The name of the `Manifest` */
  name?: Maybe<Scalars['String']>;
  /**  External reference for the `Manifest`. Must be unique. */
  ref: Scalars['String'];
  /**  The status of the `Manifest` */
  status?: Maybe<Scalars['String']>;
  /**  The type of `Manifest` */
  type: Scalars['String'];
  /**  The time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification */
  workflowRef: Scalars['String'];
  /**  The version of the workflow */
  workflowVersion: Scalars['Int'];
};


export type ManifestCarrierConsignmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  consignmentReference?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  labelUrl?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  orderSummaryUrl?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trackingLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**
 *  A Location is any place where an order can be fulfilled and/or collected by the customer.
 *  Locations can include a store, warehouse, drop ship vendor, lockers or a third party collection point such as ParcelPoint.
 */
export type Location = Node & {
  __typename?: 'Location';
  /**  Attributes */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Default carrier */
  defaultCarrier?: Maybe<Scalars['String']>;
  /**  Default carrier of the location */
  defaultCarrierName?: Maybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Manifests for this location */
  manifests?: Maybe<ManifestConnection>;
  /**  Name of location */
  name?: Maybe<Scalars['String']>;
  /**  Networks the location is assigned to */
  networks?: Maybe<NetworkConnection>;
  /**  Opening Schedule */
  openingSchedule?: Maybe<OpeningSchedule>;
  /**  Store location of the the location */
  primaryAddress?: Maybe<Address>;
  /**  The location (i.e. store) id provided by the retailer */
  ref?: Maybe<Scalars['String']>;
  /**  Retailer */
  retailer?: Maybe<Retailer>;
  /**  The location status. Possible values are 'ACTIVE', 'INACTIVE'. */
  status?: Maybe<Scalars['String']>;
  /**  Storage areas at the location */
  storageAreas?: Maybe<StorageAreaConnection>;
  /**  The location contact number */
  supportPhoneNumber?: Maybe<Scalars['String']>;
  /**  Type */
  type?: Maybe<Scalars['String']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**
   *  The reference used for workflow identification
   * @deprecated No longer supported
   */
  workflowRef?: Maybe<Scalars['String']>;
  /**
   *  The version of the workflow
   * @deprecated No longer supported
   */
  workflowVersion?: Maybe<Scalars['Int']>;
};


/**
 *  A Location is any place where an order can be fulfilled and/or collected by the customer.
 *  Locations can include a store, warehouse, drop ship vendor, lockers or a third party collection point such as ParcelPoint.
 */
export type LocationManifestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  carrierManifestLink?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**
 *  A Location is any place where an order can be fulfilled and/or collected by the customer.
 *  Locations can include a store, warehouse, drop ship vendor, lockers or a third party collection point such as ParcelPoint.
 */
export type LocationNetworksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**
 *  A Location is any place where an order can be fulfilled and/or collected by the customer.
 *  Locations can include a store, warehouse, drop ship vendor, lockers or a third party collection point such as ParcelPoint.
 */
export type LocationStorageAreasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};

/**  A list of results that matched against a Manifest search query */
export type ManifestConnection = {
  __typename?: 'ManifestConnection';
  /**  A list of edges that links to Manifest type node */
  edges?: Maybe<Array<Maybe<ManifestEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Manifest connection to the Manifest type */
export type ManifestEdge = {
  __typename?: 'ManifestEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Manifest edge */
  node?: Maybe<Manifest>;
};

/**  A list of results that matched against a Network search query */
export type NetworkConnection = {
  __typename?: 'NetworkConnection';
  /**  A list of edges that links to Network type node */
  edges?: Maybe<Array<Maybe<NetworkEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Network connection to the Network type */
export type NetworkEdge = {
  __typename?: 'NetworkEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Network edge */
  node?: Maybe<Network>;
};

/**  A network is a collection of physical fulfilment or collection locations such as stores, warehouses, distribution centres. */
export type Network = Node & {
  __typename?: 'Network';
  /**  Network attributes */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Locations in the network */
  locations?: Maybe<LocationConnection>;
  /**  Reference to the network. This is the name of the network you passed in while creating the network. Recommended to be unique. */
  ref?: Maybe<Scalars['String']>;
  /**  A list of retailers associated with this network */
  retailers?: Maybe<RetailerConnection>;
  /**  Status of the network */
  status?: Maybe<Scalars['String']>;
  /**  The type of network */
  type?: Maybe<Scalars['String']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};


/**  A network is a collection of physical fulfilment or collection locations such as stores, warehouses, distribution centres. */
export type NetworkLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  defaultCarrier?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultCarrierName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supportPhoneNumber?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};


/**  A network is a collection of physical fulfilment or collection locations such as stores, warehouses, distribution centres. */
export type NetworkRetailersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  primaryEmail?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supportContactName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supportEmail?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supportPhone?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tradingName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
  websiteUrl?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  websiteUrlName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**  A list of results that matched against a Location search query */
export type LocationConnection = {
  __typename?: 'LocationConnection';
  /**  A list of edges that links to Location type node */
  edges?: Maybe<Array<Maybe<LocationEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Location connection to the Location type */
export type LocationEdge = {
  __typename?: 'LocationEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Location edge */
  node?: Maybe<Location>;
};

/**  A list of results that matched against a Retailer search query */
export type RetailerConnection = {
  __typename?: 'RetailerConnection';
  /**  A list of edges that links to Retailer type node */
  edges?: Maybe<Array<Maybe<RetailerEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Retailer connection to the Retailer type */
export type RetailerEdge = {
  __typename?: 'RetailerEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Retailer edge */
  node?: Maybe<Retailer>;
};

/**  A retailer is a business or person that sells goods to consumers */
export type Retailer = Node & Referenceable & {
  __typename?: 'Retailer';
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  A list of retailer's network (stores, warehouses, distribution centers) */
  networks?: Maybe<NetworkConnection>;
  /**  Primary email of the retailer */
  primaryEmail?: Maybe<Scalars['String']>;
  /**  Reference for the retailer */
  ref: Scalars['String'];
  /**  Status of the retailer */
  status?: Maybe<Scalars['String']>;
  /**  Short description of the retailer */
  summary?: Maybe<Scalars['String']>;
  /**  Customer support contact name */
  supportContactName?: Maybe<Scalars['String']>;
  /**  Customer support email used in customer notifications */
  supportEmail?: Maybe<Scalars['String']>;
  /**  Customer support phone number used in customer notifications */
  supportPhone?: Maybe<Scalars['String']>;
  /**  The retailer's trading name used in customer notifications */
  tradingName?: Maybe<Scalars['String']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  Retailer's website URL used in customer notifications */
  websiteUrl?: Maybe<Scalars['String']>;
  /**  Friendly text to be shown for URL links in customer notifications */
  websiteUrlName?: Maybe<Scalars['String']>;
};


/**  A retailer is a business or person that sells goods to consumers */
export type RetailerNetworksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};

/**  Opening hours for a location */
export type OpeningSchedule = {
  __typename?: 'OpeningSchedule';
  /**  Is the location open 24hrs */
  allHours: Scalars['Boolean'];
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Closing time on Friday (HHmm) */
  friEnd: Scalars['Int'];
  /**  Opening time on Friday (HHmm) */
  friStart: Scalars['Int'];
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Closing time on Monday (HHmm) */
  monEnd: Scalars['Int'];
  /**  Opening time on Monday (HHmm). */
  monStart: Scalars['Int'];
  /**  Closing time on Saturday (HHmm) */
  satEnd: Scalars['Int'];
  /**  Opening time on Saturday (HHmm) */
  satStart: Scalars['Int'];
  /**  Closing time on Sunday (HHmm) */
  sunEnd: Scalars['Int'];
  /**  Opening time on Sunday (HHmm) */
  sunStart: Scalars['Int'];
  /**  Closing time on Thursday (HHmm) */
  thuEnd: Scalars['Int'];
  /**  Opening time on Thursday (HHmm) */
  thuStart: Scalars['Int'];
  /**  Closing time on Tuesday (HHmm) */
  tueEnd: Scalars['Int'];
  /**  Opening time on Tuesday (HHmm) */
  tueStart: Scalars['Int'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  Closing time on Wednesday (HHmm) */
  wedEnd: Scalars['Int'];
  /**  Opening time on Wednesday (HHmm) */
  wedStart: Scalars['Int'];
};

export type Address = {
  /**  City */
  city?: Maybe<Scalars['String']>;
  /**  Company name */
  companyName?: Maybe<Scalars['String']>;
  /**  Country */
  country?: Maybe<Scalars['String']>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Latitude */
  latitude?: Maybe<Scalars['Float']>;
  /**  Longitude */
  longitude?: Maybe<Scalars['Float']>;
  /**  Name */
  name?: Maybe<Scalars['String']>;
  /**  Postcode */
  postcode?: Maybe<Scalars['String']>;
  /**  Location reference */
  ref?: Maybe<Scalars['String']>;
  /**  Region */
  region?: Maybe<Scalars['String']>;
  /**  State */
  state?: Maybe<Scalars['String']>;
  /**  Street */
  street?: Maybe<Scalars['String']>;
  /**  Timezone */
  timeZone?: Maybe<Scalars['String']>;
  /**  Type of Address, to support legacy address, the value can be AGENT and ORDER */
  type?: Maybe<Scalars['String']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

/**  A list of results that matched against a StorageArea search query */
export type StorageAreaConnection = {
  __typename?: 'StorageAreaConnection';
  /**  A list of edges that links to StorageArea type node */
  edges?: Maybe<Array<Maybe<StorageAreaEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a StorageArea connection to the StorageArea type */
export type StorageAreaEdge = {
  __typename?: 'StorageAreaEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the StorageArea edge */
  node?: Maybe<StorageArea>;
};

/**  The location storage areas */
export type StorageArea = {
  __typename?: 'StorageArea';
  /**  Articles in the storage area */
  articles?: Maybe<ArticleConnection>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Location */
  location?: Maybe<Location>;
  /**  Name */
  name?: Maybe<Scalars['String']>;
  /**  Status */
  status?: Maybe<Scalars['String']>;
  /**  Type */
  type?: Maybe<Scalars['String']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};


/**  The location storage areas */
export type StorageAreaArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Array<Scalars['Float']>>;
  last?: InputMaybe<Scalars['Int']>;
  length?: InputMaybe<Array<Scalars['Float']>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  weight?: InputMaybe<Array<Scalars['Float']>>;
  width?: InputMaybe<Array<Scalars['Float']>>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**  A list of results that matched against a Article search query */
export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /**  A list of edges that links to Article type node */
  edges?: Maybe<Array<Maybe<ArticleEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Article connection to the Article type */
export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Article edge */
  node?: Maybe<Article>;
};

/**  A list of results that matched against a ConsignmentArticle search query */
export type ConsignmentArticleConnection = {
  __typename?: 'ConsignmentArticleConnection';
  /**  A list of edges that links to ConsignmentArticle type node */
  edges?: Maybe<Array<Maybe<ConsignmentArticleEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a ConsignmentArticle connection to the ConsignmentArticle type */
export type ConsignmentArticleEdge = {
  __typename?: 'ConsignmentArticleEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the ConsignmentArticle edge */
  node?: Maybe<ConsignmentArticle>;
};

/**  The relationship between consignment and article */
export type ConsignmentArticle = {
  __typename?: 'ConsignmentArticle';
  /**  Article */
  article?: Maybe<Article>;
  /**  Consignment */
  consignment?: Maybe<Consignment>;
};

/**  A `Consignment` is the object representing the booking of an article for delivery. */
export type Consignment = Node & {
  __typename?: 'Consignment';
  /**  Carrier used for the consignment */
  carrier?: Maybe<Carrier>;
  /**  Relationships between consignment and article */
  consignmentArticles?: Maybe<ConsignmentArticleConnection>;
  /**  The external consignment reference assigned by the carrier */
  consignmentReference: Scalars['String'];
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  The URL used to retrieve the shipping label */
  labelUrl?: Maybe<Scalars['String']>;
  /**  A url to represent the order summary. Usually the manifest url from the service provider. */
  orderSummaryUrl?: Maybe<Scalars['String']>;
  /**  External reference of the object. Recommended to be unique. */
  ref?: Maybe<Scalars['String']>;
  /**  Retailer who is booking the consignment */
  retailer?: Maybe<Retailer>;
  /**  The status of the consignment */
  status?: Maybe<Scalars['String']>;
  /**  Tracking label of the consignment */
  trackingLabel?: Maybe<Scalars['String']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification */
  workflowRef: Scalars['String'];
  /**   The version of the workflow */
  workflowVersion: Scalars['Int'];
};


/**  A `Consignment` is the object representing the booking of an article for delivery. */
export type ConsignmentConsignmentArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type LocationLinkInput = {
  /**  Max character limit: 8. */
  ref: Scalars['String'];
};

/**  A list of results that matched against a Fulfilment search query */
export type FulfilmentConnection = {
  __typename?: 'FulfilmentConnection';
  /**  A list of edges that links to Fulfilment type node */
  edges?: Maybe<Array<Maybe<FulfilmentEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Fulfilment connection to the Fulfilment type */
export type FulfilmentEdge = {
  __typename?: 'FulfilmentEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Fulfilment edge */
  node?: Maybe<Fulfilment>;
};

/**
 *  A `Fulfilment` represents one or more items in an order that need to be picked & packed for the customer. <br/>
 *  A fulfilment is assigned to a location based on the retailer's fulfilment rules and available inventory.
 *  A fulfilment will have an origin (from) and destination (to) associated with it.
 */
export type Fulfilment = Node & Orchestrateable & {
  __typename?: 'Fulfilment';
  /**  Connection representing a list of `Article`s */
  articles?: Maybe<ArticleConnection>;
  /**  Attributes of fulfilment */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Type of delivery. Supported values are _STANDARD_, _OVERNIGHT_ and _EXPRESS_. */
  deliveryType?: Maybe<Scalars['String']>;
  /**  The estimated time of completing the fulfilment. */
  eta?: Maybe<Scalars['String']>;
  /**  Expiry time for the fulfilment */
  expiryTime?: Maybe<Scalars['DateTime']>;
  /**  `Address` of the fulfilment location */
  fromAddress?: Maybe<Address>;
  /**  The `Location` responsible for processing outbound `Fulfilment`s */
  fromLocation?: Maybe<LocationLink>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Connection representing a list of `FulfilmentItem`s */
  items?: Maybe<FulfilmentItemConnection>;
  /**  The associated `Order` */
  order?: Maybe<Order>;
  /**  External reference of the object. Recommended to be unique. */
  ref?: Maybe<Scalars['String']>;
  /**  The current status of the `Fulfilment`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  `Address` of the delivery location */
  toAddress?: Maybe<Address>;
  /**
   *  Type of the `Fulfilment`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of fulfilment. Supported types are <br/>
   *  - *CC_PFS* for Click & Collect - Pick from Store
   *  - *CC_PFDC* for Click & Collect - Pick from DC
   *  - *HD_PFS* for Home Delivery - Pick from Store
   *  - *HD_PFDC* for Home Delivery - Pick from DC
   */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The associated `Customer` */
  user?: Maybe<Customer>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


/**
 *  A `Fulfilment` represents one or more items in an order that need to be picked & packed for the customer. <br/>
 *  A fulfilment is assigned to a location based on the retailer's fulfilment rules and available inventory.
 *  A fulfilment will have an origin (from) and destination (to) associated with it.
 */
export type FulfilmentArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Array<Scalars['Float']>>;
  last?: InputMaybe<Scalars['Int']>;
  length?: InputMaybe<Array<Scalars['Float']>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  weight?: InputMaybe<Array<Scalars['Float']>>;
  width?: InputMaybe<Array<Scalars['Float']>>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**
 *  A `Fulfilment` represents one or more items in an order that need to be picked & packed for the customer. <br/>
 *  A fulfilment is assigned to a location based on the retailer's fulfilment rules and available inventory.
 *  A fulfilment will have an origin (from) and destination (to) associated with it.
 */
export type FulfilmentItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filledQuantity?: InputMaybe<Array<Scalars['Int']>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rejectedQuantity?: InputMaybe<Array<Scalars['Int']>>;
  requestedQuantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  status?: InputMaybe<Array<Scalars['String']>>;
};

export type LocationLink = {
  __typename?: 'LocationLink';
  ref?: Maybe<Scalars['String']>;
};

/**  A list of results that matched against a FulfilmentItem search query */
export type FulfilmentItemConnection = {
  __typename?: 'FulfilmentItemConnection';
  /**  A list of edges that links to FulfilmentItem type node */
  edges?: Maybe<Array<Maybe<FulfilmentItemEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a FulfilmentItem connection to the FulfilmentItem type */
export type FulfilmentItemEdge = {
  __typename?: 'FulfilmentItemEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the FulfilmentItem edge */
  node?: Maybe<FulfilmentItem>;
};

/**  Represents fulfilment details corresponding to an `OrderItem`. */
export type FulfilmentItem = {
  __typename?: 'FulfilmentItem';
  /**  Number of `OrderItem`s confirmed */
  filledQuantity: Scalars['Int'];
  /**  The associated `Fulfilment` */
  fulfilment?: Maybe<Fulfilment>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  The associated `OrderItem` */
  orderItem?: Maybe<OrderItem>;
  /**  External reference of the object. Recommended to be unique. */
  ref?: Maybe<Scalars['String']>;
  /**  Number of `OrderItem`s rejected */
  rejectedQuantity: Scalars['Int'];
  /**  Number of `OrderItem`s assigned to the fulfilment */
  requestedQuantity?: Maybe<Scalars['Int']>;
  /**  Status */
  status: Scalars['String'];
};

/**  An `OrderItem` generally represents a SKU purchased by the customer. There can be one or more `OrderItem`s within an `Order` */
export type OrderItem = Node & {
  __typename?: 'OrderItem';
  /**  List of `OrderItem` `attribute`s. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Currency. Should ideally be a 3 letter ISO currency code. For instance _AUD_. */
  currency?: Maybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  The associated `Order` */
  order?: Maybe<Order>;
  /**  Price paid. Excludes tax. */
  paidPrice?: Maybe<Scalars['Float']>;
  /**  Price */
  price?: Maybe<Scalars['Float']>;
  /**  Represents the `Product` corresponding to this object */
  product: Product;
  /**  Quantity ordered */
  quantity: Scalars['Int'];
  /**  External reference of the object. Recommended to be unique. */
  ref?: Maybe<Scalars['String']>;
  /**  Status of the OrderItem. Currently supported values are limited to _CREATED_, _NEW_, _COMPLETE_. */
  status: Scalars['String'];
  /**  Tax price */
  taxPrice?: Maybe<Scalars['Float']>;
  /**  Tax type. Supported values are _GST_, _VAT_, _EXCLTAX_ */
  taxType?: Maybe<Scalars['String']>;
  /**  Total price */
  totalPrice?: Maybe<Scalars['Float']>;
  /**  Total tax price */
  totalTaxPrice?: Maybe<Scalars['Float']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

/**  A customer's order. */
export type Order = Node & Orchestrateable & {
  __typename?: 'Order';
  /**  List of order `attribute`s */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  `Customer` of the order */
  customer?: Maybe<Customer>;
  /**  Contains the reference of the customer. It can be used to fetch the `Customer` object. */
  customerLink?: Maybe<CustomerLink>;
  /**  Connection representing a list of `FinancialTransaction`s */
  financialTransactions?: Maybe<FinancialTransactionConnection>;
  /**  The `FulfilmentChoice` specified when booking the order */
  fulfilmentChoice?: Maybe<FulfilmentChoice>;
  /**  Connection representing a list of `Fulfilment`s */
  fulfilments?: Maybe<FulfilmentConnection>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Connection representing a list of `OrderItem`s */
  items?: Maybe<OrderItemConnection>;
  /**  `Payment` for the order */
  payment?: Maybe<PaymentLink>;
  /**  External reference of the object. Must be unique. */
  ref?: Maybe<Scalars['String']>;
  /**  `Retailer` of the order */
  retailer?: Maybe<Retailer>;
  /**  The current status of the `Order`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  Total price */
  totalPrice?: Maybe<Scalars['Float']>;
  /**  Total tax price */
  totalTaxPrice?: Maybe<Scalars['Float']>;
  /**
   *  Type of the `Order`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Currently supports values _CC_, _SFS_, _HD_ for _Click and Collect_, _Ship from Store_ and _Home Delivery_ type orders respectively
   */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


/**  A customer's order. */
export type OrderFinancialTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  cardType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  currency?: InputMaybe<Array<Scalars['String']>>;
  externalTransactionCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalTransactionId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  paymentMethod?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paymentProviderName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  total?: InputMaybe<Array<Scalars['Float']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  A customer's order. */
export type OrderFulfilmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  deliveryType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eta?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expiryTime?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  fromLocation?: InputMaybe<LocationLinkInput>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  A customer's order. */
export type OrderItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  currency?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  paidPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  quantity?: InputMaybe<Array<Scalars['Int']>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<Scalars['String']>>;
  taxPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  taxType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  totalTaxPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedOn?: InputMaybe<DateRange>;
};

/**  Represents the customer who places an order */
export type Customer = Node & {
  __typename?: 'Customer';
  /**  Attributes */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  The country the customer is operating from */
  country?: Maybe<Scalars['String']>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  The department/team that the customer belongs to */
  department?: Maybe<Scalars['String']>;
  /**  The customer's first name */
  firstName?: Maybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  The customer's last name */
  lastName?: Maybe<Scalars['String']>;
  /**  Email */
  primaryEmail?: Maybe<Scalars['String']>;
  /**  Phone number */
  primaryPhone?: Maybe<Scalars['String']>;
  /**  Whether the customer has opted to receive promotions */
  promotionOptIn?: Maybe<Scalars['Boolean']>;
  /**  Username of the customer */
  ref?: Maybe<Scalars['String']>;
  /**  Retailer used by the customer */
  retailer?: Maybe<Retailer>;
  /**  Status */
  status?: Maybe<Scalars['String']>;
  /**  Timezones */
  timezone?: Maybe<Scalars['String']>;
  /**  The customer's title */
  title?: Maybe<Scalars['String']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  Username */
  username?: Maybe<Scalars['String']>;
};

export type CustomerLink = {
  __typename?: 'CustomerLink';
  ref?: Maybe<Scalars['String']>;
};

/**  A list of results that matched against a FinancialTransaction search query */
export type FinancialTransactionConnection = {
  __typename?: 'FinancialTransactionConnection';
  /**  A list of edges that links to FinancialTransaction type node */
  edges?: Maybe<Array<Maybe<FinancialTransactionEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a FinancialTransaction connection to the FinancialTransaction type */
export type FinancialTransactionEdge = {
  __typename?: 'FinancialTransactionEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the FinancialTransaction edge */
  node?: Maybe<FinancialTransaction>;
};

/**  An order transaction defines the payment or refund details associated with an order. */
export type FinancialTransaction = Node & Orchestrateable & {
  __typename?: 'FinancialTransaction';
  /**  The card type used for the payment. Possible values are 'MASTERCARD', 'VISA', 'AMEX', 'DINERS', 'SPAN', 'DISCOVER', 'UNIONPAY', 'JCB', 'MAESTRO', 'INTERAC'. */
  cardType?: Maybe<Scalars['String']>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Currency used for the transaction. */
  currency: Scalars['String'];
  /**  The unique transaction code or request code provided by the payment gateway */
  externalTransactionCode?: Maybe<Scalars['String']>;
  /**  The unique transaction ID or request ID provided by the payment gateway */
  externalTransactionId?: Maybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Order associated with the transaction */
  order?: Maybe<Order>;
  /**
   *  The way in which payment was made. Platform provides support for the following payment methods - 'CREDITCARD', 'PAYPAL', 'GIFTVOUCHER', 'CASH', 'AFTERPAY'. However, these
   *  can be overridden/configured per client as settings
   */
  paymentMethod?: Maybe<Scalars['String']>;
  /**  The name of the payment gateway. Platform provided values are 'CYBERSOURCE', 'GIVEX', 'PAYPAL', 'BRAINTREE', 'AFTERPAY'. However, these can be overridden/configured per client as settings using 'PAYMENT.PROVIDER' */
  paymentProviderName?: Maybe<Scalars['String']>;
  /**  The unique transaction reference provided by the Retailer to the payment gateway */
  ref?: Maybe<Scalars['String']>;
  /**  The current status of the `FinancialTransaction`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  The total transaction amount */
  total: Scalars['Float'];
  /**  Type of the `FinancialTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};

/**  The fulfilment choice specified when booking the order */
export type FulfilmentChoice = {
  __typename?: 'FulfilmentChoice';
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  The type of currency, 3 letter ISO currency code */
  currency?: Maybe<Scalars['String']>;
  /**  Location of fulfilment choice */
  deliveryAddress?: Maybe<Address>;
  /**  Instruction provided by the customer (250 character limit) */
  deliveryInstruction?: Maybe<Scalars['String']>;
  /**  The type of delivey determined by retailers' shipping options. Example values are STANDARD, EXPRESS, OVERNIGHT, 3HOURS */
  deliveryType: Scalars['String'];
  /**  FulfilmentPrice refers to shipping fees if order type is Home Delivery HD and C&C fees for Click & Collect orders */
  fulfilmentPrice?: Maybe<Scalars['Float']>;
  /**  This refers to the tax cost associated with the fulfilment price */
  fulfilmentTaxPrice?: Maybe<Scalars['Float']>;
  /**
   *  Indicates the type of fulfilment. Possible values are CC_PFS ( Click & Collect - Pick from Store), CC_PFDC ( Click & Collect - Pick from DC), HD_PFS (Home Delivery - Pick
   *  from Store), HD_PFDC ( Home Delivery - Pick from DC)
   */
  fulfilmentType?: Maybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Pickup location. This is required for click & collect orders */
  pickupLocationRef?: Maybe<Scalars['String']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

/**  A list of results that matched against a OrderItem search query */
export type OrderItemConnection = {
  __typename?: 'OrderItemConnection';
  /**  A list of edges that links to OrderItem type node */
  edges?: Maybe<Array<Maybe<OrderItemEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a OrderItem connection to the OrderItem type */
export type OrderItemEdge = {
  __typename?: 'OrderItemEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the OrderItem edge */
  node?: Maybe<OrderItem>;
};

export type PaymentLink = {
  __typename?: 'PaymentLink';
  ref?: Maybe<Scalars['String']>;
};

/**
 *  The `Product` interface identifies a type that is, and is treated like, a Product. <br /><br />
 *  There are currently 3 Product implementations available that represent the most common product type abstractions within the Product domain: <br />
 *  * `StandardProduct` - An ordinary Product structure.
 *  * `VariantProduct` - A variation based Product structure which can have a Standard Product as a base. Variation examples include 'Size', 'Color', 'Volume', 'Flavour', etc. and can be managed with the `attributes` field.
 *  * `GroupProduct` - A group Product structure. A Group Product can contain multiple other products, of any Product type.
 */
export type Product = {
  /**  The name of the product */
  name: Scalars['String'];
  /**  A list of prices for the product */
  prices?: Maybe<Array<Maybe<Price>>>;
  /**  A short description of the product (max 255 chars) */
  summary?: Maybe<Scalars['String']>;
  /**  Tax information for the product */
  tax?: Maybe<TaxType>;
};

/**  The `Price` type is a structure to hold a Price value for Products. It is considered more like a complex value type, rather than an object. All fields are required, and the `type` and `currency` fields make up the unique key for the `value`. */
export type Price = {
  __typename?: 'Price';
  /**  The currency of the Price, for example 'USD', 'GBP', 'AUD', etc. */
  currency: Scalars['String'];
  /**  The type field is used to identify different types of prices, for example 'RRP', 'SALE', etc. No Price type values are enforced by the platform. */
  type: Scalars['String'];
  /**  The price value itself */
  value: Scalars['Float'];
};

/**  The `TaxType` type is a structure to hold Tax information for Products. It is considered more like a complex value type, rather than an object. All fields are required, and the `country` and `group` fields make up the unique key identifying the `tariff`. */
export type TaxType = {
  __typename?: 'TaxType';
  /**  The country in which this Tax Type applies */
  country: Scalars['String'];
  /**  A group field which can be used to further identify the Tax Tariff applicable */
  group: Scalars['String'];
  /**  The tariff of the Tax Type */
  tariff?: Maybe<Scalars['String']>;
};

/**  A list of results that matched against a ArticleItem search query */
export type ArticleItemConnection = {
  __typename?: 'ArticleItemConnection';
  /**  A list of edges that links to ArticleItem type node */
  edges?: Maybe<Array<Maybe<ArticleItemEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a ArticleItem connection to the ArticleItem type */
export type ArticleItemEdge = {
  __typename?: 'ArticleItemEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the ArticleItem edge */
  node?: Maybe<ArticleItem>;
};

/**  The item within an article */
export type ArticleItem = Node & {
  __typename?: 'ArticleItem';
  /**  Article associated with this item */
  article?: Maybe<Article>;
  /**  Barcode of article item */
  barcode?: Maybe<Scalars['String']>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Quantity of article item */
  quantity: Scalars['Int'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

/**  Input type to uniquely identify a `Location` object. We use all the fields present in the request to look for this object. */
export type LocationKey = {
  /**  ID of the object */
  id?: InputMaybe<Scalars['ID']>;
  /**
   *  The client's reference identifier for the object. <br/>
   *  Max character limit: 100.
   */
  ref?: InputMaybe<Scalars['String']>;
};

export type BillingAccount = Extendable & Node & Referenceable & {
  __typename?: 'BillingAccount';
  /**  Address associated to the `BillingAccount`. */
  address?: Maybe<StreetAddress>;
  /**  A list of attributes associated with the `BillingAccount`. This can be used to extend the existing data structure with additional data. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Date and time of creation. */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Credit Memos associated to the `BillingAccount`. */
  creditMemos?: Maybe<CreditMemoConnection>;
  /**  Customer associated to the `BillingAccount`. */
  customer?: Maybe<CustomerLink>;
  /**  ID of the object. */
  id: Scalars['ID'];
  /**  Invoices associated to the `BillingAccount`. */
  invoices?: Maybe<InvoiceConnection>;
  /**  Name of the `BillingAccount`. */
  name?: Maybe<Scalars['String']>;
  /**  Payments associated to the `BillingAccount`. */
  payments?: Maybe<PaymentConnection>;
  /**  External reference to the `BillingAccount`. Must be unique. */
  ref: Scalars['String'];
  /**  Retailer associated to the `BillingAccount`. */
  retailer?: Maybe<RetailerLink>;
  /**  Status of the `BillingAccount`. */
  status?: Maybe<Scalars['String']>;
  /**  Type of the `BillingAccount`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  type?: Maybe<Scalars['String']>;
  /**  Date and time of last update. */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference to the `workflow` associated. */
  workflow?: Maybe<WorkflowLink>;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef?: Maybe<Scalars['String']>;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion?: Maybe<Scalars['String']>;
};


export type BillingAccountCreditMemosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  currency?: InputMaybe<CurrencyLinkInput>;
  first?: InputMaybe<Scalars['Int']>;
  issueDate?: InputMaybe<DateRange>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<OrderLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  returnOrder?: InputMaybe<ReturnOrderLinkInput>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
  workflow?: InputMaybe<WorkflowLinkInput>;
  workflowRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  workflowVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type BillingAccountInvoicesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  currency?: InputMaybe<CurrencyLinkInput>;
  dueDate?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  fulfilment?: InputMaybe<FulfilmentLinkInput>;
  issueDate?: InputMaybe<DateRange>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<OrderLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
  workflow?: InputMaybe<WorkflowLinkInput>;
  workflowRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  workflowVersion?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type BillingAccountPaymentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  retailer?: InputMaybe<RetailerLinkInput>;
  status?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflow?: InputMaybe<WorkflowLinkInput>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

export type StreetAddress = {
  __typename?: 'StreetAddress';
  /**  City */
  city?: Maybe<Scalars['String']>;
  /**  Company name */
  companyName?: Maybe<Scalars['String']>;
  /**  Country */
  country?: Maybe<Scalars['String']>;
  /**  Latitude */
  latitude?: Maybe<Scalars['Float']>;
  /**  Longitude */
  longitude?: Maybe<Scalars['Float']>;
  /**  Name */
  name?: Maybe<Scalars['String']>;
  /**  Postcode */
  postcode?: Maybe<Scalars['String']>;
  /**  Region */
  region?: Maybe<Scalars['String']>;
  /**  State */
  state?: Maybe<Scalars['String']>;
  /**  Street */
  street?: Maybe<Scalars['String']>;
  /**  Timezone */
  timeZone?: Maybe<Scalars['String']>;
};

export type CurrencyLinkInput = {
  /**  Max character limit: 20. */
  alphabeticCode: Scalars['String'];
};

export type OrderLinkInput = {
  ref: Scalars['String'];
  retailer: RetailerId;
};

export type RetailerId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

export type ReturnOrderLinkInput = {
  /**  Max character limit: 100. */
  ref: Scalars['String'];
  retailer: RetailerLinkInput;
};

export type RetailerLinkInput = {
  id: Scalars['ID'];
};

export type WorkflowLinkInput = {
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  ref: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  version: Scalars['Int'];
};

/**  A list of results that matched against a CreditMemo search query */
export type CreditMemoConnection = {
  __typename?: 'CreditMemoConnection';
  /**  A list of edges that links to CreditMemo type node */
  edges?: Maybe<Array<Maybe<CreditMemoEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a CreditMemo connection to the CreditMemo type */
export type CreditMemoEdge = {
  __typename?: 'CreditMemoEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the CreditMemo edge */
  node?: Maybe<CreditMemo>;
};

export type CreditMemo = Extendable & Node & Referenceable & {
  __typename?: 'CreditMemo';
  /**  A list of attributes associated with the `CreditMemo`. This can be used to extend the existing data structure with additional data. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  `BillingAccount` associated with the `CreditMemo`. */
  billingAccount?: Maybe<BillingAccount>;
  /**  Date and time of creation. */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Reference to the currency type. Generally, the standard ISO-4217 is used. */
  currency?: Maybe<CurrencyLink>;
  /**  Default tax type */
  defaultTaxType?: Maybe<TaxType>;
  /**  ID of the object. */
  id: Scalars['ID'];
  /**  `Invoice` associated with this `CreditMemo`. */
  invoice?: Maybe<Invoice>;
  /**  Issue date */
  issueDate?: Maybe<Scalars['DateTime']>;
  /**  The `CreditMemoItem`s associated with this `CreditMemo`. */
  items?: Maybe<CreditMemoItemConnection>;
  /**  Reference to an `Order` associated with the `CreditMemo`. */
  order?: Maybe<OrderLink>;
  /**  External reference to the `CreditMemo`. Must be unique. */
  ref: Scalars['String'];
  /**  Reference to a `ReturnOrder` associated with the `CreditMemo`. */
  returnOrder?: Maybe<ReturnOrderLink>;
  /**  Status of the `CreditMemo`. */
  status?: Maybe<Scalars['String']>;
  /**  Sub-total amount */
  subTotalAmount?: Maybe<AmountType>;
  /**  Total amount */
  totalAmount?: Maybe<AmountType>;
  /**  Total balance */
  totalBalance?: Maybe<AmountType>;
  /**  Total tax */
  totalTax?: Maybe<AmountType>;
  /**  Type of the `CreditMemo`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  type?: Maybe<Scalars['String']>;
  /**  Date and time of last update. */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference to the `workflow` associated. */
  workflow?: Maybe<WorkflowLink>;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef?: Maybe<Scalars['String']>;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion?: Maybe<Scalars['String']>;
};


export type CreditMemoItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderItem?: InputMaybe<OrderItemLinkInput>;
  product?: InputMaybe<ProductLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  returnOrderItem?: InputMaybe<ReturnOrderItemLinkInput>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};

export type CurrencyLink = {
  __typename?: 'CurrencyLink';
  alphabeticCode?: Maybe<Scalars['String']>;
};

export type Invoice = Extendable & Node & Referenceable & {
  __typename?: 'Invoice';
  /**  A list of attributes associated with the `Invoice`. This can be used to extend the existing data structure with additional data. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  The `BillingAccount` associated with the `Invoice`. */
  billingAccount?: Maybe<BillingAccount>;
  /**  Date and time of creation. */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  A list of associated credit memos that have been used to adjust this invoice in favour of the billing account */
  creditMemos?: Maybe<Array<Maybe<CreditMemo>>>;
  /**  Reference to the currency type. Generally, the standard ISO-4217 is used. */
  currency?: Maybe<CurrencyLink>;
  /**  The default Tax Type for this invoice. Individual invoice items can override. */
  defaultTaxType?: Maybe<TaxType>;
  /**  The date on which this invoice is due for completion. */
  dueDate?: Maybe<Scalars['DateTime']>;
  /**  Reference to the `Fulfilment` associated with this `Invoice`. */
  fulfilment?: Maybe<FulfilmentLink>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  The date on which this invoice was formally issued. */
  issueDate?: Maybe<Scalars['DateTime']>;
  /**  The `InvoiceItem`s associated with this `Invoice`. */
  items?: Maybe<InvoiceItemConnection>;
  /**  Reference to the `Order` associated with this `Invoice`. */
  order?: Maybe<OrderLink>;
  /**  External reference to the `Invoice`. Must be unique. */
  ref: Scalars['String'];
  /**  Status of the `Invoice`. */
  status?: Maybe<Scalars['String']>;
  /**  The total amount of this invoice excluding tax. */
  subTotalAmount?: Maybe<AmountType>;
  /**  The total amount of this invoice including tax */
  totalAmount?: Maybe<AmountType>;
  /**  The total amount of this invoice yet to be paid. (This caters for multi-part payments and payment milestones) */
  totalBalance?: Maybe<AmountType>;
  /**  The total amount of tax for this invoice */
  totalTax?: Maybe<AmountType>;
  /**  Type of the `Invoice`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  type?: Maybe<Scalars['String']>;
  /**  Date and time of last update. */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference to the `workflow` associated. */
  workflow?: Maybe<WorkflowLink>;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef?: Maybe<Scalars['String']>;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion?: Maybe<Scalars['Int']>;
};


export type InvoiceItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<ProductLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedOn?: InputMaybe<DateRange>;
};

export type FulfilmentLink = {
  __typename?: 'FulfilmentLink';
  ref?: Maybe<Scalars['String']>;
};

export type ProductLinkInput = {
  catalogue: ProductCatalogueLinkInput;
  /**  Max character limit: 100. */
  ref: Scalars['String'];
};

export type ProductCatalogueLinkInput = {
  /**  Max character limit: 100. */
  ref: Scalars['String'];
};

/**  A list of results that matched against a InvoiceItem search query */
export type InvoiceItemConnection = {
  __typename?: 'InvoiceItemConnection';
  /**  A list of edges that links to InvoiceItem type node */
  edges?: Maybe<Array<Maybe<InvoiceItemEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a InvoiceItem connection to the InvoiceItem type */
export type InvoiceItemEdge = {
  __typename?: 'InvoiceItemEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the InvoiceItem edge */
  node?: Maybe<InvoiceItem>;
};

export type InvoiceItem = Node & Referenceable & {
  __typename?: 'InvoiceItem';
  /**  The item amount for this item excluding tax */
  amount?: Maybe<AmountType>;
  /**  Date and time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  A description of the source item. In the case of product source items this can be the name. */
  description?: Maybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  The `Invoice` this object is associated with */
  invoice?: Maybe<Invoice>;
  /**  Associated product for this invoice item. */
  product?: Maybe<ProductLink>;
  /**  External reference to the `InvoiceItem`. Must be unique. */
  ref: Scalars['String'];
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount?: Maybe<AmountType>;
  /**  Type of the `InvoiceItem`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  type?: Maybe<Scalars['String']>;
  /**  The unit price of the source item. */
  unitAmount?: Maybe<AmountType>;
  /**  `The total quantity of the source item. Should default to 0 */
  unitQuantity?: Maybe<QuantityType>;
  /**  The tax type of this item. Should only be provided if different to the default invoice tax type. */
  unitTaxType?: Maybe<TaxType>;
  /**  Date and time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

export type AmountType = {
  __typename?: 'AmountType';
  amount?: Maybe<Scalars['Float']>;
  scale?: Maybe<Scalars['Int']>;
  unscaledValue?: Maybe<Scalars['Int']>;
};

export type ProductLink = {
  __typename?: 'ProductLink';
  catalogue?: Maybe<CatalogueLink>;
  ref?: Maybe<Scalars['String']>;
};

export type CatalogueLink = {
  __typename?: 'CatalogueLink';
  ref?: Maybe<Scalars['String']>;
};

/**  The `QuantityType` type, holds separately the amount (quantity) and the units associated. */
export type QuantityType = {
  __typename?: 'QuantityType';
  /**  The quantity itself. */
  quantity?: Maybe<Scalars['Int']>;
  /**  The unit associated. */
  unit?: Maybe<Scalars['String']>;
};

export type OrderLink = {
  __typename?: 'OrderLink';
  ref?: Maybe<Scalars['String']>;
  retailer?: Maybe<RetailerLink>;
};

export type RetailerLink = {
  __typename?: 'RetailerLink';
  id?: Maybe<Scalars['ID']>;
};

export type WorkflowLink = {
  __typename?: 'WorkflowLink';
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  ref?: Maybe<Scalars['String']>;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  version?: Maybe<Scalars['Int']>;
};

export type OrderItemLinkInput = {
  order: OrderLinkInput;
  ref: Scalars['String'];
};

export type ReturnOrderItemLinkInput = {
  /**  Max character limit: 100. */
  ref: Scalars['String'];
  returnOrder?: InputMaybe<ReturnOrderLinkInput>;
};

/**  A list of results that matched against a CreditMemoItem search query */
export type CreditMemoItemConnection = {
  __typename?: 'CreditMemoItemConnection';
  /**  A list of edges that links to CreditMemoItem type node */
  edges?: Maybe<Array<Maybe<CreditMemoItemEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a CreditMemoItem connection to the CreditMemoItem type */
export type CreditMemoItemEdge = {
  __typename?: 'CreditMemoItemEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the CreditMemoItem edge */
  node?: Maybe<CreditMemoItem>;
};

export type CreditMemoItem = Node & Referenceable & {
  __typename?: 'CreditMemoItem';
  /**  The item amount for this item excluding tax. This is a calculated value based on business rules that does not necessarily have to take into account the unit quantity or amounts. */
  amount?: Maybe<AmountType>;
  /**  Date and time of creation. */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  `CreditMemo` associated with the `CreditMemoItem`. */
  creditMemo?: Maybe<CreditMemo>;
  /**  Credit reason code of the `CreditMemoItem`. */
  creditReasonCode?: Maybe<SettingValueType>;
  /** # Description of the `CreditMemoItem`. */
  description?: Maybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Reference to an `OrderItem` associated with the `CreditMemoItem`. */
  orderItem?: Maybe<OrderItemLink>;
  /**  Reference to a `Product` associated with the `CreditMemoItem`. */
  product?: Maybe<ProductLink>;
  /**  External reference to the `CreditMemoItem`. Must be unique. */
  ref: Scalars['String'];
  /**  Reference to a `ReturnOrderItem` associated with the `CreditMemoItem`. */
  returnOrderItem?: Maybe<ReturnOrderItemLink>;
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount?: Maybe<AmountType>;
  /**  Type of the `CreditMemoItem`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  type?: Maybe<Scalars['String']>;
  /**  The unit sale price at time of sale or exchange */
  unitAmount?: Maybe<AmountType>;
  /**  The unit cost price at time of sale or exchange. */
  unitCostAmount?: Maybe<AmountType>;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity?: Maybe<QuantityType>;
  /**  The tax type of this item. Should only be provided if different to the default credit memo tax type. */
  unitTaxType?: Maybe<TaxType>;
  /**  Date and time of last update. */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

export type SettingValueType = {
  __typename?: 'SettingValueType';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type OrderItemLink = {
  __typename?: 'OrderItemLink';
  order?: Maybe<OrderLink>;
  ref?: Maybe<Scalars['String']>;
};

export type ReturnOrderItemLink = {
  __typename?: 'ReturnOrderItemLink';
  ref?: Maybe<Scalars['String']>;
  returnOrder?: Maybe<ReturnOrderLink>;
};

export type ReturnOrderLink = {
  __typename?: 'ReturnOrderLink';
  ref?: Maybe<Scalars['String']>;
  retailer?: Maybe<RetailerLink>;
};

export type FulfilmentLinkInput = {
  ref: Scalars['String'];
};

/**  A list of results that matched against a Invoice search query */
export type InvoiceConnection = {
  __typename?: 'InvoiceConnection';
  /**  A list of edges that links to Invoice type node */
  edges?: Maybe<Array<Maybe<InvoiceEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Invoice connection to the Invoice type */
export type InvoiceEdge = {
  __typename?: 'InvoiceEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Invoice edge */
  node?: Maybe<Invoice>;
};

/**  A list of results that matched against a Payment search query */
export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  /**  A list of edges that links to Payment type node */
  edges?: Maybe<Array<Maybe<PaymentEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Payment connection to the Payment type */
export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Payment edge */
  node?: Maybe<Payment>;
};

/**  The Payment information */
export type Payment = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'Payment';
  /**  The amount of the `Payment`. Usually for a Payment this will equal to the `Order`s' total amount that this Payment was created against. */
  amount: AmountType;
  /**  A list of attributes associated with the `Payment`. This can be used to extend the existing data structure with additional data. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Billing Account associated to the `Payment`. */
  billingAccount?: Maybe<BillingAccount>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Orders associated with the `Payment`. */
  orders?: Maybe<OrderConnection>;
  /**  Payment Transactions associated with the `Payment`. */
  paymentTransactions?: Maybe<PaymentTransactionConnection>;
  /**  External reference of the object. Must be unique. */
  ref: Scalars['String'];
  /**  Retailer associated to the `Payment`. */
  retailer?: Maybe<RetailerLink>;
  /**
   *  The current status of the `Payment`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Status of the `Payment`
   */
  status: Scalars['String'];
  /**
   *  Type of the `Payment`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the `Payment`, typically used by the Orchestration Engine to determine the workflow that should be applied. For Payment a sample value for this is `DEFAULT`.
   */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference to the `workflow` associated. */
  workflow?: Maybe<WorkflowLink>;
  /**
   *  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/>
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef: Scalars['String'];
  /**
   *  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/>
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion: Scalars['Int'];
};


/**  The Payment information */
export type PaymentOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  customerLink?: InputMaybe<CustomerLinkInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  payment?: InputMaybe<PaymentLinkInput>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  totalTaxPrice?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  The Payment information */
export type PaymentPaymentTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  authorizationKey?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  before?: InputMaybe<Scalars['String']>;
  cardType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  currency?: InputMaybe<CurrencyLinkInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  paymentMethod?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflow?: InputMaybe<WorkflowLinkInput>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

export type CustomerLinkInput = {
  ref: Scalars['String'];
};

export type PaymentLinkInput = {
  /**  Max character limit: 100. */
  ref: Scalars['String'];
};

/**  A list of results that matched against a Order search query */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /**  A list of edges that links to Order type node */
  edges?: Maybe<Array<Maybe<OrderEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Order connection to the Order type */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Order edge */
  node?: Maybe<Order>;
};

/**  A list of results that matched against a PaymentTransaction search query */
export type PaymentTransactionConnection = {
  __typename?: 'PaymentTransactionConnection';
  /**  A list of edges that links to PaymentTransaction type node */
  edges?: Maybe<Array<Maybe<PaymentTransactionEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a PaymentTransaction connection to the PaymentTransaction type */
export type PaymentTransactionEdge = {
  __typename?: 'PaymentTransactionEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the PaymentTransaction edge */
  node?: Maybe<PaymentTransaction>;
};

/**  The Payment Transaction information */
export type PaymentTransaction = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'PaymentTransaction';
  /**  The amount of the `PaymentTransaction`. */
  amount: AmountType;
  /**  A list of attributes associated with the `PaymentServiceProvider`. This can be used to extend the existing data structure with additional data. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  The key received when executing a pre authorisation transaction. Typically used to perform a subsequent payment capture. */
  authorizationKey?: Maybe<Scalars['String']>;
  /**  Card type. Some sample values are 'MASTERCARD', 'VISA', 'AMEX', 'DINERS', 'SPAN', 'DISCOVER', 'UNIONPAY', 'JCB', 'MAESTRO', 'INTERAC' */
  cardType?: Maybe<Scalars['String']>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Reference to the currency type. Generally, the standard ISO-4217 is used. */
  currency?: Maybe<CurrencyLink>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Reference to the parent Payment. */
  payment?: Maybe<Payment>;
  /**  Payment method. */
  paymentMethod: Scalars['String'];
  /**  Associated Payment Service Provider. */
  paymentServiceProvider?: Maybe<PaymentServiceProvider>;
  /**  External reference of the object. Must be unique. */
  ref: Scalars['String'];
  /**
   *  The current status of the `PaymentTransaction`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Status of the `PaymentTransaction`.
   */
  status: Scalars['String'];
  /**
   *  Type of the `PaymentTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the `PaymentTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Common types that are used are: CAPTURE
   * REFUND, AUTHORIZATION
   */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference to the `workflow` associated. */
  workflow?: Maybe<WorkflowLink>;
  /**
   *  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/>
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef: Scalars['String'];
  /**
   *  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/>
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion: Scalars['Int'];
};

/**  The Payment Service Provider information */
export type PaymentServiceProvider = Extendable & Referenceable & {
  __typename?: 'PaymentServiceProvider';
  /**  A list of attributes associated with the `PaymentServiceProvider`. This can be used to extend the existing data structure with additional data. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Client ID of the `PaymentServiceProvider` */
  clientId: Scalars['String'];
  /**  Client Secret of the `PaymentServiceProvider` */
  clientSecret: Scalars['String'];
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Host of the `PaymentServiceProvider`. Sample value: 'api.sandbox.paypal.com'. */
  host: Scalars['String'];
  /**  ID of the object */
  id: Scalars['ID'];
  /**  name of the `PaymentServiceProvider` */
  name?: Maybe<Scalars['String']>;
  /**  Port of the `PaymentServiceProvider` */
  port: Scalars['Int'];
  /**  External reference of the object. Must be unique. */
  ref: Scalars['String'];
  /**  Retailer associated to the `PaymentServiceProvider`. */
  retailer: RetailerLink;
  /**  Auth Token of the `PaymentServiceProvider` */
  serviceAuthToken: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

/**  A list of results that matched against a BillingAccount search query */
export type BillingAccountConnection = {
  __typename?: 'BillingAccountConnection';
  /**  A list of edges that links to BillingAccount type node */
  edges?: Maybe<Array<Maybe<BillingAccountEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a BillingAccount connection to the BillingAccount type */
export type BillingAccountEdge = {
  __typename?: 'BillingAccountEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the BillingAccount edge */
  node?: Maybe<BillingAccount>;
};

/**  A list of results that matched against a CarrierAttribute search query */
export type CarrierAttributeConnection = {
  __typename?: 'CarrierAttributeConnection';
  /**  A list of edges that links to CarrierAttribute type node */
  edges?: Maybe<Array<Maybe<CarrierAttributeEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a CarrierAttribute connection to the CarrierAttribute type */
export type CarrierAttributeEdge = {
  __typename?: 'CarrierAttributeEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the CarrierAttribute edge */
  node?: Maybe<CarrierAttribute>;
};

/**  The attribute of carrier */
export type CarrierAttribute = {
  __typename?: 'CarrierAttribute';
  /**  Carrier details */
  carrierDetails?: Maybe<CarrierDetails>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

/**  The details of carrier */
export type CarrierDetails = {
  __typename?: 'CarrierDetails';
  /**  Location ID of carrier details */
  agentId?: Maybe<Scalars['String']>;
  attributes?: Maybe<CarrierAttributeConnection>;
  /**  Carrier ID of carrier details */
  carrierId?: Maybe<Scalars['String']>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Retailer ID of carrier details */
  retailerId?: Maybe<Scalars['String']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};


/**  The details of carrier */
export type CarrierDetailsAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  value?: InputMaybe<Array<Scalars['String']>>;
};

export type ArticleId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

/**  The `CarrierConsignmentKey` input is the external_reference, for identifying a specific ConsignmentNoteEntity. */
export type CarrierConsignmentKey = {
  /**  External reference of the `Consignment`. Must be unique. */
  ref: Scalars['String'];
};

/**  A list of results that matched against a CarrierDetails search query */
export type CarrierDetailsConnection = {
  __typename?: 'CarrierDetailsConnection';
  /**  A list of edges that links to CarrierDetails type node */
  edges?: Maybe<Array<Maybe<CarrierDetailsEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a CarrierDetails connection to the CarrierDetails type */
export type CarrierDetailsEdge = {
  __typename?: 'CarrierDetailsEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the CarrierDetails edge */
  node?: Maybe<CarrierDetails>;
};

/**  A list of results that matched against a Carrier search query */
export type CarrierConnection = {
  __typename?: 'CarrierConnection';
  /**  A list of edges that links to Carrier type node */
  edges?: Maybe<Array<Maybe<CarrierEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Carrier connection to the Carrier type */
export type CarrierEdge = {
  __typename?: 'CarrierEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Carrier edge */
  node?: Maybe<Carrier>;
};

/**  The `ProductCatalogueKey` input is the parameter for identifying a specific Product Catalogue. */
export type ProductCatalogueKey = {
  /**
   *  Product Catalogue reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
};

/**  A list of results that matched against a Category search query */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /**  A list of edges that links to Category type node */
  edges?: Maybe<Array<Maybe<CategoryEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Category connection to the Category type */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Category edge */
  node?: Maybe<Category>;
};

/**
 *  A `Category` can be associated with Product Catalogues and Products. It has a tree-like structure, where each Category may contain a parent category, and / or one or more child categories. This new Category structure allows support for more advanced category hierarchies. The `ref` field will be the unique identifier for this Category within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `Category` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type Category = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'Category';
  /**  A list of attributes associated with this Category. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  The Product Catalogue in which this Category is managed */
  catalogue: ProductCatalogue;
  /**  A connection to the immediate child Categories (NOTE: This currently does not traverse the entire tree) */
  childCategories?: Maybe<CategoryConnection>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: Scalars['ID'];
  /**  The name of the Category */
  name: Scalars['String'];
  /**  This Category's immediate parent Category */
  parentCategory?: Maybe<Category>;
  /**  The unique reference identifier for the Category */
  ref: Scalars['String'];
  /**  The current status of the `Category`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  A short description of the Category */
  summary?: Maybe<Scalars['String']>;
  /**  Type of the `Category`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


/**
 *  A `Category` can be associated with Product Catalogues and Products. It has a tree-like structure, where each Category may contain a parent category, and / or one or more child categories. This new Category structure allows support for more advanced category hierarchies. The `ref` field will be the unique identifier for this Category within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `Category` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type CategoryChildCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<ProductCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**
 *  The `ProductCatalogue` is a structure that supports a grouping of product and category data. The `ref` field will be the unique identifier for this catalogue. <br /><br />
 *  The `ProductCatalogue` is an orchestrateable entity, and the parent type for all `Product` and `Category` orchestration events. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type ProductCatalogue = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'ProductCatalogue';
  /**  A list of attributes associated with this Product Catalogue. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  A connection to associated Categories */
  categories?: Maybe<CategoryConnection>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  A short description of the Product Catalogue */
  description?: Maybe<Scalars['String']>;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: Scalars['ID'];
  /**  The name of the Product Catalogue */
  name: Scalars['String'];
  /**  The unique reference identifier for the Product Catalogue */
  ref: Scalars['String'];
  /**  A list of Retailer references associated with this Product Catalogue */
  retailerRefs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**  The current status of the `ProductCatalogue`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  Type of the `ProductCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


/**
 *  The `ProductCatalogue` is a structure that supports a grouping of product and category data. The `ref` field will be the unique identifier for this catalogue. <br /><br />
 *  The `ProductCatalogue` is an orchestrateable entity, and the parent type for all `Product` and `Category` orchestration events. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type ProductCatalogueCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<ProductCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**
 *  Represents a text based comment. A `comment` can be added against an existing entity object. <br /> <br />
 *  **Usage**<br /><br/>
 *  Use the combination of an entity's `entityType` and `entityId` values to associate a comment against that entity.
 */
export type Comment = Node & {
  __typename?: 'Comment';
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the entity */
  entityId: Scalars['ID'];
  /**  Type of the entity. For example `ORDER`, `FULFILMENT`, `ORDERITEM`, `PRODUCTCATALOGUE` etc. */
  entityType: Scalars['String'];
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Comment text */
  text: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

/**  A list of results that matched against a Comment search query */
export type CommentConnection = {
  __typename?: 'CommentConnection';
  /**  A list of edges that links to Comment type node */
  edges?: Maybe<Array<Maybe<CommentEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Comment connection to the Comment type */
export type CommentEdge = {
  __typename?: 'CommentEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Comment edge */
  node?: Maybe<Comment>;
};

/**  The `ConsignmentId` input is the generated id. */
export type ConsignmentId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

/**  A list of results that matched against a Consignment search query */
export type ConsignmentConnection = {
  __typename?: 'ConsignmentConnection';
  /**  A list of edges that links to Consignment type node */
  edges?: Maybe<Array<Maybe<ConsignmentEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Consignment connection to the Consignment type */
export type ConsignmentEdge = {
  __typename?: 'ConsignmentEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Consignment edge */
  node?: Maybe<Consignment>;
};

/**  The `ControlGroupKey` input is the parameter for identifying a specific Catalogue Control Group */
export type ControlGroupKey = {
  /**
   *  Control Group reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
};

export type Control = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'Control';
  /**  List of Attribute containing meta data information for an entity */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Control Group */
  controlGroup?: Maybe<ControlGroup>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Description */
  description?: Maybe<Scalars['String']>;
  /**  Order that this control is applied */
  executionOrder?: Maybe<Scalars['Int']>;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: Scalars['ID'];
  /**  Name */
  name?: Maybe<Scalars['String']>;
  /**  The reference identifier used to identify an entity */
  ref: Scalars['String'];
  /**  The current status of the `Control`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  Type of the `Control`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  values */
  values?: Maybe<Array<Maybe<Attribute>>>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};

export type ControlGroup = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'ControlGroup';
  /**  List of Attribute containing meta data information for an entity */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Controls */
  controls?: Maybe<ControlConnection>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Description */
  description?: Maybe<Scalars['String']>;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: Scalars['ID'];
  /**  Name */
  name?: Maybe<Scalars['String']>;
  /**  The reference identifier used to identify an entity */
  ref: Scalars['String'];
  /**  Retailer refs */
  retailerRefs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**  The current status of the `ControlGroup`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  Type of the `ControlGroup`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


export type ControlGroupControlsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  description?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  executionOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**  A list of results that matched against a Control search query */
export type ControlConnection = {
  __typename?: 'ControlConnection';
  /**  A list of edges that links to Control type node */
  edges?: Maybe<Array<Maybe<ControlEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Control connection to the Control type */
export type ControlEdge = {
  __typename?: 'ControlEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Control edge */
  node?: Maybe<Control>;
};

/**  A list of results that matched against a ControlGroup search query */
export type ControlGroupConnection = {
  __typename?: 'ControlGroupConnection';
  /**  A list of edges that links to ControlGroup type node */
  edges?: Maybe<Array<Maybe<ControlGroupEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a ControlGroup connection to the ControlGroup type */
export type ControlGroupEdge = {
  __typename?: 'ControlGroupEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the ControlGroup edge */
  node?: Maybe<ControlGroup>;
};

/**  A list of results that matched against a Currency search query */
export type CurrencyConnection = {
  __typename?: 'CurrencyConnection';
  /**  A list of edges that links to Currency type node */
  edges?: Maybe<Array<Maybe<CurrencyEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Currency connection to the Currency type */
export type CurrencyEdge = {
  __typename?: 'CurrencyEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Currency edge */
  node?: Maybe<Currency>;
};

export type Currency = {
  __typename?: 'Currency';
  /**
   *  External reference to the `Currency`. Must be unique.
   *  For the standard currency types, this field is the three-letters-code used internationally (ISO-4217). eg: AUD, EUR, USD.
   */
  alphabeticCode?: Maybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Currencies which are defined as part of the ISO-4217 standard cannot be deleted or modified. */
  isISO4217?: Maybe<Scalars['Boolean']>;
  /**  The number of minor units that make up a major unit of the `Currency` */
  minorUnits?: Maybe<Scalars['Int']>;
  /**  The name of the `Currency`. */
  name?: Maybe<Scalars['String']>;
  /**  The numeric code of the `Currency`. */
  numericCode?: Maybe<Scalars['String']>;
};

/**
 *  CustomerAddress connects to an order either though the FulfilmentChoice (the CC
 *  location chosen by the customer) or the Fulfilments (from and to locations)
 */
export type CustomerAddress = Address & {
  __typename?: 'CustomerAddress';
  /**  City */
  city?: Maybe<Scalars['String']>;
  /**  Company name */
  companyName?: Maybe<Scalars['String']>;
  /**  Country */
  country?: Maybe<Scalars['String']>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Latitude */
  latitude?: Maybe<Scalars['Float']>;
  /**  Longitude */
  longitude?: Maybe<Scalars['Float']>;
  /**  Name */
  name?: Maybe<Scalars['String']>;
  /**  Postcode */
  postcode?: Maybe<Scalars['String']>;
  /**  Location reference */
  ref?: Maybe<Scalars['String']>;
  /**  Region */
  region?: Maybe<Scalars['String']>;
  /**  State */
  state?: Maybe<Scalars['String']>;
  /**  Street */
  street?: Maybe<Scalars['String']>;
  /**  Timezone */
  timeZone?: Maybe<Scalars['String']>;
  /**  Type of Address, to support legacy address, the value can be AGENT and ORDER */
  type?: Maybe<Scalars['String']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

/**  A list of results that matched against a CustomerAddress search query */
export type CustomerAddressConnection = {
  __typename?: 'CustomerAddressConnection';
  /**  A list of edges that links to CustomerAddress type node */
  edges?: Maybe<Array<Maybe<CustomerAddressEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a CustomerAddress connection to the CustomerAddress type */
export type CustomerAddressEdge = {
  __typename?: 'CustomerAddressEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the CustomerAddress edge */
  node?: Maybe<CustomerAddress>;
};

/**  A list of results that matched against a Customer search query */
export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  /**  A list of edges that links to Customer type node */
  edges?: Maybe<Array<Maybe<CustomerEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Customer connection to the Customer type */
export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Customer edge */
  node?: Maybe<Customer>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A DecisionTable is a structure that defines which actions to perform for a given set of conditions.
 */
export type DecisionTable = {
  __typename?: 'DecisionTable';
  /**  Description of the decision table */
  description?: Maybe<Scalars['String']>;
  /**  Id of the object */
  id: Scalars['ID'];
  /**  Name of the table */
  name: Scalars['String'];
  /**  A connection of `Rule`s. A decision rule is a set of conditions with corresponding actions that must be performed if the conditions evaluate to true. */
  rules?: Maybe<DecisionRuleConnection>;
};


/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A DecisionTable is a structure that defines which actions to perform for a given set of conditions.
 */
export type DecisionTableRulesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/**  A list of results that matched against a DecisionRule search query */
export type DecisionRuleConnection = {
  __typename?: 'DecisionRuleConnection';
  /**  A list of edges that link to DecisionRule type node */
  edges?: Maybe<Array<Maybe<DecisionRuleEdge>>>;
  /**  An object containing information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a DecisionRule connection to the DecisionRule type */
export type DecisionRuleEdge = {
  __typename?: 'DecisionRuleEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the DecisionRule edge */
  node?: Maybe<DecisionRule>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A DecisionRule is a set of conditions along with actions that must be performed if the conditions evaluate to true.
 */
export type DecisionRule = {
  __typename?: 'DecisionRule';
  /**  A short description of the rule. Helpful to understand the behaviour when the rule itself is complicated. */
  description?: Maybe<Scalars['String']>;
  /**  Id of the object */
  id: Scalars['ID'];
  /**  A set of conditions that ALL need to be true for the input to evaluate to true. */
  inputs: Array<DecisionRuleInput>;
  /**  A set of actions to be taken when the input evaluates to true. <br/> Note: Currently we support only one action. The type is list for future support. */
  outputs: Array<DecisionRuleOutput>;
  /**  The priority decides which rule to execute in case of conflict between multiple rules. The rule with the highest priority (represented by lowest number) will be selected. If no priority is provided, each rule will get a priority of 100 by default. */
  priority?: Maybe<Scalars['Int']>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Represents the input conditions for a `DecisionRule`.
 */
export type DecisionRuleInput = {
  __typename?: 'DecisionRuleInput';
  /**  Id of the object */
  id: Scalars['ID'];
  /**  This represents the right hand side of the condition equation. It includes the input values. */
  inputEntries?: Maybe<DecisionRuleInputEntries>;
  /**  The left hand side of a condition equation. At the moment, the actions are executed only when the `inputExpression` evaluates to true. So, it should be designed such that the true value should lead to the execution of the action. */
  inputExpression?: Maybe<DecisionRuleInputExpression>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  This represents the values that the input expression will be compared to. Think of these as the right hand side of the condition equation.
 */
export type DecisionRuleInputEntries = {
  __typename?: 'DecisionRuleInputEntries';
  /**  Values that the input expression will be compared to. This field should be used when values of the corresponding fields are strings. For example, value of Product.Ref will be string or a value that can be parsed or converted into a string. */
  stringEntries?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  The input expression. At the moment, output actions are executed when DecisionRuleInputExpression evaluates to true. So, this should be designed such that it evaluates to true for the corresponding action to be performed.
 *  Note: A rule can have multiple input expressions chained together with logical operators. Currently the api uses the "AND" operator to chain multiple input expressions within a rule.
 */
export type DecisionRuleInputExpression = {
  __typename?: 'DecisionRuleInputExpression';
  /**  The `fieldName` for this input expression */
  fieldName?: Maybe<DecisionRuleInputFieldName>;
  /**  The comparison operator */
  operator?: Maybe<DecisionRuleComparisionOperator>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Enumerates the supported fields for use in input expressions.
 */
export enum DecisionRuleInputFieldName {
  /**  Enum value for category ref. To be used when decision rule input is based on the ref/s of the product's category. */
  CategoryRef = 'CATEGORY_REF',
  /**  Enum value for location ref. To be used when decision rule input is based on the ref/s of the location. */
  LocationRef = 'LOCATION_REF',
  /**  Enum value for location status. To be used when decision rule input is based on the status/es of the product's location. */
  LocationStatus = 'LOCATION_STATUS',
  /**  Search by attribute. Corresponding stringEntires should be of the format <<attributename>>:<<attributevalue>>. Where value of the attribute doesn't matter, <<attributevalue>> should be replaced by the asterix character `*`. */
  ProductAttribute = 'PRODUCT_ATTRIBUTE',
  /**  Enum value for product status. To be used when decision rule input is based on the status/es of the product. The type of the product i.e. STANDARD or VARIANT doesn't matter. */
  ProductStatus = 'PRODUCT_STATUS',
  /**  Enum value for standard product ref. To be used when decision rule input is based on the ref/s of the standard products. */
  StandardproductRef = 'STANDARDPRODUCT_REF',
  /**  Enum value for variant product ref. To be used when decision rule input is based on the ref/s of the variant products. */
  VariantproductRef = 'VARIANTPRODUCT_REF'
}

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Enumerates the supported operators for use in input expressions.
 */
export enum DecisionRuleComparisionOperator {
  /**  Determines whether the value of an expression is equal to any of the several values in a specified list. */
  In = 'IN',
  /**  Determines whether the value of an expression is not equal to any of the several values in a specified list. */
  NotIn = 'NOT_IN'
}

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Represents a single action to be performed when input conditions as configured via `DecisionRuleInput` are evaluated to true. A single DecisionRule can have multiple DecisionRuleOutput associated with it, each corresponding to a single action.
 */
export type DecisionRuleOutput = {
  __typename?: 'DecisionRuleOutput';
  /**  Id of the object */
  id: Scalars['ID'];
  /**  This represents the values that the output expression will be compared to. */
  outputEntries?: Maybe<DecisionRuleOutputEntries>;
  /**  The output expression. At the moment, we execute actions/outputs when DecisionRuleInputExpression evaluates to true. So, this should be designed such that this will always be executed when the input evaluates to true. Also note that even though we don't support logical expressions as outputs at the moment, the schema type is designed this way to be future proof. */
  outputExpression?: Maybe<DecisionRuleOutputExpression>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  This represents the values of the output expressions.
 */
export type DecisionRuleOutputEntries = {
  __typename?: 'DecisionRuleOutputEntries';
  /**  Values that the output expression will be compared to. To be used when the values are a single Int. For example, for the Output "Apply a quantity buffer of 10, this is the `10` part.” */
  intEntry?: Maybe<Scalars['Int']>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  The output expression. At the moment, we execute actions/outputs when DecisionRuleInputExpression evaluates to true. So, this should be designed such that this will always be executed when the input evaluates to true. Also note that at the moment, we don't support logical expressions as outputs. The schema naming is designed this way to be future proof.
 */
export type DecisionRuleOutputExpression = {
  __typename?: 'DecisionRuleOutputExpression';
  /**  The action to be executed */
  action?: Maybe<DecisionRuleOutputAction>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Supported actions for output in the decision table.
 */
export enum DecisionRuleOutputAction {
  /**  This action applies an exclusion buffer. This buffer is meant to exclude items by setting the available quantity to 0. Please note that exclusion buffers do not need a corresponding `DecisionRuleOutputEntries`. If an entry is provided, they will be ignored in the buffer calculation. */
  ApplyExclusionBuffer = 'APPLY_EXCLUSION_BUFFER',
  /**  This action applies a quantity buffer. It directly subtracts the corresponding buffer quantity from on-hand quantity. The resulting 'available' values are a direct result of the subtraction (on-hand - buffer) and, thus, can be negative when buffer > on-hand. This impacts the aggregate "available" values accordingly. For the calculation algorithm, please refer to the User Guide. */
  ApplyQuantityBufferAllowNegativeAvailable = 'APPLY_QUANTITY_BUFFER_ALLOW_NEGATIVE_AVAILABLE',
  /**  This action applies a quantity buffer by directly subtracting the corresponding buffer quantity from on-hand quantity. The resulting 'available' values are a direct result of the subtraction (on-hand - buffer) and, thus, can be negative when buffer > on-hand. In case when an 'available' quantity becomes negative, this action resets it to 0 so that negative available quantities do not eat into the aggregate available values. For the calculation algorithm, please refer to the User Guide. */
  ApplyQuantityBufferResetNegativeAvailableToZero = 'APPLY_QUANTITY_BUFFER_RESET_NEGATIVE_AVAILABLE_TO_ZERO'
}

/**  A list of results that matched against a FulfilmentChoice search query */
export type FulfilmentChoiceConnection = {
  __typename?: 'FulfilmentChoiceConnection';
  /**  A list of edges that links to FulfilmentChoice type node */
  edges?: Maybe<Array<Maybe<FulfilmentChoiceEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a FulfilmentChoice connection to the FulfilmentChoice type */
export type FulfilmentChoiceEdge = {
  __typename?: 'FulfilmentChoiceEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the FulfilmentChoice edge */
  node?: Maybe<FulfilmentChoice>;
};

/**
 *  `FulfilmentOption` provides a singular and accurate view of what products are available to purchase, order, pick-up or reserve. This information can be used
 *  to provide personalised fulfilment options to the customers directly from the product details pages, cart pages or checkout pages.
 */
export type FulfilmentOption = Node & Orchestrateable & {
  __typename?: 'FulfilmentOption';
  /**  A type for passing address. Can be used as an input in creating Fulfilment Plans. */
  address?: Maybe<FulfilmentOptionAddress>;
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**
   *  The reference identifier for a location. May be used in orchestration rules to drive custom business logic. For example, you can have a rule to return plans only from this
   *   location or a rule to return plans from all locations but excluding this one.
   */
  locationRef?: Maybe<Scalars['String']>;
  /**  Type of order. For example _click & collect (CC)_ or _home delivery (HD)_ */
  orderType?: Maybe<Scalars['String']>;
  /**  A list of `FulfilmentPlan` objects. */
  plans?: Maybe<FulfilmentPlanConnection>;
  /**  Products being queried for availability */
  products?: Maybe<Array<Maybe<FulfilmentOptionProduct>>>;
  /**  External reference. Recommended to be unique. */
  ref?: Maybe<Scalars['String']>;
  /**  ID of the `Retailer`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  retailerId: Scalars['Int'];
  /**  The current status of the `FulfilmentOption`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  A unique identifier for the clients to group related Fulfilment Plans. */
  trackingCode?: Maybe<Scalars['String']>;
  /**  Type of the `FulfilmentOption`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


/**
 *  `FulfilmentOption` provides a singular and accurate view of what products are available to purchase, order, pick-up or reserve. This information can be used
 *  to provide personalised fulfilment options to the customers directly from the product details pages, cart pages or checkout pages.
 */
export type FulfilmentOptionPlansArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  eta?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  retailerId?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  splitCount?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**  Address type to be used in `FulfilmentOption` */
export type FulfilmentOptionAddress = {
  __typename?: 'FulfilmentOptionAddress';
  /**  Address Line */
  addressLine1?: Maybe<Scalars['String']>;
  /**  Address Line */
  addressLine2?: Maybe<Scalars['String']>;
  /**  City or Town */
  city?: Maybe<Scalars['String']>;
  /**  Company Name */
  companyName?: Maybe<Scalars['String']>;
  /**  Country */
  country?: Maybe<Scalars['String']>;
  /**  Geographical coordinate that specifies the north–south position of a point on the Earth's surface */
  latitude?: Maybe<Scalars['Float']>;
  /**  Geographical coordinate that specifies the east–west position of a point on the Earth's surface */
  longitude?: Maybe<Scalars['Float']>;
  /**  Name */
  name?: Maybe<Scalars['String']>;
  /**  Postcode or Zipcode */
  postcode?: Maybe<Scalars['String']>;
  /**  State or County */
  state?: Maybe<Scalars['String']>;
};

/**  A list of results that matched against a FulfilmentPlan search query */
export type FulfilmentPlanConnection = {
  __typename?: 'FulfilmentPlanConnection';
  /**  A list of edges that links to FulfilmentPlan type node */
  edges?: Maybe<Array<Maybe<FulfilmentPlanEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a FulfilmentPlan connection to the FulfilmentPlan type */
export type FulfilmentPlanEdge = {
  __typename?: 'FulfilmentPlanEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the FulfilmentPlan edge */
  node?: Maybe<FulfilmentPlan>;
};

/**  Fulfilment Plans represents fulfilment strategy for requested products based on client specific logic that lives in their orchestration rules. */
export type FulfilmentPlan = Node & Orchestrateable & {
  __typename?: 'FulfilmentPlan';
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ETA of the `FulfilmentPlan`. Although this can be set explicitly, we recommend that this be determined and set in the workflow. */
  eta?: Maybe<Scalars['String']>;
  /**  Exceptions can be used to augment the existing object with any useful information in case of exceptions. */
  exceptions?: Maybe<Array<Maybe<FulfilmentPlanException>>>;
  /**  Represents the associated `FulfilmentOption` object */
  fulfilmentOption?: Maybe<FulfilmentOption>;
  /**  Represents fulfilments under this Fulfilment Plan */
  fulfilments?: Maybe<Array<Maybe<FulfilmentPlanFulfilment>>>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  External reference. Recommended to be unique. */
  ref?: Maybe<Scalars['String']>;
  /**  ID of the retailer */
  retailerId?: Maybe<Scalars['Int']>;
  /**  Order split limits */
  splitCount?: Maybe<Scalars['Int']>;
  /**  The current status of the `FulfilmentPlan`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  Type of the `FulfilmentPlan`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};

/**  Exception type can be used to augment objects with useful information in case of exceptions. */
export type FulfilmentPlanException = {
  __typename?: 'FulfilmentPlanException';
  /**  Attributes may contain useful information about the exception */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  The exception code */
  code?: Maybe<Scalars['String']>;
  /**  The english like description of the exception */
  message?: Maybe<Scalars['String']>;
};

/**  Represents fulfilment information for a `FulfilmentPlan` */
export type FulfilmentPlanFulfilment = {
  __typename?: 'FulfilmentPlanFulfilment';
  /**  ETA of the `FulfilmentPlan` as configured in the workflow */
  eta?: Maybe<Scalars['String']>;
  /**  Type of fulfilment. */
  fulfilmentType?: Maybe<Scalars['String']>;
  /**  List of products with their requested and available quantities */
  items?: Maybe<Array<Maybe<FulfilmentPlanFulfilmentItem>>>;
  /**  Reference to identify the fulfilment location for this fulfilment. */
  locationRef?: Maybe<Scalars['String']>;
};

/**  Represents products with their requested and available quantities */
export type FulfilmentPlanFulfilmentItem = {
  __typename?: 'FulfilmentPlanFulfilmentItem';
  /**  Quantity of the product available as per the plan */
  availableQuantity: Scalars['Int'];
  /**  A reference to identify the Catalogue */
  catalogueRef?: Maybe<Scalars['String']>;
  /**  External reference of the product. */
  productRef: Scalars['String'];
  /**  Requested quantity of the product. */
  requestedQuantity: Scalars['Int'];
};

/**  Type to represent products being queried for availability in a Fulfilment Option request */
export type FulfilmentOptionProduct = {
  __typename?: 'FulfilmentOptionProduct';
  /**  A reference to identify the Catalogue */
  catalogueRef?: Maybe<Scalars['String']>;
  /**  A reference to identify a Product */
  productRef: Scalars['String'];
  /**  The requested quantity for the product */
  requestedQuantity: Scalars['Int'];
};

/**  A list of results that matched against a FulfilmentOption search query */
export type FulfilmentOptionConnection = {
  __typename?: 'FulfilmentOptionConnection';
  /**  A list of edges that links to FulfilmentOption type node */
  edges?: Maybe<Array<Maybe<FulfilmentOptionEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a FulfilmentOption connection to the FulfilmentOption type */
export type FulfilmentOptionEdge = {
  __typename?: 'FulfilmentOptionEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the FulfilmentOption edge */
  node?: Maybe<FulfilmentOption>;
};

/**
 *  A `GroupProduct` is an implementation of Product that signifies a grouping of some sort, such as a bundle or kit. The `ref` field will be the unique identifier for this Product within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `GroupProduct` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type GroupProduct = Extendable & Node & Orchestrateable & Product & Referenceable & {
  __typename?: 'GroupProduct';
  /**  A list of attributes associated with this Product. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogue;
  /**  A connection to the associated Categories of this Product */
  categories?: Maybe<CategoryConnection>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: Scalars['ID'];
  /**  The name of the Product */
  name: Scalars['String'];
  /**  A list of Prices for this Product */
  prices?: Maybe<Array<Maybe<Price>>>;
  /**  The unique reference identifier for the Product */
  ref: Scalars['String'];
  /**  The current status of the `GroupProduct`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  A short description of the Product (max 255 chars) */
  summary?: Maybe<Scalars['String']>;
  /**  The tax information for this Product */
  tax?: Maybe<TaxType>;
  /**  Type of the `GroupProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


/**
 *  A `GroupProduct` is an implementation of Product that signifies a grouping of some sort, such as a bundle or kit. The `ref` field will be the unique identifier for this Product within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `GroupProduct` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type GroupProductCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<ProductCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**  A list of results that matched against a GroupProduct search query */
export type GroupProductConnection = {
  __typename?: 'GroupProductConnection';
  /**  A list of edges that links to GroupProduct type node */
  edges?: Maybe<Array<Maybe<GroupProductEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a GroupProduct connection to the GroupProduct type */
export type GroupProductEdge = {
  __typename?: 'GroupProductEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the GroupProduct edge */
  node?: Maybe<GroupProduct>;
};

/**
 *  The `InventoryCatalogue` is a structure that supports a grouping of inventory position data. The `ref` field will be the unique identifier for this catalogue. <br /><br />
 *  The `InventoryCatalogue` is an orchestrateable entity, and the parent type for all `InventoryPosition` and `InventoryQuantity` orchestration events. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type InventoryCatalogue = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'InventoryCatalogue';
  /**  A list of attributes associated with this Inventory Catalogue. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  A short description of the Inventory Catalogue */
  description?: Maybe<Scalars['String']>;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: Scalars['ID'];
  /**  A connection to associated Inventory Positions */
  inventoryPositions?: Maybe<InventoryPositionConnection>;
  /**  The name of the Inventory Catalogue */
  name: Scalars['String'];
  /**  The unique reference identifier for the Inventory Catalogue */
  ref: Scalars['String'];
  /**  A list of Retailer references associated with this Inventory Catalogue */
  retailerRefs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**  The current status of the `InventoryCatalogue`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  Type of the `InventoryCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


/**
 *  The `InventoryCatalogue` is a structure that supports a grouping of inventory position data. The `ref` field will be the unique identifier for this catalogue. <br /><br />
 *  The `InventoryCatalogue` is an orchestrateable entity, and the parent type for all `InventoryPosition` and `InventoryQuantity` orchestration events. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type InventoryCatalogueInventoryPositionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<InventoryCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locationRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onHand?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  productRef?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**  The `InventoryCatalogueKey` input is the parameter for identifying a specific Inventory Catalogue. */
export type InventoryCatalogueKey = {
  /**
   *  Inventory Catalogue reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
};

/**  A list of results that matched against a InventoryPosition search query */
export type InventoryPositionConnection = {
  __typename?: 'InventoryPositionConnection';
  /**  A list of edges that links to InventoryPosition type node */
  edges?: Maybe<Array<Maybe<InventoryPositionEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a InventoryPosition connection to the InventoryPosition type */
export type InventoryPositionEdge = {
  __typename?: 'InventoryPositionEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the InventoryPosition edge */
  node?: Maybe<InventoryPosition>;
};

/**
 *  An `InventoryPosition` provides an "on hand" calculation of available inventory, based on it's associated Inventory Quantities and Location. The `ref` field will be the unique identifier for this position within the specified Inventory Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `InventoryPosition` is an orchestrateable entity. Events for these should specify a parent entity of Inventory Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type InventoryPosition = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'InventoryPosition';
  /**  A list of attributes associated with this Inventory Position. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  The Inventory Catalogue in which this Position is managed */
  catalogue?: Maybe<InventoryCatalogue>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: Scalars['ID'];
  /**  A reference identifying the Location where this inventory exists. This is a loosely coupled association. */
  locationRef?: Maybe<Scalars['String']>;
  /**  The calculated on hand quantity based on the associated quantities, and rules in the orchestration workflow */
  onHand?: Maybe<Scalars['Int']>;
  /**  A reference identifying a Product. The referenced product may or may not exist within one or more Product Catalogues. This is a loosely coupled association, since Product and Inventory are separate domains. */
  productRef: Scalars['String'];
  /**  A connection to the Inventory Quantities associated with this Position */
  quantities?: Maybe<InventoryQuantityConnection>;
  /**  The unique reference identifier for the Inventory Position */
  ref: Scalars['String'];
  /**  The current status of the `InventoryPosition`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  Type of the `InventoryPosition`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


/**
 *  An `InventoryPosition` provides an "on hand" calculation of available inventory, based on it's associated Inventory Quantities and Location. The `ref` field will be the unique identifier for this position within the specified Inventory Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `InventoryPosition` is an orchestrateable entity. Events for these should specify a parent entity of Inventory Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type InventoryPositionQuantitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<InventoryCatalogueKey>;
  condition?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdOn?: InputMaybe<DateRange>;
  expectedOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  storageAreaRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**  A list of results that matched against a InventoryQuantity search query */
export type InventoryQuantityConnection = {
  __typename?: 'InventoryQuantityConnection';
  /**  A list of edges that links to InventoryQuantity type node */
  edges?: Maybe<Array<Maybe<InventoryQuantityEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a InventoryQuantity connection to the InventoryQuantity type */
export type InventoryQuantityEdge = {
  __typename?: 'InventoryQuantityEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the InventoryQuantity edge */
  node?: Maybe<InventoryQuantity>;
};

/**
 *  An `InventoryQuantity` is a specific count of a certain quantity type, condition, and storage area. The `ref` field will be the unique identifier for this quantity within the specified Inventory Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `InventoryQuantity` is an orchestrateable entity. Events for these should specify a parent entity of Inventory Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type InventoryQuantity = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'InventoryQuantity';
  /**  A list of attributes associated with this Inventory Quantity. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  The Inventory Catalogue in which this Quantity is managed */
  catalogue?: Maybe<InventoryCatalogue>;
  /**  The condition of the Inventory Quantity value. The platform does not enforce any values here. Examples could include `NEW`, `USED`, or `DAMAGED` */
  condition?: Maybe<Scalars['String']>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  The date and time the quantity is expected to arrive */
  expectedOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: Scalars['ID'];
  /**  The associated parent Inventory Position of which this Quantity applies */
  position?: Maybe<InventoryPosition>;
  /**  The actual amount of this specific Quantity record */
  quantity?: Maybe<Scalars['Int']>;
  /**  The unique reference identifier for the Inventory Quantity */
  ref: Scalars['String'];
  /**  The current status of the `InventoryQuantity`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  A reference to the Storage Area where this inventory is kept */
  storageAreaRef?: Maybe<Scalars['String']>;
  /**
   *  Type of the `InventoryQuantity`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  The type field can be used to differentiate between Inventory Quantity workflows. Example types include `LAST_ON_HAND`, `RESERVED`, `EXPECTED`, and `ADJUSTMENT`.
   */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};

/**  A list of results that matched against a InventoryCatalogue search query */
export type InventoryCatalogueConnection = {
  __typename?: 'InventoryCatalogueConnection';
  /**  A list of edges that links to InventoryCatalogue type node */
  edges?: Maybe<Array<Maybe<InventoryCatalogueEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a InventoryCatalogue connection to the InventoryCatalogue type */
export type InventoryCatalogueEdge = {
  __typename?: 'InventoryCatalogueEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the InventoryCatalogue edge */
  node?: Maybe<InventoryCatalogue>;
};

/**  Output type for aggregate inventory positions */
export type InventoryPositionAggregateOutput = {
  __typename?: 'InventoryPositionAggregateOutput';
  /**  the count of data entries */
  count?: Maybe<Scalars['Int']>;
  /**  the sum of inventory entries */
  sum?: Maybe<Scalars['Int']>;
};

/**  The `InventoryPositionKey` input is the parameter for identifying a specific Inventory Position. */
export type InventoryPositionKey = {
  /**  The Inventory Catalogue in which this Position resides */
  catalogue: InventoryCatalogueKey;
  /**
   *  Inventory Position reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
};

/**  Output type for inventory position aggregate */
export type InventoryQuantityAggregateOutput = {
  __typename?: 'InventoryQuantityAggregateOutput';
  /**  the count of inventory position entries */
  count?: Maybe<Scalars['Int']>;
  /**  the sum of inventory position entries */
  sum?: Maybe<Scalars['Int']>;
};

/**  Represents a `User` */
export type User = Node & {
  __typename?: 'User';
  /**  Active apps for the Fluent Account to which the User belongs */
  apps?: Maybe<Array<Maybe<App>>>;
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Country */
  country?: Maybe<Scalars['String']>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Department */
  department?: Maybe<Scalars['String']>;
  /**  User's first name */
  firstName?: Maybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  User language (leave null to allow users to self-select their language preference) */
  language?: Maybe<SettingValueType>;
  /**  User's last name */
  lastName?: Maybe<Scalars['String']>;
  /**  User's primary email */
  primaryEmail?: Maybe<Scalars['String']>;
  /**  User's location context */
  primaryLocation?: Maybe<Location>;
  /**  User's primary phone number */
  primaryPhone?: Maybe<Scalars['String']>;
  /**  User's retailer context */
  primaryRetailer?: Maybe<Retailer>;
  /**  Determines if the user has opted to receive promotions */
  promotionOptIn?: Maybe<Scalars['Boolean']>;
  /**  External reference of the object. Recommended to be unique. */
  ref: Scalars['String'];
  /**  Roles assigned to the user */
  roles?: Maybe<Array<Maybe<UserRole>>>;
  /**  Status */
  status?: Maybe<Scalars['String']>;
  /**  Timezone */
  timezone?: Maybe<Scalars['String']>;
  /**  The user's title. For example _Mr._, _Miss_, _Dr._, _Ms._ etc */
  title?: Maybe<Scalars['String']>;
  /**  Type of the user */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  Unique name for the user used for identification and logging purposes. */
  username: Scalars['String'];
};

/**  Represents packaged set of functionality within the Fluent Platform */
export type App = {
  __typename?: 'App';
  /**  The `App` creation time */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  UUID */
  id: Scalars['ID'];
  /**  The name of the `App` */
  name: Scalars['String'];
  /**  The `App` type enum. Accepted Values: REFERENCE, CUSTOM */
  type: AppType;
  /**  The `App` modification time */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  Specifies the version of the `App` */
  version: AppVersion;
};

/**  Enum representing the `App` type */
export enum AppType {
  /**  Represents a custom `App` created by clients. */
  Custom = 'CUSTOM',
  /**  Represents a reference `App` created by Fluent Commerce. These are immutable `App`'s which can be deployed by clients */
  Reference = 'REFERENCE'
}

/**  Represents a version of an `App`. Based on semver.org standard without the support for labels. */
export type AppVersion = {
  __typename?: 'AppVersion';
  /**  Major version */
  major: Scalars['Int'];
  /**  Minor version */
  minor: Scalars['Int'];
  /**  Patch version */
  patch: Scalars['Int'];
};

/**
 *  An object to represent a user's role with the contexts.
 *  <br/>Note: A role is always assigned to a user with a certain context.
 */
export type UserRole = {
  __typename?: 'UserRole';
  /**  A list of `RoleContext` objects. It represents the boundaries of the user's role validity. */
  contexts: Array<Maybe<RoleContext>>;
  /**  Represents the `Role` */
  role: Role;
};

/**
 *  A type to define a role and the boundaries within which that role is valid. For instance, a store associate can only be authorised to view particulars of their own store
 *  whereas a store manager can be authorised to view particulars of multiple stores.
 */
export type RoleContext = {
  __typename?: 'RoleContext';
  /**  Represents the identity of the context object. */
  contextId: Scalars['ID'];
  /**  Represents the type of context. For more information on contexts and how they relate to user and roles, please visit <a href="https://lingo.fluentretail.com/display/LIN/Flex+Academy+Users" target="_blank">User's section on Lingo</a>. */
  contextType: Scalars['String'];
};

/**
 *  Represents a `Role`. A `Role` is a singular entity that represents one or more `Permissions`. It could correlate for a job type for example, Fulfilment Manager. Roles make it
 *  easier for clients to manage access to various functions within the system.
 */
export type Role = {
  __typename?: 'Role';
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Name of the role. Must be unique. */
  name: Scalars['String'];
  /**  A list of permissions within the role */
  permissions?: Maybe<Array<Maybe<Permission>>>;
};

/**  A `permission` represents a single access right. It implies the authorization to carry out a certain function within the system. */
export type Permission = {
  __typename?: 'Permission';
  /**  Name of the permission. Must be unique. */
  name: Scalars['String'];
};

/**  A list of results that matched against a OpeningSchedule search query */
export type OpeningScheduleConnection = {
  __typename?: 'OpeningScheduleConnection';
  /**  A list of edges that links to OpeningSchedule type node */
  edges?: Maybe<Array<Maybe<OpeningScheduleEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a OpeningSchedule connection to the OpeningSchedule type */
export type OpeningScheduleEdge = {
  __typename?: 'OpeningScheduleEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the OpeningSchedule edge */
  node?: Maybe<OpeningSchedule>;
};

/**  A list of results that matched against a PaymentServiceProvider search query */
export type PaymentServiceProviderConnection = {
  __typename?: 'PaymentServiceProviderConnection';
  /**  A list of edges that links to PaymentServiceProvider type node */
  edges?: Maybe<Array<Maybe<PaymentServiceProviderEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a PaymentServiceProvider connection to the PaymentServiceProvider type */
export type PaymentServiceProviderEdge = {
  __typename?: 'PaymentServiceProviderEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the PaymentServiceProvider edge */
  node?: Maybe<PaymentServiceProvider>;
};

/**  A list of results that matched against a Permission search query */
export type PermissionConnection = {
  __typename?: 'PermissionConnection';
  /**  A list of edges that links to Permission type node */
  edges?: Maybe<Array<Maybe<PermissionEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Permission connection to the Permission type */
export type PermissionEdge = {
  __typename?: 'PermissionEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Permission edge */
  node?: Maybe<Permission>;
};

/**  A list of results that matched against a Price search query */
export type PriceConnection = {
  __typename?: 'PriceConnection';
  /**  A list of edges that links to Price type node */
  edges?: Maybe<Array<Maybe<PriceEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Price connection to the Price type */
export type PriceEdge = {
  __typename?: 'PriceEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Price edge */
  node?: Maybe<Price>;
};

/**  A list of results that matched against a ProductCatalogue search query */
export type ProductCatalogueConnection = {
  __typename?: 'ProductCatalogueConnection';
  /**  A list of edges that links to ProductCatalogue type node */
  edges?: Maybe<Array<Maybe<ProductCatalogueEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a ProductCatalogue connection to the ProductCatalogue type */
export type ProductCatalogueEdge = {
  __typename?: 'ProductCatalogueEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the ProductCatalogue edge */
  node?: Maybe<ProductCatalogue>;
};

/**  Input type to uniquely identify a `ReturnOrder` object. We use all the fields present in the request to look for this object. */
export type ReturnOrderKey = {
  /**  The client's reference identifier for the object */
  ref: Scalars['String'];
  /**  The associated retailer for this return order */
  retailer: RetailerId;
};

export type ReturnFulfilment = Node & Referenceable & {
  __typename?: 'ReturnFulfilment';
  /**  List of attributes associated with the return fulfilment */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Date and time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  The destination of the return order items. */
  destinationLocation?: Maybe<LocationLink>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  The lodged location in cases where the return order was directly returned to a store or DC. */
  lodgedLocation?: Maybe<LocationLink>;
  /**  The pickup address in the cases of return orders that are being picked up by a carrier. */
  pickupAddress?: Maybe<StreetAddress>;
  /**  External reference for `Return Fulfilment`. Must be unique. */
  ref: Scalars['String'];
  /**  List of return fulfilment item associated with the return fulfilment */
  returnFulfilmentItems?: Maybe<ReturnFulfilmentItemConnection>;
  /**  Return order associated with the return fulfilment */
  returnOrder?: Maybe<ReturnOrder>;
  /**  Status of the `Return Fulfilment` */
  status: Scalars['String'];
  /**  Type of the return fulfilment */
  type: Scalars['String'];
  /**  Date and time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  Workflow associated with the return fulfilment */
  workflow?: Maybe<WorkflowLink>;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef?: Maybe<Scalars['String']>;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion?: Maybe<Scalars['Int']>;
};


export type ReturnFulfilmentReturnFulfilmentItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<ProductLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
};

/**  A list of results that matched against a ReturnFulfilmentItem search query */
export type ReturnFulfilmentItemConnection = {
  __typename?: 'ReturnFulfilmentItemConnection';
  /**  A list of edges that links to ReturnFulfilmentItem type node */
  edges?: Maybe<Array<Maybe<ReturnFulfilmentItemEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a ReturnFulfilmentItem connection to the ReturnFulfilmentItem type */
export type ReturnFulfilmentItemEdge = {
  __typename?: 'ReturnFulfilmentItemEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the ReturnFulfilmentItem edge */
  node?: Maybe<ReturnFulfilmentItem>;
};

export type ReturnFulfilmentItem = Node & Referenceable & {
  __typename?: 'ReturnFulfilmentItem';
  /**  List of attributes */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Date and time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /** Product associated with the fulfilment item */
  product?: Maybe<ProductLink>;
  /**  External reference for `Return Order`. Must be unique. */
  ref: Scalars['String'];
  /**  Fulfilment this item associated with */
  returnOrderFulfilment?: Maybe<ReturnFulfilment>;
  /** Return order item associated with the fulfilment item */
  returnOrderItem?: Maybe<ReturnOrderItem>;
  /**  Quantity of return fulfilment item */
  unitQuantity?: Maybe<QuantityType>;
  /**  Date and time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

export type ReturnOrderItem = Node & Referenceable & {
  __typename?: 'ReturnOrderItem';
  /**  List of attributes associated with the return order */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Date and time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Item TaxAmount */
  itemAmount?: Maybe<AmountType>;
  /**  Item Amount */
  itemTaxAmount?: Maybe<AmountType>;
  /**  Associated order item of the return order */
  orderItem?: Maybe<OrderItemLink>;
  /**  Associated product with the return order */
  product?: Maybe<ProductLink>;
  /**  External reference for `Return Order`. Must be unique. */
  ref: Scalars['String'];
  /**  The condition in which the return item was received. */
  returnCondition?: Maybe<SettingValueType>;
  /**  An optional comment. Required if the condition code required further information such as 'Other'. */
  returnConditionComment?: Maybe<Scalars['String']>;
  /**  The actual payment action taken for this return item. */
  returnDispositionAction?: Maybe<SettingValueType>;
  /**  Return order associated with the order item */
  returnOrder?: Maybe<ReturnOrder>;
  /**  The actual payment action taken for this return item. */
  returnPaymentAction?: Maybe<SettingValueType>;
  /**  The reason for returning this return order item. */
  returnReason?: Maybe<SettingValueType>;
  /**  An optional comment. Required if the reason code required further information such as 'Other'. */
  returnReasonComment?: Maybe<Scalars['String']>;
  /**  Status of the return order */
  status: Scalars['String'];
  /**  Unit Amount */
  unitAmount?: Maybe<AmountType>;
  /**  Unit Quantity */
  unitQuantity?: Maybe<QuantityType>;
  /**  Unit TaxType */
  unitTaxType?: Maybe<TaxType>;
  /**  Date and time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

export type ReturnOrder = Node & Referenceable & {
  __typename?: 'ReturnOrder';
  /**  List of attributes. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Date and time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  The associated credit memo for this return order. */
  creditMemo?: Maybe<CreditMemoLink>;
  /**  Reference to the currency type. Generally, the standard ISO-4217 is used. */
  currency?: Maybe<CurrencyLink>;
  /**  The associated customer for this return order. */
  customer?: Maybe<CustomerLink>;
  /**  The default Tax Type for this return order. Individual return order items can override. */
  defaultTaxType?: Maybe<TaxType>;
  /**  The destination of the return order items. */
  destinationLocation?: Maybe<LocationLink>;
  /**  The associated exchange order managed the exchange item. */
  exchangeOrder?: Maybe<OrderLink>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  The lodged location in cases where the return order was directly returned to a store or DC. */
  lodgedLocation?: Maybe<LocationLink>;
  /**  The associated order for this return order. */
  order?: Maybe<OrderLink>;
  /**  The pickup address in the cases of return orders that are being picked up by a carrier. */
  pickupAddress?: Maybe<StreetAddress>;
  /**  External reference for `ReturnOrder`. Must be unique. */
  ref: Scalars['String'];
  /**  The associated retailer for this return order */
  retailer?: Maybe<RetailerLink>;
  /**  The authorised disposition for this return order. This can be different to the return disposition action which reflects the actual action once an item has been inspected. */
  returnAuthorisationDisposition?: Maybe<SettingValueType>;
  /**  The generated key representing an authorised return order which the customer can use to progress through the return order process. */
  returnAuthorisationKey?: Maybe<Scalars['String']>;
  /**  The time at which the return authorisation expires. */
  returnAuthorisationKeyExpiry?: Maybe<Scalars['DateTime']>;
  /**  The list of associated return fulfilments. */
  returnOrderFulfilments?: Maybe<ReturnFulfilmentConnection>;
  /**  The list of associated return order items. */
  returnOrderItems?: Maybe<ReturnOrderItemConnection>;
  /**  A list of return verifications for this return order. */
  returnVerifications?: Maybe<ReturnVerificationConnection>;
  /**  Status of the `Return Order` */
  status: Scalars['String'];
  /**  The total amount of this return order excluding tax. */
  subTotalAmount?: Maybe<AmountType>;
  /**  The total amount of this return order including tax */
  totalAmount?: Maybe<AmountType>;
  /**  The total amount of tax for this return order. */
  totalTax?: Maybe<AmountType>;
  /**  Type of the return order */
  type: Scalars['String'];
  /**  Date and time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  Workflow version of the return order */
  workflow?: Maybe<WorkflowLink>;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef?: Maybe<Scalars['String']>;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion?: Maybe<Scalars['Int']>;
};


export type ReturnOrderReturnOrderFulfilmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  destinationLocation?: InputMaybe<LocationLinkInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  lodgedLocation?: InputMaybe<LocationLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflow?: InputMaybe<WorkflowLinkInput>;
  workflowRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  workflowVersion?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ReturnOrderReturnOrderItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderItem?: InputMaybe<OrderItemLinkInput>;
  product?: InputMaybe<ProductLinkInput>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  returnConditionComment?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  returnReasonComment?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
};


export type ReturnOrderReturnVerificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  verificationDetails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CreditMemoLink = {
  __typename?: 'CreditMemoLink';
  ref?: Maybe<Scalars['String']>;
};

/**  A list of results that matched against a ReturnFulfilment search query */
export type ReturnFulfilmentConnection = {
  __typename?: 'ReturnFulfilmentConnection';
  /**  A list of edges that links to ReturnFulfilment type node */
  edges?: Maybe<Array<Maybe<ReturnFulfilmentEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a ReturnFulfilment connection to the ReturnFulfilment type */
export type ReturnFulfilmentEdge = {
  __typename?: 'ReturnFulfilmentEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the ReturnFulfilment edge */
  node?: Maybe<ReturnFulfilment>;
};

/**  A list of results that matched against a ReturnOrderItem search query */
export type ReturnOrderItemConnection = {
  __typename?: 'ReturnOrderItemConnection';
  /**  A list of edges that links to ReturnOrderItem type node */
  edges?: Maybe<Array<Maybe<ReturnOrderItemEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a ReturnOrderItem connection to the ReturnOrderItem type */
export type ReturnOrderItemEdge = {
  __typename?: 'ReturnOrderItemEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the ReturnOrderItem edge */
  node?: Maybe<ReturnOrderItem>;
};

/**  A list of results that matched against a ReturnVerification search query */
export type ReturnVerificationConnection = {
  __typename?: 'ReturnVerificationConnection';
  /**  A list of edges that links to ReturnVerification type node */
  edges?: Maybe<Array<Maybe<ReturnVerificationEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a ReturnVerification connection to the ReturnVerification type */
export type ReturnVerificationEdge = {
  __typename?: 'ReturnVerificationEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the ReturnVerification edge */
  node?: Maybe<ReturnVerification>;
};

export type ReturnVerification = Node & Referenceable & {
  __typename?: 'ReturnVerification';
  /**  Date and time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  External reference for `Return Order`. Must be unique. */
  ref: Scalars['String'];
  /** return order */
  returnOrder?: Maybe<ReturnOrder>;
  type: Scalars['String'];
  /**  Date and time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /** verification details */
  verificationDetails?: Maybe<Scalars['String']>;
};

/**  Input type to uniquely identify a `ReturnFulfilment` object. We use all the fields present in the request to look for this object. */
export type ReturnFulfilmentKey = {
  /**  The client's reference identifier for the object */
  ref: Scalars['String'];
  /**  Return order associated with the return fulfilment */
  returnOrder: ReturnOrderKey;
};

export type CreditMemoLinkInput = {
  /**  Max character limit: 100. */
  ref: Scalars['String'];
};

/**  A list of results that matched against a ReturnOrder search query */
export type ReturnOrderConnection = {
  __typename?: 'ReturnOrderConnection';
  /**  A list of edges that links to ReturnOrder type node */
  edges?: Maybe<Array<Maybe<ReturnOrderEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a ReturnOrder connection to the ReturnOrder type */
export type ReturnOrderEdge = {
  __typename?: 'ReturnOrderEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the ReturnOrder edge */
  node?: Maybe<ReturnOrder>;
};

/**  A list of results that matched against a Role search query */
export type RoleConnection = {
  __typename?: 'RoleConnection';
  /**  A list of edges that links to Role type node */
  edges?: Maybe<Array<Maybe<RoleEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Role connection to the Role type */
export type RoleEdge = {
  __typename?: 'RoleEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Role edge */
  node?: Maybe<Role>;
};

/**  Information required to identify a geographical location. For instance Sydney has latitude, longitude values of _-33.868820_ and _151.209296_ respectively. */
export type GeoCoordinateInput = {
  /**  Geographical coordinate that specifies the north–south position of a point on the Earth's surface */
  latitude: Scalars['Float'];
  /**  Geographical coordinate that specifies the east–west position of a point on the Earth's surface */
  longitude: Scalars['Float'];
};

/**  Type to encapsulate a product and its requested quantity */
export type ProductQuantityInput = {
  /**  Reference identifier for the `Product` */
  productRef: Scalars['String'];
  /**  Requested quantity of the associated `Product` */
  quantity: Scalars['Int'];
};

/**  The `VirtualCatalogueKey` input is the parameter for identifying a specific Virtual Catalogue */
export type VirtualCatalogueKey = {
  /**
   *  Virtual Catalogue reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
};

/**  Input type used to identify a specific Virtual Position */
export type VirtualPositionInput = {
  /**  Represents the current status of the Virtual Position entity */
  status?: InputMaybe<Scalars['String']>;
};

/**  A list of results that matched against a VirtualInventory search query */
export type VirtualInventoryConnection = {
  __typename?: 'VirtualInventoryConnection';
  /**  A list of edges that links to VirtualInventory type node */
  edges?: Maybe<Array<Maybe<VirtualInventoryEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a VirtualInventory connection to the VirtualInventory type */
export type VirtualInventoryEdge = {
  __typename?: 'VirtualInventoryEdge';
  /**  A cursor for use in pagination (not yet implemented) */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the VirtualInventory edge */
  node?: Maybe<VirtualInventory>;
};

/**  Response type for the `searchVirtualInventory` query. The response may be empty if no stock is found for the request products in any of the configured locations. */
export type VirtualInventory = {
  __typename?: 'VirtualInventory';
  /**  `Location` of the stock */
  location?: Maybe<Location>;
  /**  An array of `VirtualPositions`. This will contain all necessary information pertaining to products and corresponding available-to-sell stock. */
  virtualPositions?: Maybe<Array<Maybe<VirtualPosition>>>;
};

export type VirtualPosition = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'VirtualPosition';
  /**  List of Attribute containing meta data information for an entity */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Catalogue */
  catalogue?: Maybe<VirtualCatalogue>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Group - reference to Location or Category */
  groupRef?: Maybe<Scalars['String']>;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: Scalars['ID'];
  /**  Product reference */
  productRef?: Maybe<Scalars['String']>;
  /**  On hand quantity */
  quantity?: Maybe<Scalars['Int']>;
  /**  The reference identifier used to identify an entity */
  ref: Scalars['String'];
  /**  The current status of the `VirtualPosition`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  Type of the `VirtualPosition`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};

export type VirtualCatalogue = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'VirtualCatalogue';
  /**  List of Attribute containing meta data information for an entity */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Control group Ref */
  controlGroupRef?: Maybe<Scalars['String']>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Description */
  description?: Maybe<Scalars['String']>;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: Scalars['ID'];
  /**  Inventory Catalogue used for this virtual catalogue */
  inventoryCatalogueRef?: Maybe<Scalars['String']>;
  /**  Name of the inventory catalogue */
  name: Scalars['String'];
  /**  Networks used for this catalogue */
  networkIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**  Product Catalogue used for this virtual catalogue */
  productCatalogueRef?: Maybe<Scalars['String']>;
  /**  The reference identifier used to identify an entity */
  ref: Scalars['String'];
  /**  Retailer refs */
  retailerRefs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**  The current status of the `VirtualCatalogue`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  Type of the `VirtualCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  Virtual positions */
  virtualPositions?: Maybe<VirtualPositionConnection>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


export type VirtualCatalogueVirtualPositionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<VirtualCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  groupRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  productRef?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**  A list of results that matched against a VirtualPosition search query */
export type VirtualPositionConnection = {
  __typename?: 'VirtualPositionConnection';
  /**  A list of edges that links to VirtualPosition type node */
  edges?: Maybe<Array<Maybe<VirtualPositionEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a VirtualPosition connection to the VirtualPosition type */
export type VirtualPositionEdge = {
  __typename?: 'VirtualPositionEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the VirtualPosition edge */
  node?: Maybe<VirtualPosition>;
};

/**
 *  Represents configuration settings. Settings are quite versatile. These can be used in feature toggles or rules to accomplish insane variety of functions.
 *  <br/><br/>**USAGE**<br/>
 *  Use a unique combination of `context` and `contextId` to create settings for various contexts.
 *  Not using a unique combination of those two will result in a _ConstraintViolationException_.
 *  <br/><br/>**NOTE**<br/>
 *  If you are an existing client, you may already be using our <a href="https://lingo.fluentretail.com/display/LIN/Configuration+Settings" target="_blank">Configuration Settings</a> feature.
 *  You can still use this API to create new settings and update existing ones. However, we advise you to be very cautious in doing so as _V4_ APIs may behave unexpectedly
 *  if you modify your existing settings. If you have questions, please contact support.
 */
export type Setting = {
  __typename?: 'Setting';
  /**  The context of the setting. Supported values are ACCOUNT, RETAILER, AGENT or CUSTOMER */
  context: Scalars['String'];
  /**  `ID` of the context. For instance, use a retailer's ID when using _RETAILER_ context. */
  contextId: Scalars['Int'];
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Value of the setting. Use this if the value is a JSON. */
  lobValue?: Maybe<Scalars['Json']>;
  /**  Name of the setting. */
  name?: Maybe<Scalars['String']>;
  /**  Value of the setting. Use this if the value is NOT a JSON. */
  value?: Maybe<Scalars['String']>;
  /**  Data type of the setting's value. Supported types are _LOB_, _STRING_, _INTEGER_, _BOOLEAN_ and _JSON_. */
  valueType?: Maybe<Scalars['String']>;
};

/**  A list of results that matched against a Setting search query */
export type SettingConnection = {
  __typename?: 'SettingConnection';
  /**  A list of edges that links to Setting type node */
  edges?: Maybe<Array<Maybe<SettingEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Setting connection to the Setting type */
export type SettingEdge = {
  __typename?: 'SettingEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Setting edge */
  node?: Maybe<Setting>;
};

/**
 *  A `StandardProduct` is a basic implementation of Product. The `ref` field will be the unique identifier for this Product within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `StandardProduct` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type StandardProduct = Extendable & Node & Orchestrateable & Product & Referenceable & {
  __typename?: 'StandardProduct';
  /**  A list of attributes associated with this Product. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogue;
  /**  A connection to the associated Categories of this Product */
  categories?: Maybe<CategoryConnection>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  The Global Trade Item Number (GTIN) for this Product */
  gtin: Scalars['String'];
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: Scalars['ID'];
  /**  The name of the Product */
  name: Scalars['String'];
  /**  A list of Prices for this Product */
  prices?: Maybe<Array<Maybe<Price>>>;
  /**  The unique reference identifier for the Product */
  ref: Scalars['String'];
  /**  The current status of the `StandardProduct`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  A short description of the Product (max 255 chars) */
  summary?: Maybe<Scalars['String']>;
  /**  The tax information for this Product */
  tax?: Maybe<TaxType>;
  /**  Type of the `StandardProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  A connection to the associated Variant Products for this Product. This is useful if you use the Standard Product as a base record for all Variants, which helps ensure a consistent relationship between them */
  variants?: Maybe<VariantProductConnection>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


/**
 *  A `StandardProduct` is a basic implementation of Product. The `ref` field will be the unique identifier for this Product within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `StandardProduct` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type StandardProductCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<ProductCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**
 *  A `StandardProduct` is a basic implementation of Product. The `ref` field will be the unique identifier for this Product within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `StandardProduct` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type StandardProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<ProductCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  gtin?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**  A list of results that matched against a VariantProduct search query */
export type VariantProductConnection = {
  __typename?: 'VariantProductConnection';
  /**  A list of edges that links to VariantProduct type node */
  edges?: Maybe<Array<Maybe<VariantProductEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a VariantProduct connection to the VariantProduct type */
export type VariantProductEdge = {
  __typename?: 'VariantProductEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the VariantProduct edge */
  node?: Maybe<VariantProduct>;
};

/**
 *  A `VariantProduct` is a variant based implementation of Product. A variation could be based on one or more attributes such as color, size, volume, etc. The `ref` field will be the unique identifier for this Product within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `VariantProduct` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type VariantProduct = Extendable & Node & Orchestrateable & Product & Referenceable & {
  __typename?: 'VariantProduct';
  /**  A list of attributes associated with this Product. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogue;
  /**  A connection to the associated Categories of this Product */
  categories?: Maybe<CategoryConnection>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  The Global Trade Item Number (GTIN) for this Product */
  gtin: Scalars['String'];
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: Scalars['ID'];
  /**  The name of the Product */
  name: Scalars['String'];
  /**  A list of Prices for this Product */
  prices?: Maybe<Array<Maybe<Price>>>;
  /**  The associated Standard Product for this Variant Product */
  product: StandardProduct;
  /**  The unique reference identifier for the Product */
  ref: Scalars['String'];
  /**  The current status of the `VariantProduct`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  A short description of the Product (max 255 chars) */
  summary?: Maybe<Scalars['String']>;
  /**  The tax information for this Product */
  tax?: Maybe<TaxType>;
  /**  Type of the `VariantProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


/**
 *  A `VariantProduct` is a variant based implementation of Product. A variation could be based on one or more attributes such as color, size, volume, etc. The `ref` field will be the unique identifier for this Product within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `VariantProduct` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type VariantProductCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  catalogue?: InputMaybe<ProductCatalogueKey>;
  createdOn?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Array<Scalars['String']>>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};

/**  A list of results that matched against a StandardProduct search query */
export type StandardProductConnection = {
  __typename?: 'StandardProductConnection';
  /**  A list of edges that links to StandardProduct type node */
  edges?: Maybe<Array<Maybe<StandardProductEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a StandardProduct connection to the StandardProduct type */
export type StandardProductEdge = {
  __typename?: 'StandardProductEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the StandardProduct edge */
  node?: Maybe<StandardProduct>;
};

/**  Store location information */
export type StoreAddress = Address & {
  __typename?: 'StoreAddress';
  /**  City */
  city?: Maybe<Scalars['String']>;
  /**  Company name */
  companyName?: Maybe<Scalars['String']>;
  /**  Country */
  country?: Maybe<Scalars['String']>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Directions to store location (may be used for landmarks) */
  directions?: Maybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Latitude */
  latitude?: Maybe<Scalars['Float']>;
  /**  Location */
  location?: Maybe<Location>;
  /**  Longitude */
  longitude?: Maybe<Scalars['Float']>;
  /**  Name */
  name?: Maybe<Scalars['String']>;
  /**  Postcode */
  postcode?: Maybe<Scalars['String']>;
  /**  Location reference */
  ref?: Maybe<Scalars['String']>;
  /**  Region */
  region?: Maybe<Scalars['String']>;
  /**  State */
  state?: Maybe<Scalars['String']>;
  /**  Street */
  street?: Maybe<Scalars['String']>;
  /**  Timezone */
  timeZone?: Maybe<Scalars['String']>;
  /**  Type of Address, to support legacy address, the value can be AGENT and ORDER */
  type?: Maybe<Scalars['String']>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
};

/**  A list of results that matched against a StoreAddress search query */
export type StoreAddressConnection = {
  __typename?: 'StoreAddressConnection';
  /**  A list of edges that links to StoreAddress type node */
  edges?: Maybe<Array<Maybe<StoreAddressEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a StoreAddress connection to the StoreAddress type */
export type StoreAddressEdge = {
  __typename?: 'StoreAddressEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the StoreAddress edge */
  node?: Maybe<StoreAddress>;
};

/**  A list of results that matched against a User search query */
export type UserConnection = {
  __typename?: 'UserConnection';
  /**  A list of edges that links to User type node */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a User connection to the User type */
export type UserEdge = {
  __typename?: 'UserEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the User edge */
  node?: Maybe<User>;
};

/**  A list of results that matched against a VirtualCatalogue search query */
export type VirtualCatalogueConnection = {
  __typename?: 'VirtualCatalogueConnection';
  /**  A list of edges that links to VirtualCatalogue type node */
  edges?: Maybe<Array<Maybe<VirtualCatalogueEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a VirtualCatalogue connection to the VirtualCatalogue type */
export type VirtualCatalogueEdge = {
  __typename?: 'VirtualCatalogueEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the VirtualCatalogue edge */
  node?: Maybe<VirtualCatalogue>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type for `virtualView` query.
 */
export type VirtualViewInput = {
  /**  Unique reference of the Virtual View */
  ref: Scalars['String'];
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A `VirtualView` object provides on-hand and buffered view of the inventory. The buffers are calculated based on a specific set of inventory controls which are associated with the Virtual View at the time of creation.
 */
export type VirtualView = Node & Referenceable & {
  __typename?: 'VirtualView';
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Description */
  description?: Maybe<Scalars['String']>;
  /**  ID of the object. */
  id: Scalars['ID'];
  /**  `InventoryCatalogue` associated with the Virtual View. */
  inventoryCatalogueRef: Scalars['String'];
  /**  The identifier for the DecisionTable that contains the inventory controls for this VirtualView. */
  inventoryControlsId: Scalars['ID'];
  /**  Name of the VirtualView. */
  name: Scalars['String'];
  /**  `Network` associated with the Virtual View. */
  networkRef: Scalars['String'];
  /**  `ProductCatalogue` associated with the Virtual View. */
  productCatalogueRef: Scalars['String'];
  /**  A unique reference. Note: Virtual View refs do not support the hash (#) character. */
  ref: Scalars['String'];
  /**  Represents the current status of the Virtual View. Please see user guide to learn about the status lifecycle of a Virtual View. */
  status?: Maybe<VirtualViewStatus>;
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  A list of `VirtualProducts` within this Virtual View. A Virtual View returns `VirtualProducts` only when it is in the 'ACTIVE' status. */
  virtualProducts?: Maybe<VirtualProductConnection>;
};


/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A `VirtualView` object provides on-hand and buffered view of the inventory. The buffers are calculated based on a specific set of inventory controls which are associated with the Virtual View at the time of creation.
 */
export type VirtualViewVirtualProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<ProductType>>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Represents the status of a Virtual View. A Virtual View can be in one of the three statuses in its lifecycle. Each of them is described below.
 */
export enum VirtualViewStatus {
  /**  Represents that the Virtual View is ready to be queried for virtual products. A Virtual View is expected to remain in this status for its lifespan. */
  Active = 'ACTIVE',
  /**  Status for a newly created Virtual View. This status represents that the Virtual View has been created but it has not started loading the inventory yet. */
  Created = 'CREATED',
  /**  Represents that the Virtual View was created but there was error in loading the inventory. This is usually due to a server issue. We recommend creating a new virtual view when this happens. If the problem persists, please call Fluent support. */
  Failed = 'FAILED',
  /**  Represents that a newly created Virtual View is loading inventory in the background. */
  Loading = 'LOADING'
}

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Types of the product.
 */
export enum ProductType {
  /**  Represents a `StandardProduct` */
  Standard = 'STANDARD',
  /**  Represents a `VariantProduct` */
  Variant = 'VARIANT'
}

/**  A list of results that matched against a VirtualProduct search query */
export type VirtualProductConnection = {
  __typename?: 'VirtualProductConnection';
  /**  A list of edges that links to VirtualProduct type node */
  edges?: Maybe<Array<Maybe<VirtualProductEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a VirtualProduct connection to the VirtualProduct type */
export type VirtualProductEdge = {
  __typename?: 'VirtualProductEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the VirtualProduct edge */
  node?: Maybe<VirtualProduct>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A `VirtualProduct` object provides aggregated as well as location based `onHand` and `available` inventory for a given product.
 */
export type VirtualProduct = {
  __typename?: 'VirtualProduct';
  /**  Represents number of items in the inventory with the buffers applied */
  available: Scalars['Int'];
  /**  Represents the total buffer calculated as per the inventory controls. Please note that buffers are always subtracted from the on-hand quantities. So a negative buffer will result in addition. */
  buffer: Scalars['Int'];
  /**
   *  Global trade item number: Globally unique 14 digit number to uniquely identify an item. We allow 20 characters as support for legacy clients. If you are not a legacy client, we recommend not exceeding the standard 14 digits. </br>
   *  Max character limit: 20.
   */
  gtin?: Maybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Represents number of items in the inventory without the buffer applied */
  onHand: Scalars['Int'];
  /**  Reference of the product */
  ref: Scalars['String'];
  /**  Type of the product */
  type?: Maybe<ProductType>;
  /**  A list of `VirtualInventoryPosition` for this product. */
  virtualInventoryPositions?: Maybe<VirtualInventoryPositionConnection>;
  /**  Child products of this VirtualProduct. This field is applicable for products that have children. For instance, if this product is a StandardProduct with variants, this field represents the variants. */
  virtualProducts?: Maybe<VirtualProductConnection>;
};


/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A `VirtualProduct` object provides aggregated as well as location based `onHand` and `available` inventory for a given product.
 */
export type VirtualProductVirtualInventoryPositionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locationRef?: InputMaybe<Array<Scalars['String']>>;
};


/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A `VirtualProduct` object provides aggregated as well as location based `onHand` and `available` inventory for a given product.
 */
export type VirtualProductVirtualProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<ProductType>>;
};

/**  A list of results that matched against a VirtualInventoryPosition search query */
export type VirtualInventoryPositionConnection = {
  __typename?: 'VirtualInventoryPositionConnection';
  /**  A list of edges that links to VirtualInventoryPosition type node */
  edges?: Maybe<Array<Maybe<VirtualInventoryPositionEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a VirtualInventoryPosition connection to the VirtualInventoryPosition type */
export type VirtualInventoryPositionEdge = {
  __typename?: 'VirtualInventoryPositionEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the VirtualInventoryPosition edge */
  node?: Maybe<VirtualInventoryPosition>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A `VirtualInventoryPosition` object provides the `onHand` and `available` inventory for the corresponding `VirtualProduct` at a specific location.
 */
export type VirtualInventoryPosition = {
  __typename?: 'VirtualInventoryPosition';
  /**  Represents number of items in the inventory with the buffer applied */
  available: Scalars['Int'];
  /**  Represents the buffer, calculated as per the inventory controls. Please note that buffers are always subtracted from the on-hand quantities. So a negative buffer will result in addition. */
  buffer: Scalars['Int'];
  /**  Reference for the location */
  locationRef: Scalars['String'];
  /**  Represents number of items in the inventory without the buffer applied */
  onHand: Scalars['Int'];
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 * Input type for the `virtualViewInventoryLevels` query.
 */
export type VirtualViewInventoryLevelsInput = {
  /**  A list of locations within the Virtual View's network. The search will be confined to these locations. */
  includedLocationRefs?: InputMaybe<Array<Scalars['String']>>;
  /**
   *  GeoCoordinates to order results by. Closest locations are returned first. If this parameter is not passed, results will be in no specific order.
   *  Please note that we use the great-circle distance for this sorting and these distances are calculated based on an implementation of the Haversine formula.
   */
  orderByProximity?: InputMaybe<GeoCoordinateInput>;
  /**  An object containing requested products along with the quantities required. */
  productQuantities: Array<ProductQuantityInput>;
  /**  Reference of the Virtual View that will be searched. */
  virtualViewRef: Scalars['String'];
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Response type for the `VirtualViewInventoryLevels` query.
 */
export type VirtualViewInventoryLevelsOutput = {
  __typename?: 'VirtualViewInventoryLevelsOutput';
  /**  List of `VirtualViewInventoryLevels` objects. The number of objects in this array is currently capped at 100. This limit is subject to incremental change. */
  virtualViewInventoryLevels?: Maybe<Array<Maybe<VirtualViewInventoryLevels>>>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Pair of location with products in this location.
 */
export type VirtualViewInventoryLevels = {
  __typename?: 'VirtualViewInventoryLevels';
  /**  Location that can fulfil the requested stock */
  locationRef: Scalars['String'];
  /**  Products along with their inventory levels */
  productInventoryLevels: Array<VirtualViewProductInventoryLevels>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  An object containing a product’s inventory levels as requested via the `virtualViewInventoryLevels` query.
 */
export type VirtualViewProductInventoryLevels = {
  __typename?: 'VirtualViewProductInventoryLevels';
  /**  Represents a count of this product with the buffers applied */
  available: Scalars['Int'];
  /**  Represents the total buffer applied to this product as per the inventory controls. Please note that buffers are always subtracted from the on-hand quantities. So a negative buffer will result in addition. */
  buffer: Scalars['Int'];
  /**  Represents a count of this product without the buffer applied */
  onHand: Scalars['Int'];
  /**  Reference of the product */
  productRef: Scalars['String'];
};

/**  `Wave` represents the pick and pack process that gets carried out in a store or a warehouse. */
export type Wave = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'Wave';
  /**  `User` who the wave is assigned to */
  allocatedTo?: Maybe<User>;
  /**  A list of attributes associated with this `Wave`. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**  Time of creation */
  createdOn?: Maybe<Scalars['DateTime']>;
  /**  Fulfilments associated with this `Wave` */
  fulfilments?: Maybe<FulfilmentConnection>;
  /**  ID of the `Wave` */
  id: Scalars['ID'];
  /**  Items associated with this `Wave` */
  items: WaveItemConnection;
  /**  Location of the `Wave` operation */
  location: Location;
  /**  Name of the `Wave` */
  name?: Maybe<Scalars['String']>;
  /**  The `Location` where the `Wave` is processed */
  processingLocation?: Maybe<LocationLink>;
  /**  External reference of the `Wave`. Must be unique. */
  ref: Scalars['String'];
  /**  The associated retailer */
  retailer: Retailer;
  /**  The current status of the `Wave`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: Maybe<Scalars['String']>;
  /**  Type of the `Wave`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
  /**  Time of last update */
  updatedOn?: Maybe<Scalars['DateTime']>;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: Scalars['String'];
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: Scalars['Int'];
};


/**  `Wave` represents the pick and pack process that gets carried out in a store or a warehouse. */
export type WaveFulfilmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdOn?: InputMaybe<DateRange>;
  deliveryType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eta?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expiryTime?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  fromLocation?: InputMaybe<LocationLinkInput>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<Scalars['String']>>;
  updatedOn?: InputMaybe<DateRange>;
  workflowRef?: InputMaybe<Array<Scalars['String']>>;
  workflowVersion?: InputMaybe<Array<Scalars['Int']>>;
};


/**  `Wave` represents the pick and pack process that gets carried out in a store or a warehouse. */
export type WaveItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Array<Scalars['Int']>>;
};

/**  A list of results that matched against a WaveItem search query */
export type WaveItemConnection = {
  __typename?: 'WaveItemConnection';
  /**  A list of edges that links to WaveItem type node */
  edges?: Maybe<Array<Maybe<WaveItemEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a WaveItem connection to the WaveItem type */
export type WaveItemEdge = {
  __typename?: 'WaveItemEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the WaveItem edge */
  node?: Maybe<WaveItem>;
};

/**  `WaveItem` represents an item of the `Wave`. */
export type WaveItem = {
  __typename?: 'WaveItem';
  /**  Represents the `Product` corresponding to this `WaveItem` */
  product: Product;
  /**  Aggregated quantity of a product in the `Wave` */
  quantity: Scalars['Int'];
};

/**  A list of results that matched against a Wave search query */
export type WaveConnection = {
  __typename?: 'WaveConnection';
  /**  A list of edges that links to Wave type node */
  edges?: Maybe<Array<Maybe<WaveEdge>>>;
  /**  Information to aid in pagination */
  pageInfo?: Maybe<PageInfo>;
};

/**  The edge in a Wave connection to the Wave type */
export type WaveEdge = {
  __typename?: 'WaveEdge';
  /**  A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /**  The item at the end of the Wave edge */
  node?: Maybe<Wave>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  This mutation creates an `Article`, an orchestratable entity inside the Fluent ecosystem. If the `Article` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "ARTICLE-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "ARTICLE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createArticle?: Maybe<Article>;
  /** Creates a new 'Billing account' */
  createBillingAccount?: Maybe<BillingAccount>;
  /**  This mutation creates a `Carrier`, an orchestratable entity inside the Fluent ecosystem. If the `Carrier` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "CARRIER-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "CARRIER",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createCarrier?: Maybe<Carrier>;
  /**  Creates a `CarrierConsignment` */
  createCarrierConsignment?: Maybe<CarrierConsignment>;
  /**  This mutation creates a `Category`, an orchestratable entity inside the Fluent ecosystem. If the `Category` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "CATEGORY-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "CATEGORY",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createCategory?: Maybe<Category>;
  /**  Creates a `Comment` against a known entity */
  createComment?: Maybe<Comment>;
  createConsignment?: Maybe<Consignment>;
  /**  This mutation creates a `Control`, an orchestratable entity inside the Fluent ecosystem. If the `Control` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "CONTROL-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "CONTROL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createControl?: Maybe<Control>;
  /**  This mutation creates a `ControlGroup`, an orchestratable entity inside the Fluent ecosystem. If the `ControlGroup` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "CONTROLGROUP-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "CONTROLGROUP",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createControlGroup?: Maybe<ControlGroup>;
  /** Creates a 'Credit memo' */
  createCreditMemo?: Maybe<CreditMemo>;
  /** Creates a 'Credit memo item' */
  createCreditMemoItem?: Maybe<CreditMemoItem>;
  createCustomer?: Maybe<Customer>;
  createCustomerAddress?: Maybe<CustomerAddress>;
  /**
   *  _Disclaimer:  This mutation is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
   *  Mutation to create a decision rule and associate it with a decision table
   */
  createDecisionRule?: Maybe<DecisionRule>;
  /**  This mutation creates a `FinancialTransaction`, an orchestratable entity inside the Fluent ecosystem. If the `FinancialTransaction` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "FINANCIALTRANSACTION-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "FINANCIALTRANSACTION",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createFinancialTransaction?: Maybe<FinancialTransaction>;
  /**  This mutation creates a `Fulfilment`, an orchestratable entity inside the Fluent ecosystem. If the `Fulfilment` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "FULFILMENT-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "FULFILMENT",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createFulfilment?: Maybe<Fulfilment>;
  /**  This mutation creates a `FulfilmentOption`, an orchestratable entity inside the Fluent ecosystem. If the `FulfilmentOption` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "FULFILMENTOPTION-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "FULFILMENTOPTION",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createFulfilmentOption?: Maybe<FulfilmentOption>;
  /**  This mutation creates a `FulfilmentPlan`, an orchestratable entity inside the Fluent ecosystem. If the `FulfilmentPlan` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "FULFILMENTPLAN-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "FULFILMENTPLAN",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createFulfilmentPlan?: Maybe<FulfilmentPlan>;
  /**  This mutation creates a `GroupProduct`, an orchestratable entity inside the Fluent ecosystem. If the `GroupProduct` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "GROUPPRODUCT-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "GROUPPRODUCT",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createGroupProduct?: Maybe<GroupProduct>;
  /**  This mutation creates an `InventoryCatalogue`, an orchestratable entity inside the Fluent ecosystem. If the `InventoryCatalogue` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "INVENTORYCATALOGUE-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "INVENTORYCATALOGUE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createInventoryCatalogue?: Maybe<InventoryCatalogue>;
  /**  This mutation creates an `InventoryPosition`, an orchestratable entity inside the Fluent ecosystem. If the `InventoryPosition` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "INVENTORYPOSITION-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "INVENTORYPOSITION",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createInventoryPosition?: Maybe<InventoryPosition>;
  /**  This mutation creates an `InventoryQuantity`, an orchestratable entity inside the Fluent ecosystem. If the `InventoryQuantity` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "INVENTORYQUANTITY-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "INVENTORYQUANTITY",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createInventoryQuantity?: Maybe<InventoryQuantity>;
  /** Creates an 'Invoice' */
  createInvoice?: Maybe<Invoice>;
  /** Creates an 'Invoice item' */
  createInvoiceItem?: Maybe<InvoiceItem>;
  createLocation?: Maybe<Location>;
  /**  Creates a `Manifest` */
  createManifest?: Maybe<Manifest>;
  createNetwork?: Maybe<Network>;
  /**  This mutation creates an `Order`, an orchestratable entity inside the Fluent ecosystem. If the `Order` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "ORDER-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "ORDER",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createOrder?: Maybe<Order>;
  /**  This mutation creates an `Order`, an orchestratable entity inside the Fluent ecosystem. If the `Order` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "ORDER-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "ORDER",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createOrderAndCustomer?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  /**
   *  This mutation creates a `Payment`, an orchestratable entity inside the Fluent ecosystem. If the `Payment` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "PAYMENT-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "PAYMENT",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/>
   * Creates a new 'Payment'
   */
  createPayment?: Maybe<Payment>;
  /** Creates a new 'PaymentServiceProvider' */
  createPaymentServiceProvider?: Maybe<PaymentServiceProvider>;
  /**
   *  This mutation creates a `PaymentTransaction`, an orchestratable entity inside the Fluent ecosystem. If the `PaymentTransaction` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "PAYMENTTRANSACTION-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "PAYMENTTRANSACTION",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/>
   * Creates a new 'PaymentTransaction'
   */
  createPaymentTransaction?: Maybe<PaymentTransaction>;
  /**  This mutation creates a `ProductCatalogue`, an orchestratable entity inside the Fluent ecosystem. If the `ProductCatalogue` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "PRODUCTCATALOGUE-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "PRODUCTCATALOGUE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createProductCatalogue?: Maybe<ProductCatalogue>;
  createRetailer?: Maybe<Retailer>;
  /** Creates a 'Return fulfilment' */
  createReturnFulfilment?: Maybe<ReturnFulfilment>;
  /** Creates a 'Return fulfilment item' */
  createReturnFulfilmentItem?: Maybe<ReturnFulfilmentItem>;
  /** Creates a 'Return order' */
  createReturnOrder?: Maybe<ReturnOrder>;
  /** Creates a 'Return order item' */
  createReturnOrderItem?: Maybe<ReturnOrderItem>;
  /**  Creates a `Role` */
  createRole?: Maybe<Role>;
  /**  Creates a `Setting` */
  createSetting?: Maybe<Setting>;
  /**  This mutation creates a `StandardProduct`, an orchestratable entity inside the Fluent ecosystem. If the `StandardProduct` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "STANDARDPRODUCT-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "STANDARDPRODUCT",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createStandardProduct?: Maybe<StandardProduct>;
  createStorageArea?: Maybe<StorageArea>;
  createStoreAddress?: Maybe<StoreAddress>;
  /**  Creates a `User` */
  createUser?: Maybe<User>;
  /**  This mutation creates a `VariantProduct`, an orchestratable entity inside the Fluent ecosystem. If the `VariantProduct` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "VARIANTPRODUCT-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "VARIANTPRODUCT",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createVariantProduct?: Maybe<VariantProduct>;
  /**  This mutation creates a `VirtualCatalogue`, an orchestratable entity inside the Fluent ecosystem. If the `VirtualCatalogue` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "VIRTUALCATALOGUE-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "VIRTUALCATALOGUE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createVirtualCatalogue?: Maybe<VirtualCatalogue>;
  /**  This mutation creates a `VirtualPosition`, an orchestratable entity inside the Fluent ecosystem. If the `VirtualPosition` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "VIRTUALPOSITION-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "VIRTUALPOSITION",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createVirtualPosition?: Maybe<VirtualPosition>;
  /**
   *  _Disclaimer:  This mutation is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
   *  Creates a new `Virtual View`
   */
  createVirtualView?: Maybe<CreateVirtualViewOutput>;
  /**  This mutation creates a `Wave`, an orchestratable entity inside the Fluent ecosystem. If the `Wave` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "WAVE-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "WAVE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createWave?: Maybe<Wave>;
  /**  Removes one or more `Category`s from a `GroupProduct` */
  removeCategoriesFromGroupProduct?: Maybe<RemoveCategoriesFromGroupProductOutput>;
  /**  Removes one or more `Category`s from a `StandardProduct` */
  removeCategoriesFromStandardProduct?: Maybe<RemoveCategoriesFromStandardProductOutput>;
  /**  Removes one or more `Category`s from a `VariantProduct` */
  removeCategoriesFromVariantProduct?: Maybe<RemoveCategoriesFromVariantProductOutput>;
  /**
   *  _Disclaimer:  This mutation is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
   *  Mutation to remove a decision rule.
   */
  removeDecisionRule?: Maybe<RemoveDecisionRuleOutput>;
  /**  Removes one or more `Location`s from a `Network` */
  removeLocationsFromNetwork?: Maybe<RemoveLocationsFromNetworkOutput>;
  /**  Removes one or more `Network`s from a `Location` */
  removeNetworksFromLocation?: Maybe<RemoveNetworksFromLocationOutput>;
  /**  Removes one or more `Permission`s from a `Role` */
  removePermissionsFromRole?: Maybe<RemovePermissionsFromRoleOutput>;
  /**  Removes one or more `UserRole`s from an `User` */
  removeUserRolesFromUser?: Maybe<RemoveUserRolesFromUserOutput>;
  updateArticle?: Maybe<Article>;
  /** Updates a new 'Billing account' */
  updateBillingAccount?: Maybe<BillingAccount>;
  updateCarrier?: Maybe<Carrier>;
  /**  Updates a `CarrierConsignment` */
  updateCarrierConsignment?: Maybe<CarrierConsignment>;
  updateCategory?: Maybe<Category>;
  /**  Updates a `Comment` */
  updateComment?: Maybe<Comment>;
  updateConsignment?: Maybe<Consignment>;
  updateControl?: Maybe<Control>;
  updateControlGroup?: Maybe<ControlGroup>;
  /** Updates a 'Credit memo' */
  updateCreditMemo?: Maybe<CreditMemo>;
  updateCustomer?: Maybe<Customer>;
  updateCustomerAddress?: Maybe<CustomerAddress>;
  updateFulfilment?: Maybe<Fulfilment>;
  updateFulfilmentOption?: Maybe<FulfilmentOption>;
  updateFulfilmentPlan?: Maybe<FulfilmentPlan>;
  updateGroupProduct?: Maybe<GroupProduct>;
  updateInventoryCatalogue?: Maybe<InventoryCatalogue>;
  updateInventoryPosition?: Maybe<InventoryPosition>;
  /**  Used to bulk update the statuses of a list of Inventory Positions */
  updateInventoryPositionsStatusByLocation?: Maybe<UpdateStatusOutput>;
  /**  Used to bulk update the statuses of a list of Inventory Quantities */
  updateInventoryQuantitiesStatus?: Maybe<UpdateStatusOutput>;
  updateInventoryQuantity?: Maybe<InventoryQuantity>;
  /** Updates an 'Invoice' */
  updateInvoice?: Maybe<Invoice>;
  updateLocation?: Maybe<Location>;
  /**  Updates a `Manifest` */
  updateManifest?: Maybe<Manifest>;
  updateNetwork?: Maybe<Network>;
  updateOpeningSchedule?: Maybe<OpeningSchedule>;
  updateOrder?: Maybe<Order>;
  /** Updates an existing 'Payment' */
  updatePayment?: Maybe<Payment>;
  /** Updates an existing 'PaymentServiceProvider' */
  updatePaymentServiceProvider?: Maybe<PaymentServiceProvider>;
  updateProductCatalogue?: Maybe<ProductCatalogue>;
  updateRetailer?: Maybe<Retailer>;
  /** Updates a 'Return fulfilment' */
  updateReturnFulfilment?: Maybe<ReturnFulfilment>;
  /** Updates a 'Return order' */
  updateReturnOrder?: Maybe<ReturnOrder>;
  /**  Updates a `Role` */
  updateRole?: Maybe<Role>;
  /**  Updates a `Setting` */
  updateSetting?: Maybe<Setting>;
  updateStandardProduct?: Maybe<StandardProduct>;
  updateStorageArea?: Maybe<StorageArea>;
  updateStoreAddress?: Maybe<StoreAddress>;
  /**  Updates a `User` */
  updateUser?: Maybe<User>;
  updateVariantProduct?: Maybe<VariantProduct>;
  updateVirtualCatalogue?: Maybe<VirtualCatalogue>;
  updateVirtualPosition?: Maybe<VirtualPosition>;
  /**  Used to bulk update the statuses of a list of Virtual Positions */
  updateVirtualPositionsStatusByGroup?: Maybe<UpdateStatusOutput>;
  updateWave?: Maybe<Wave>;
};


export type MutationCreateArticleArgs = {
  input?: InputMaybe<CreateArticleInput>;
};


export type MutationCreateBillingAccountArgs = {
  input?: InputMaybe<CreateBillingAccountInput>;
};


export type MutationCreateCarrierArgs = {
  input?: InputMaybe<CreateCarrierInput>;
};


export type MutationCreateCarrierConsignmentArgs = {
  input?: InputMaybe<CreateCarrierConsignmentInput>;
};


export type MutationCreateCategoryArgs = {
  input?: InputMaybe<CreateCategoryInput>;
};


export type MutationCreateCommentArgs = {
  input?: InputMaybe<CreateCommentInput>;
};


export type MutationCreateConsignmentArgs = {
  input?: InputMaybe<CreateConsignmentInput>;
};


export type MutationCreateControlArgs = {
  input?: InputMaybe<CreateControlInput>;
};


export type MutationCreateControlGroupArgs = {
  input?: InputMaybe<CreateControlGroupInput>;
};


export type MutationCreateCreditMemoArgs = {
  input?: InputMaybe<CreateCreditMemoInput>;
};


export type MutationCreateCreditMemoItemArgs = {
  input?: InputMaybe<CreateCreditMemoItemInput>;
};


export type MutationCreateCustomerArgs = {
  input?: InputMaybe<CreateCustomerInput>;
};


export type MutationCreateCustomerAddressArgs = {
  input?: InputMaybe<CreateCustomerAddressInput>;
};


export type MutationCreateDecisionRuleArgs = {
  input: CreateDecisionRuleInput;
};


export type MutationCreateFinancialTransactionArgs = {
  input?: InputMaybe<CreateFinancialTransactionInput>;
};


export type MutationCreateFulfilmentArgs = {
  input?: InputMaybe<CreateFulfilmentInput>;
};


export type MutationCreateFulfilmentOptionArgs = {
  executionMode?: InputMaybe<ExecutionMode>;
  input?: InputMaybe<CreateFulfilmentOptionInput>;
};


export type MutationCreateFulfilmentPlanArgs = {
  input?: InputMaybe<CreateFulfilmentPlanInput>;
};


export type MutationCreateGroupProductArgs = {
  input?: InputMaybe<CreateGroupProductInput>;
};


export type MutationCreateInventoryCatalogueArgs = {
  input?: InputMaybe<CreateInventoryCatalogueInput>;
};


export type MutationCreateInventoryPositionArgs = {
  input?: InputMaybe<CreateInventoryPositionInput>;
};


export type MutationCreateInventoryQuantityArgs = {
  input?: InputMaybe<CreateInventoryQuantityInput>;
};


export type MutationCreateInvoiceArgs = {
  input?: InputMaybe<CreateInvoiceInput>;
};


export type MutationCreateInvoiceItemArgs = {
  input?: InputMaybe<CreateInvoiceItemInput>;
};


export type MutationCreateLocationArgs = {
  input?: InputMaybe<CreateLocationInput>;
};


export type MutationCreateManifestArgs = {
  input?: InputMaybe<CreateManifestInput>;
};


export type MutationCreateNetworkArgs = {
  input?: InputMaybe<CreateNetworkInput>;
};


export type MutationCreateOrderArgs = {
  input?: InputMaybe<CreateOrderInput>;
};


export type MutationCreateOrderAndCustomerArgs = {
  input?: InputMaybe<CreateOrderAndCustomerInput>;
};


export type MutationCreateOrderItemArgs = {
  input?: InputMaybe<CreateOrderItemInput>;
};


export type MutationCreatePaymentArgs = {
  input?: InputMaybe<CreatePaymentInput>;
};


export type MutationCreatePaymentServiceProviderArgs = {
  input?: InputMaybe<CreatePaymentServiceProviderInput>;
};


export type MutationCreatePaymentTransactionArgs = {
  input?: InputMaybe<CreatePaymentTransactionInput>;
};


export type MutationCreateProductCatalogueArgs = {
  input?: InputMaybe<CreateProductCatalogueInput>;
};


export type MutationCreateRetailerArgs = {
  input?: InputMaybe<CreateRetailerInput>;
};


export type MutationCreateReturnFulfilmentArgs = {
  input?: InputMaybe<CreateReturnFulfilmentInput>;
};


export type MutationCreateReturnFulfilmentItemArgs = {
  input?: InputMaybe<CreateReturnFulfilmentItemInput>;
};


export type MutationCreateReturnOrderArgs = {
  input?: InputMaybe<CreateReturnOrderInput>;
};


export type MutationCreateReturnOrderItemArgs = {
  input?: InputMaybe<CreateReturnOrderItemInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateSettingArgs = {
  input?: InputMaybe<CreateSettingInput>;
};


export type MutationCreateStandardProductArgs = {
  input?: InputMaybe<CreateStandardProductInput>;
};


export type MutationCreateStorageAreaArgs = {
  input?: InputMaybe<CreateStorageAreaInput>;
};


export type MutationCreateStoreAddressArgs = {
  input?: InputMaybe<CreateStoreAddressInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationCreateVariantProductArgs = {
  input?: InputMaybe<CreateVariantProductInput>;
};


export type MutationCreateVirtualCatalogueArgs = {
  input?: InputMaybe<CreateVirtualCatalogueInput>;
};


export type MutationCreateVirtualPositionArgs = {
  input?: InputMaybe<CreateVirtualPositionInput>;
};


export type MutationCreateVirtualViewArgs = {
  input?: InputMaybe<CreateVirtualViewInput>;
};


export type MutationCreateWaveArgs = {
  input?: InputMaybe<CreateWaveInput>;
};


export type MutationRemoveCategoriesFromGroupProductArgs = {
  input?: InputMaybe<RemoveCategoriesFromGroupProductInput>;
};


export type MutationRemoveCategoriesFromStandardProductArgs = {
  input?: InputMaybe<RemoveCategoriesFromStandardProductInput>;
};


export type MutationRemoveCategoriesFromVariantProductArgs = {
  input?: InputMaybe<RemoveCategoriesFromVariantProductInput>;
};


export type MutationRemoveDecisionRuleArgs = {
  input: RemoveDecisionRuleInput;
};


export type MutationRemoveLocationsFromNetworkArgs = {
  input?: InputMaybe<RemoveLocationsFromNetworkInput>;
};


export type MutationRemoveNetworksFromLocationArgs = {
  input?: InputMaybe<RemoveNetworksFromLocationInput>;
};


export type MutationRemovePermissionsFromRoleArgs = {
  input?: InputMaybe<RemovePermissionsFromRoleInput>;
};


export type MutationRemoveUserRolesFromUserArgs = {
  input?: InputMaybe<RemoveUserRolesFromUserInput>;
};


export type MutationUpdateArticleArgs = {
  input?: InputMaybe<UpdateArticleInput>;
};


export type MutationUpdateBillingAccountArgs = {
  input?: InputMaybe<UpdateBillingAccountInput>;
};


export type MutationUpdateCarrierArgs = {
  input?: InputMaybe<UpdateCarrierInput>;
};


export type MutationUpdateCarrierConsignmentArgs = {
  input?: InputMaybe<UpdateCarrierConsignmentInput>;
};


export type MutationUpdateCategoryArgs = {
  input?: InputMaybe<UpdateCategoryInput>;
};


export type MutationUpdateCommentArgs = {
  input?: InputMaybe<UpdateCommentInput>;
};


export type MutationUpdateConsignmentArgs = {
  input?: InputMaybe<UpdateConsignmentInput>;
};


export type MutationUpdateControlArgs = {
  input?: InputMaybe<UpdateControlInput>;
};


export type MutationUpdateControlGroupArgs = {
  input?: InputMaybe<UpdateControlGroupInput>;
};


export type MutationUpdateCreditMemoArgs = {
  input?: InputMaybe<UpdateCreditMemoInput>;
};


export type MutationUpdateCustomerArgs = {
  input?: InputMaybe<UpdateCustomerInput>;
};


export type MutationUpdateCustomerAddressArgs = {
  input?: InputMaybe<UpdateCustomerAddressInput>;
};


export type MutationUpdateFulfilmentArgs = {
  input?: InputMaybe<UpdateFulfilmentInput>;
};


export type MutationUpdateFulfilmentOptionArgs = {
  input?: InputMaybe<UpdateFulfilmentOptionInput>;
};


export type MutationUpdateFulfilmentPlanArgs = {
  input?: InputMaybe<UpdateFulfilmentPlanInput>;
};


export type MutationUpdateGroupProductArgs = {
  input?: InputMaybe<UpdateGroupProductInput>;
};


export type MutationUpdateInventoryCatalogueArgs = {
  input?: InputMaybe<UpdateInventoryCatalogueInput>;
};


export type MutationUpdateInventoryPositionArgs = {
  input?: InputMaybe<UpdateInventoryPositionInput>;
};


export type MutationUpdateInventoryPositionsStatusByLocationArgs = {
  filter: InventoryPositionsLocationFilterInput;
  input: StatusInput;
};


export type MutationUpdateInventoryQuantitiesStatusArgs = {
  filter: InventoryQuantityFilterInput;
  input: StatusInput;
};


export type MutationUpdateInventoryQuantityArgs = {
  input?: InputMaybe<UpdateInventoryQuantityInput>;
};


export type MutationUpdateInvoiceArgs = {
  input?: InputMaybe<UpdateInvoiceInput>;
};


export type MutationUpdateLocationArgs = {
  input?: InputMaybe<UpdateLocationInput>;
};


export type MutationUpdateManifestArgs = {
  input?: InputMaybe<UpdateManifestInput>;
};


export type MutationUpdateNetworkArgs = {
  input?: InputMaybe<UpdateNetworkInput>;
};


export type MutationUpdateOpeningScheduleArgs = {
  input?: InputMaybe<UpdateOpeningScheduleInput>;
};


export type MutationUpdateOrderArgs = {
  input?: InputMaybe<UpdateOrderInput>;
};


export type MutationUpdatePaymentArgs = {
  input?: InputMaybe<UpdatePaymentInput>;
};


export type MutationUpdatePaymentServiceProviderArgs = {
  input?: InputMaybe<UpdatePaymentServiceProviderInput>;
};


export type MutationUpdateProductCatalogueArgs = {
  input?: InputMaybe<UpdateProductCatalogueInput>;
};


export type MutationUpdateRetailerArgs = {
  input?: InputMaybe<UpdateRetailerInput>;
};


export type MutationUpdateReturnFulfilmentArgs = {
  input?: InputMaybe<UpdateReturnFulfilmentInput>;
};


export type MutationUpdateReturnOrderArgs = {
  input?: InputMaybe<UpdateReturnOrderInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateSettingArgs = {
  input?: InputMaybe<UpdateSettingInput>;
};


export type MutationUpdateStandardProductArgs = {
  input?: InputMaybe<UpdateStandardProductInput>;
};


export type MutationUpdateStorageAreaArgs = {
  input?: InputMaybe<UpdateStorageAreaInput>;
};


export type MutationUpdateStoreAddressArgs = {
  input?: InputMaybe<UpdateStoreAddressInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateVariantProductArgs = {
  input?: InputMaybe<UpdateVariantProductInput>;
};


export type MutationUpdateVirtualCatalogueArgs = {
  input?: InputMaybe<UpdateVirtualCatalogueInput>;
};


export type MutationUpdateVirtualPositionArgs = {
  input?: InputMaybe<UpdateVirtualPositionInput>;
};


export type MutationUpdateVirtualPositionsStatusByGroupArgs = {
  filter: VirtualPositionsGroupFilterInput;
  input: StatusInput;
};


export type MutationUpdateWaveArgs = {
  input?: InputMaybe<UpdateWaveInput>;
};

/** Article */
export type CreateArticleInput = {
  /**  Max character limit: 30. */
  articleNumber?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Max character limit: 50. */
  barcodeArticleNumber?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 256. */
  description?: InputMaybe<Scalars['String']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  fulfilments: Array<InputMaybe<FulfilmentId>>;
  height: Scalars['Float'];
  items?: InputMaybe<Array<InputMaybe<CreateArticleItemWithArticleInput>>>;
  length: Scalars['Float'];
  /**  Max character limit: 256. */
  name?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  purchaseValue?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  ref: Scalars['String'];
  storageArea?: InputMaybe<StorageAreaId>;
  /**
   *  Type of the `Article`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
  weight: Scalars['Float'];
  width: Scalars['Float'];
};

/**  Input type for `attribute`s. Attributes should be unique by `name`. If an attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else they will be inserted. */
export type AttributeInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['Json'];
};

export type FulfilmentId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

/** ArticleItem */
export type CreateArticleItemWithArticleInput = {
  barcode?: InputMaybe<Scalars['String']>;
  /**  Max quantity of an Article item allowed is "32767" */
  quantity: Scalars['Int'];
};

export type StorageAreaId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

export type CreateBillingAccountInput = {
  /**  Address associated to the `BillingAccount`. */
  address?: InputMaybe<StreetAddressInput>;
  /**  A list of attributes associated with the `BillingAccount`. This can be used to extend the existing data structure with additional data. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Customer associated to the `BillingAccount`. */
  customer?: InputMaybe<CustomerKey>;
  /**
   *  Name of the `BillingAccount`. <br/>
   *  Max character limit: 100.
   */
  name: Scalars['String'];
  /**
   *  External reference to the `BillingAccount`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Retailer associated to the `BillingAccount`. */
  retailer: RetailerId;
  /**
   *  Type of the `BillingAccount`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

export type StreetAddressInput = {
  /**
   *  City. <br/>
   *  Max character limit: 45.
   */
  city?: InputMaybe<Scalars['String']>;
  /**
   *  Company Name. <br/>
   *  Max character limit: 45.
   */
  companyName?: InputMaybe<Scalars['String']>;
  /**
   *  Country. <br/>
   *  Max character limit: 100.
   */
  country?: InputMaybe<Scalars['String']>;
  /**  Latitude */
  latitude?: InputMaybe<Scalars['Float']>;
  /**  Longitude */
  longitude?: InputMaybe<Scalars['Float']>;
  /**  Name */
  name?: InputMaybe<Scalars['String']>;
  /**
   *  Postcode. <br/>
   *  Max character limit: 100.
   */
  postcode?: InputMaybe<Scalars['String']>;
  /**
   *  Region. <br/>
   *  Max character limit: 250.
   */
  region?: InputMaybe<Scalars['String']>;
  /**
   *  State. <br/>
   *  Max character limit: 200.
   */
  state?: InputMaybe<Scalars['String']>;
  /**
   *  Street. <br/>
   *  Max character limit: 100.
   */
  street?: InputMaybe<Scalars['String']>;
  /**
   *  Timezone. <br/>
   *  Max character limit: 32.
   */
  timeZone?: InputMaybe<Scalars['String']>;
};

/**  Input type to uniquely identify a `Customer` object. We use all the fields present in the request to look for this object. */
export type CustomerKey = {
  /**  The client's reference identifier for the object */
  ref: Scalars['String'];
};

/**  Input type to create a `Carrier` */
export type CreateCarrierInput = {
  /**  A list of attributes associated with this Carrier. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**
   *  Name of the carrier. <br/>
   *  Max character limit: 45.
   */
  name: Scalars['String'];
  /**
   *  The unique reference identifier for the `Carrier`. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  ID of the retailer */
  retailer: RetailerId;
  /**
   *  Type of the `Carrier`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**  Input for creating a `CarrierConsignment` object. */
export type CreateCarrierConsignmentInput = {
  /**  A list of attributes associated with this Consignment. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Carrier used for the consignment */
  carrier: CarrierId;
  /**  Input for creating `ConsignmentArticle`s for this consignment */
  carrierConsignmentArticles: Array<InputMaybe<CreateConsignmentArticleWithConsignmentInput>>;
  /**
   *  The external consignment reference assigned by the carrier. <br/>
   *  Max character limit: 100.
   */
  consignmentReference?: InputMaybe<Scalars['String']>;
  /**  The URL used to retrieve the shipping label */
  labelUrl?: InputMaybe<Scalars['String']>;
  /**  A url to represent the order summary. Usually the manifest url from the service provider. */
  orderSummaryUrl?: InputMaybe<Scalars['String']>;
  /**  External reference of the object. Must be unique. */
  ref: Scalars['String'];
  /**  Retailer who is booking the consignment */
  retailer: RetailerId;
  /**
   *  Tracking label of the consignment. <br/>
   *  Max character limit: 100.
   */
  trackingLabel?: InputMaybe<Scalars['String']>;
};

/**  Input type to uniquely identify a `Carrier` */
export type CarrierId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

/**  Input for creating `ConsignmentArticle`s with the `CreateConsignment` request. */
export type CreateConsignmentArticleWithConsignmentInput = {
  article?: InputMaybe<ArticleId>;
};

/**
 *  Input parameter for the `createCategory` mutation. A category `ref` should be unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `Category` record. <br /><br />
 *  The following default values will be set on creation:
 *  * `status` = `CREATED`
 *  * `workflowRef` = `PRODUCT_CATALOGUE::<product_catalogue.type>`
 *  * `workflowVersion` = `<Workflow.majorVersion>.<Workflow.minorVersion>` . <br /><br />
 *  After data persistence, an orchestration event will be fired providing the opportunity to perform business logic within a workflow. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type CreateCategoryInput = {
  /**  A list of attributes associated with this Category. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The reference of the `ProductCatalogue` in which this `Category` will reside. The `ProductCatalogue` must already exist. */
  catalogue: ProductCatalogueKey;
  /**  List of child `Category` references, if any. Child categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The child `Category` must already exist. */
  childCategories?: InputMaybe<Array<InputMaybe<CategoryKey>>>;
  /**  The name of the Category */
  name: Scalars['String'];
  /**
   *  The reference to the parent of this `Category`, if any. The parent `Category` must be a part of the same `ProductCatalogue` (see `catalogue` field). The parent `Category` must already exist. <br/>
   *  Max character limit: 36.
   */
  parentCategory?: InputMaybe<CategoryKey>;
  /**
   *  The reference identifier used to identify an single `Category` within a `ProductCatalogue`. The `ref` must be unique within a `ProductCatalogue`. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  A short description of the Category */
  summary?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `Category`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**  The `CategoryKey` input is the parameter for identifying a specific Category. */
export type CategoryKey = {
  /**  The Product Catalogue in which this Category resides */
  catalogue: ProductCatalogueKey;
  /**
   *  Category reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
};

/**  Input for creating a `comment` against a known entity */
export type CreateCommentInput = {
  /**
   *  ID of the entity <br/>
   *  Note: Please note that while the type of this field is `ID`, currently it only supports _Integer_ values.
   */
  entityId: Scalars['ID'];
  /**  Type of the entity. For example `ORDER`, `FULFILMENT`, `ORDERITEM`, `PRODUCTCATALOGUE` etc. */
  entityType: Scalars['String'];
  /**
   *  Comment text. <br/>
   *  Max character limit: 200.
   */
  text: Scalars['String'];
};

/**  Input for creating a `Consignment` object. */
export type CreateConsignmentInput = {
  /**  Carrier used for the consignment */
  carrier: CarrierId;
  /**  Input for creating `ConsignmentArticle`s for this consignment */
  consignmentArticles: Array<InputMaybe<CreateConsignmentArticleWithConsignmentInput>>;
  /**
   *  The external consignment reference assigned by the carrier. <br/>
   *  Max character limit: 100.
   */
  consignmentReference: Scalars['String'];
  /**  The URL used to retrieve the shipping label */
  labelUrl?: InputMaybe<Scalars['String']>;
  /**  A url to represent the order summary. Usually the manifest url from the service provider. */
  orderSummaryUrl?: InputMaybe<Scalars['String']>;
  /**  External reference of the object. Recommended to be unique. */
  ref: Scalars['String'];
  /**  Retailer who is booking the consignment */
  retailer: RetailerId;
  /**
   *  Tracking label of the consignment. <br/>
   *  Max character limit: 100.
   */
  trackingLabel?: InputMaybe<Scalars['String']>;
};

/**
 *  Input parameter for the `createControl` mutation. A control `ref` should be unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `catalogue control` record. <br /><br />
 *  The following default values will be set on creation:
 *  * `status` = `CREATED`
 *  * `workflowVersion` = `<Workflow.majorVersion>.<Workflow.minorVersion>` . <br /><br />
 *  After data persistence, an orchestration event will be fired providing the opportunity to perform business logic within a workflow. <br /><br />
 *  For more information, please refer to the https://lingo.fluentretail.com/display/LIN/Global+Inventory
 */
export type CreateControlInput = {
  /**  List of Attribute containing meta data information for this entity */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Control Group */
  controlGroup: ControlGroupKey;
  /**  Description */
  description?: InputMaybe<Scalars['String']>;
  /**  Order that this control is applied */
  executionOrder?: InputMaybe<Scalars['Int']>;
  /**  Name */
  name: Scalars['String'];
  /**
   *  The reference identifier used to identify an entity. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  Type of the `Control`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
  /**  values */
  values?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
};

/**
 *  Input parameter for the `CreateControlGroup` mutation. The `ref` field will be the unique identifier for this catalogue. <br /><br />
 *  The following default values will be set on creation:
 *  * `status` = `CREATED`
 *  * `workflowVersion` = `<Workflow.majorVersion>.<Workflow.minorVersion>` . <br /><br />
 *  After data persistence, an orchestration event will be fired providing the opportunity to perform business logic within a workflow. <br /><br />
 *  For more information, please refer to the https://lingo.fluentretail.com/display/LIN/Global+Inventory
 */
export type CreateControlGroupInput = {
  /**  List of Attribute containing meta data information for this entity */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Description */
  description?: InputMaybe<Scalars['String']>;
  /**  Name */
  name: Scalars['String'];
  /**
   *  The reference identifier used to identify an entity. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Retailer refs */
  retailerRefs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   *  Type of the `ControlGroup`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

export type CreateCreditMemoInput = {
  /**  A list of attributes associated with the `CreditMemo`. This can be used to extend the existing data structure with additional data. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  `BillingAccount` associated with the `CreditMemo`. */
  billingAccount: BillingAccountKey;
  /**  Reference to the `Currency`. */
  currency: CurrencyKey;
  /**  The default Tax Type for this credit memo. Individual credit memo items can override */
  defaultTaxType: TaxTypeInput;
  /**  `Invoice` associated with this `CreditMemo`. */
  invoice?: InputMaybe<InvoiceKey>;
  /**  Issue date */
  issueDate: Scalars['DateTime'];
  /**  The `CreditMemoItem`s associated with this `CreditMemo`. */
  items?: InputMaybe<Array<InputMaybe<CreateCreditMemoItemWithCreditMemoInput>>>;
  /**  Reference to an `Order` associated with the `CreditMemo`. */
  order?: InputMaybe<OrderLinkInput>;
  /**
   *  External reference to the `CreditMemo`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Reference to a `ReturnOrder` associated with the `CreditMemo`. */
  returnOrder?: InputMaybe<ReturnOrderKey>;
  /**  The total amount of this credit memo excluding tax */
  subTotalAmount: AmountTypeInput;
  /**  The total amount of this credit memo including tax */
  totalAmount: AmountTypeInput;
  /**  The total amount of this credit memo yet to be paid. (This caters for multi-part payments and payment milestones) */
  totalBalance: AmountTypeInput;
  /**  The total amount of tax for this credit memo */
  totalTax: AmountTypeInput;
  /**
   *  Type of the `CreditMemo`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**  Input type to uniquely identify a `BillingAccount` object. We use all the fields present in the request to look for this object. */
export type BillingAccountKey = {
  /**  The client's reference identifier for the object */
  ref: Scalars['String'];
};

/**  Input type to uniquely identify a `Currency` object. We use all the fields present in the request to look for this object. */
export type CurrencyKey = {
  /**  Max character limit: 20. */
  alphabeticCode: Scalars['String'];
};

/**  Input structure for creating or updating a `TaxType` on a `Product`. If `country` and `group` match, it will UPDATE, otherwise it will CREATE. All fields are required. */
export type TaxTypeInput = {
  /**  Max character limit: 100. */
  country: Scalars['String'];
  /**  Max character limit: 100. */
  group: Scalars['String'];
  /**  Max character limit: 100. */
  tariff: Scalars['String'];
};

/**  Input type to uniquely identify an `Invoice` object. We use all the fields present in the request to look for this object. */
export type InvoiceKey = {
  /**  The client's reference identifier for the object */
  ref: Scalars['String'];
};

export type CreateCreditMemoItemWithCreditMemoInput = {
  /**  The item amount for this item excluding tax. This is a calculated value based on business rules that does not necessarily have to take into account the unit quantity or amounts. */
  amount: AmountTypeInput;
  /**  Credit reason code of the `CreditMemoItem`. */
  creditReasonCode?: InputMaybe<SettingValueTypeInput>;
  /**  Description of the `CreditMemoItem`. */
  description?: InputMaybe<Scalars['String']>;
  /**  Reference to an `OrderItem` associated with the `CreditMemoItem`. */
  orderItem?: InputMaybe<OrderItemLinkInput>;
  /**  Reference to a `Product` associated with the `CreditMemoItem`. */
  product?: InputMaybe<ProductKey>;
  /**
   *  External reference to the `CreditMemoItem`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Reference to a `ReturnOrderItem` associated with the `CreditMemoItem`. */
  returnOrderItem?: InputMaybe<ReturnOrderItemKey>;
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount: AmountTypeInput;
  /**
   *  Type of the `CreditMemoItem`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
  /**  The unit sale price at time of sale or exchange */
  unitAmount: AmountTypeInput;
  /**  The unit cost price at time of sale or exchange. */
  unitCostAmount?: InputMaybe<AmountTypeInput>;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity: QuantityTypeInput;
  /**  The tax type of this item. Should only be provided if different to the default credit memo tax type. */
  unitTaxType?: InputMaybe<TaxTypeInput>;
};

export type AmountTypeInput = {
  amount?: InputMaybe<Scalars['Float']>;
  scale?: InputMaybe<Scalars['Int']>;
  unscaledValue?: InputMaybe<Scalars['Int']>;
};

export type SettingValueTypeInput = {
  label?: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
};

/**  The `ProductKey` input is the parameter for identifying a specific Product. */
export type ProductKey = {
  /**  The Product Catalogue in which this Product resides */
  catalogue: ProductCatalogueKey;
  /**
   *  Product reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
};

/**  Input type to uniquely identify a `ReturnOrderItem` object. We use all the fields present in the request to look for this object. */
export type ReturnOrderItemKey = {
  /**  The client's reference identifier for the object */
  ref: Scalars['String'];
  /**  Return order associated with the order item */
  returnOrder: ReturnOrderKey;
};

export type QuantityTypeInput = {
  quantity: Scalars['Int'];
  unit?: InputMaybe<Scalars['String']>;
};

export type CreateCreditMemoItemInput = {
  /**  The item amount for this item excluding tax. This is a calculated value based on business rules that does not necessarily have to take into account the unit quantity or amounts. */
  amount: AmountTypeInput;
  /**  `CreditMemo` associated with the `CreditMemoItem`. */
  creditMemo: CreditMemoKey;
  /**  Credit reason code of the `CreditMemoItem`. */
  creditReasonCode?: InputMaybe<SettingValueTypeInput>;
  /**  Description of the `CreditMemoItem`. */
  description?: InputMaybe<Scalars['String']>;
  /**  Reference to an `OrderItem` associated with the `CreditMemoItem`. */
  orderItem?: InputMaybe<OrderItemLinkInput>;
  /**  Reference to a `Product` associated with the `CreditMemoItem`. */
  product?: InputMaybe<ProductKey>;
  /**
   *  External reference to the `CreditMemoItem`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Reference to a `ReturnOrderItem` associated with the `CreditMemoItem`. */
  returnOrderItem?: InputMaybe<ReturnOrderItemKey>;
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount: AmountTypeInput;
  /**
   *  Type of the `CreditMemoItem`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
  /**  The unit sale price at time of sale or exchange */
  unitAmount: AmountTypeInput;
  /**  The unit cost price at time of sale or exchange. */
  unitCostAmount?: InputMaybe<AmountTypeInput>;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity: QuantityTypeInput;
  /**  The tax type of this item. Should only be provided if different to the default credit memo tax type. */
  unitTaxType?: InputMaybe<TaxTypeInput>;
};

/**  Input type to uniquely identify a `CreditMemo` object. We use all the fields present in the request to look for this object. */
export type CreditMemoKey = {
  /**  The client's reference identifier for the object */
  ref: Scalars['String'];
};

/** Customer */
export type CreateCustomerInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Max character limit: 100. */
  country?: InputMaybe<Scalars['String']>;
  department?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 50. */
  firstName: Scalars['String'];
  /**  Max character limit: 50. */
  lastName?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 250. */
  primaryEmail: Scalars['String'];
  /**  Max character limit: 20. */
  primaryPhone?: InputMaybe<Scalars['String']>;
  promotionOptIn: Scalars['Boolean'];
  retailer: RetailerId;
  /**  Max character limit: 32. */
  timezone: Scalars['String'];
  /**  Max character limit: 50. */
  title?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 250. */
  username: Scalars['String'];
};

/** CustomerAddress */
export type CreateCustomerAddressInput = {
  /**  Max character limit: 45. */
  city?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 45. */
  companyName?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  country?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  postcode?: InputMaybe<Scalars['String']>;
  ref: Scalars['String'];
  /**  Max character limit: 250. */
  region?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 200. */
  state?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  street?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 32. */
  timeZone?: InputMaybe<Scalars['String']>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type for creating a new decision rule
 */
export type CreateDecisionRuleInput = {
  /**  Input for the new decision rule being created */
  decisionRule: CreateDecisionRuleWithDecisionTableInput;
  /**  Id of the decision table that this rule is being added to */
  decisionTableId: Scalars['ID'];
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type for creating a new decision rule with a decision table
 */
export type CreateDecisionRuleWithDecisionTableInput = {
  /**  A short description of the rule. Helpful to understand the behaviour when the rule itself is complicated. */
  description?: InputMaybe<Scalars['String']>;
  /**  A set of conditions that all need to be true for the input to evaluate to true. */
  inputs: Array<CreateDecisionRuleInputInput>;
  /**  A set of actions to be taken when the input evaluates to true. <br/> Note: The type is list for future support. Currently we support only one action. If user configures more than one output, the first one in the array will be executed and the rest will be ignored. */
  outputs: Array<CreateDecisionRuleOutputInput>;
  /**  The priority decides which rule to execute in case of a conflict between multiple rules. The rule with the highest priority (represented by lowest number) will be selected. If no priority is provided, each rule will get a priority of 100 by default. */
  priority?: InputMaybe<Scalars['Int']>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type for `DecisionRuleInput`. Sorry about the awkward naming in this case but that's the naming convention.
 */
export type CreateDecisionRuleInputInput = {
  /**  This represents the right hand side of the condition equation. It includes the input values. */
  inputEntries?: InputMaybe<CreateDecisionRuleInputEntriesInput>;
  /**  The left hand side of a condition equation. At the moment, the actions are executed only when the inputExpression evaluates to true. So, it should be designed such that the true value should lead to the execution of the action. */
  inputExpression?: InputMaybe<CreateDecisionRuleInputExpressionInput>;
};

/**  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/> */
export type CreateDecisionRuleInputEntriesInput = {
  /**  Values that the input expression will be compared to. To be used when values of the corresponding fields are strings. For example, value of Product.Ref will be string or a value that can be passed and converted into a string. */
  stringEntries?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  The input expression. At the moment, output actions are executed when DecisionRuleInputExpression evaluates to true. So, this should be designed such that it evaluates to true for the corresponding action to be performed.
 *  Note: A rule can have multiple input expressions chained together with logical operators. Currently the api uses the "AND" operator to chain multiple input expressions within a rule.
 */
export type CreateDecisionRuleInputExpressionInput = {
  /**  The fieldName from the GraphQL type */
  fieldName?: InputMaybe<DecisionRuleInputFieldName>;
  /**  The comparison operator */
  operator?: InputMaybe<DecisionRuleComparisionOperator>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Type to configure a set of actions which are executed when the decision rule input evaluates to true
 */
export type CreateDecisionRuleOutputInput = {
  /**  This represents the values that the output expression will be compared to. */
  outputEntries: CreateDecisionRuleOutputEntriesInput;
  /**  The output expression. At the moment, we execute actions/outputs when DecisionRuleInputExpression evaluates to true. So, this should be designed such that this will always be executed when the input evaluates to true. Also note that even though we don't support multiple outputs at the moment, the schema type is designed this way to be future proof. */
  outputExpression: CreateDecisionRuleOutputExpressionInput;
};

/**  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/> */
export type CreateDecisionRuleOutputEntriesInput = {
  /**  Values that the output expression will be compared to. To be used when the values are a single Int. For example, for the Output "Apply a quantity buffer of 10, this is the `10` part. */
  intEntry?: InputMaybe<Scalars['Int']>;
};

/**  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/> */
export type CreateDecisionRuleOutputExpressionInput = {
  /**  The action to be executed */
  action?: InputMaybe<DecisionRuleOutputAction>;
};

/** Financial Transaction */
export type CreateFinancialTransactionInput = {
  amount: Scalars['Float'];
  /**  The card type used for the payment. Possible values are 'MASTERCARD', 'VISA', 'AMEX', 'DINERS', 'SPAN', 'DISCOVER', 'UNIONPAY', 'JCB', 'MAESTRO', 'INTERAC'. */
  cardType?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 3. */
  currency: Scalars['String'];
  externalTransactionCode?: InputMaybe<Scalars['String']>;
  externalTransactionId?: InputMaybe<Scalars['String']>;
  order: OrderId;
  paymentMethod: Scalars['String'];
  paymentProvider?: InputMaybe<Scalars['String']>;
  ref: Scalars['String'];
  /**
   *  Type of the `FinancialTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 25.
   */
  type: Scalars['String'];
};

export type OrderId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

/**  Input type to create a `Fulfilment` */
export type CreateFulfilmentInput = {
  /**  List of `attribute`s */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Represents the associated `Customer` */
  customer?: InputMaybe<CustomerId>;
  /**  Type of delivery. Supported values are _STANDARD_, _OVERNIGHT_ and _EXPRESS_. */
  deliveryType?: InputMaybe<Scalars['String']>;
  /**  Estimated time of completing this fulfilment */
  eta?: InputMaybe<Scalars['String']>;
  /**  Expiry time of the fulfilment */
  expiryTime?: InputMaybe<Scalars['DateTime']>;
  /**  Represents `Address` fulfilling this fulfilment */
  fromAddress?: InputMaybe<AddressId>;
  /**  List of `FulfilmentItem`s */
  items?: InputMaybe<Array<InputMaybe<CreateFulfilmentItemWithFulfilmentInput>>>;
  /**  Represents the associated `Order` */
  order: OrderId;
  /**  External reference. Recommended to be unique. */
  ref: Scalars['String'];
  /**  Represents the delivery `Address` */
  toAddress?: InputMaybe<AddressId>;
  /**
   *  Type of the `Fulfilment`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of fulfilment. Supported types are <br/>
   *  - *CC_PFS* for Click & Collect - Pick from Store
   *  - *CC_PFDC* for Click & Collect - Pick from DC
   *  - *HD_PFS* for Home Delivery - Pick from Store
   *  - *HD_PFDC* for Home Delivery - Pick from DC
   */
  type: Scalars['String'];
};

export type CustomerId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

export type AddressId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

/**  Input type to create a `FulfilmentItem` with a `Fulfilment`. Intended to be used as an inline input in the _createFulfilment_ mutation. */
export type CreateFulfilmentItemWithFulfilmentInput = {
  /**  Number of `OrderItem`s confirmed */
  filledQuantity: Scalars['Int'];
  /**  Associated `OrderItem` */
  orderItem: OrderItemId;
  /**  External reference. Recommended to be unique. */
  ref: Scalars['String'];
  /**  Number of `OrderItem`s rejected */
  rejectedQuantity: Scalars['Int'];
  /**  Number of `OrderItem`s assigned to the fulfilment */
  requestedQuantity?: InputMaybe<Scalars['Int']>;
};

export type OrderItemId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

export enum ExecutionMode {
  AwaitOrchestration = 'AWAIT_ORCHESTRATION'
}

/**  Input type to create a `FulfilmentOption` object. */
export type CreateFulfilmentOptionInput = {
  /**  A type for passing address. Can be used as an input in creating Fulfilment Plans. */
  address?: InputMaybe<CreateFulfilmentOptionAddressInput>;
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**
   *  The reference identifier for a location. May be used in orchestration rules to drive custom business logic. For example, you can have a rule to return plans only from this
   *   location or a rule to return plans from all locations but excluding this one.
   */
  locationRef?: InputMaybe<Scalars['String']>;
  /**  Type of order. For example _click & collect (CC)_ or _home delivery (HD)_ */
  orderType?: InputMaybe<Scalars['String']>;
  /**  Products being queried for availability */
  products?: InputMaybe<Array<InputMaybe<CreateFulfilmentOptionProductInput>>>;
  /**  External reference. Recommended to be unique. */
  ref: Scalars['String'];
  /**  ID of the `Retailer`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  retailerId: Scalars['Int'];
  /**  A unique identifier for the clients to group related Fulfilment Plans. */
  trackingCode?: InputMaybe<Scalars['String']>;
  /**  Type of the `FulfilmentOption`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
};

/**  Address type to be used in `FulfilmentOption` */
export type CreateFulfilmentOptionAddressInput = {
  /**  First address line */
  addressLine1?: InputMaybe<Scalars['String']>;
  /**  Second address line */
  addressLine2?: InputMaybe<Scalars['String']>;
  /**
   *  City or Town. <br/>
   *  Max character limit: 45.
   */
  city?: InputMaybe<Scalars['String']>;
  /**
   *  Company Name. <br/>
   *  Max character limit: 45.
   */
  companyName?: InputMaybe<Scalars['String']>;
  /**
   *  Country. <br/>
   *  Max character limit: 100.
   */
  country?: InputMaybe<Scalars['String']>;
  /**  Geographical coordinate that specifies the north–south position of a point on the Earth's surface */
  latitude?: InputMaybe<Scalars['Float']>;
  /**  Geographical coordinate that specifies the east–west position of a point on the Earth's surface */
  longitude?: InputMaybe<Scalars['Float']>;
  /**  Name */
  name?: InputMaybe<Scalars['String']>;
  /**
   *  Postcode or Zipcode. <br/>
   *  Max character limit: 100.
   */
  postcode?: InputMaybe<Scalars['String']>;
  /**
   *  State or County. <br/>
   *  Max character limit: 100.
   */
  state?: InputMaybe<Scalars['String']>;
};

/**  Input type to create a `FulfilmentOptionProduct`. */
export type CreateFulfilmentOptionProductInput = {
  /**  A reference to identify the catalogue for the product */
  catalogueRef?: InputMaybe<Scalars['String']>;
  /**  A reference to identify a Product */
  productRef: Scalars['String'];
  /**  The requested quantity for the product */
  requestedQuantity?: InputMaybe<Scalars['Int']>;
};

/**  Input type to create a `FulfilmentPlan` object. */
export type CreateFulfilmentPlanInput = {
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  ETA of the `FulfilmentPlan`. Although this can be set explicitly, we recommend that this be determined and set in the workflow. */
  eta?: InputMaybe<Scalars['String']>;
  /**  A list of exceptions. */
  exceptions?: InputMaybe<Array<InputMaybe<CreateFulfilmentPlanExceptionInput>>>;
  /**  associated `FulfilmentOption` object */
  fulfilmentOptionId: FulfilmentOptionId;
  /**  Represents fulfilments under this Fulfilment Plan */
  fulfilments?: InputMaybe<Array<InputMaybe<CreateFulfilmentPlanFulfilmentInput>>>;
  /**  External reference. Recommended to be unique. */
  ref: Scalars['String'];
  /**  ID of the retailer */
  retailerId: Scalars['Int'];
  /**  Order split limits */
  splits?: InputMaybe<Scalars['Int']>;
  /**  Type of the `FulfilmentPlan`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
};

/**  Input type to create a new `FulfilmentPlanException` type */
export type CreateFulfilmentPlanExceptionInput = {
  /**  Attributes may contain useful information about the exception */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The exception code */
  code?: InputMaybe<Scalars['String']>;
  /**  The english like description of the exception */
  message?: InputMaybe<Scalars['String']>;
};

export type FulfilmentOptionId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

/**  Represents a fulfilment under a `FulfilmentPlan` */
export type CreateFulfilmentPlanFulfilmentInput = {
  /**  ETA of the `FulfilmentPlan` as configured in the workflow */
  eta?: InputMaybe<Scalars['String']>;
  /**  Type of fulfilment. */
  fulfilmentType?: InputMaybe<Scalars['String']>;
  /**  List of products with their requested and available quantities */
  items?: InputMaybe<Array<InputMaybe<CreateFulfilmentPlanFulfilmentItemInput>>>;
  /**  Reference to identify the fulfilment location for this fulfilment. */
  locationRef?: InputMaybe<Scalars['String']>;
};

/**  Input type to create `FulfilmentPlanFulfilmentItem`. */
export type CreateFulfilmentPlanFulfilmentItemInput = {
  /**  Quantity of the product available as per the plan */
  availableQuantity: Scalars['Int'];
  /**  A reference to identify the Catalogue */
  catalogueRef?: InputMaybe<Scalars['String']>;
  /**  External reference of the product. */
  productRef: Scalars['String'];
  /**  Requested quantity of the product. */
  requestedQuantity: Scalars['Int'];
};

/**
 *  Input parameter for the `createGroupProduct` mutation. A group product `ref` should be unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `GroupProduct` record. <br /><br />
 *  The following default values will be set on creation:
 *  * `status` = `CREATED`
 *  * `workflowRef` = `PRODUCT_CATALOGUE::<product_catalogue.type>`
 *  * `workflowVersion` = `<Workflow.majorVersion>.<Workflow.minorVersion>` . <br /><br />
 *  After data persistence, an orchestration event will be fired providing the opportunity to perform business logic within a workflow. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type CreateGroupProductInput = {
  /**  A list of attributes associated with this Product. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogueKey;
  /**  A list of references to the `Category`'s to which this `Product` relates. Product categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The `Category` must already exist. */
  categories?: InputMaybe<Array<InputMaybe<CategoryKey>>>;
  /**  The name of the Product */
  name: Scalars['String'];
  /**  A list of Prices for this Product */
  prices?: InputMaybe<Array<InputMaybe<PriceInput>>>;
  /**  A list of Products within the group */
  products?: InputMaybe<Array<InputMaybe<ProductKey>>>;
  /**
   *  The unique reference identifier for the Product. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  A short description of the Product (max 255 chars) */
  summary?: InputMaybe<Scalars['String']>;
  /**  The tax information for this Product */
  taxType?: InputMaybe<TaxTypeInput>;
  /**
   *  Type of the `GroupProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**  Input structure for creating or updating `Price`'s on a `Product`. If `type` and `currency` match, it will UPDATE, otherwise it will CREATE. All fields are required. */
export type PriceInput = {
  currency: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['Float'];
};

/**
 *  Input parameter for the `createInventoryCatalogue` mutation. The `ref` field will be the unique identifier for this catalogue. <br /><br />
 *  The following default values will be set on creation:
 *  * `status` = `CREATED`
 *  * `workflowRef` = `INVENTORY_CATALOGUE::<inventory_catalogue.type>`
 *  * `workflowVersion` = `<Workflow.majorVersion>.<Workflow.minorVersion>` . <br /><br />
 *  After data persistence, an orchestration event will be fired providing the opportunity to perform business logic within a workflow. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type CreateInventoryCatalogueInput = {
  /**  A list of attributes associated with this Inventory Catalogue. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  A short description of the Inventory Catalogue */
  description?: InputMaybe<Scalars['String']>;
  /**  The name of the Inventory Catalogue */
  name: Scalars['String'];
  /**
   *  The unique reference identifier for the Inventory Catalogue. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  A list of Retailer references associated with this Inventory Catalogue */
  retailerRefs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   *  Type of the `InventoryCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**
 *  Input parameter for the `createInventoryPosition` mutation. An inventory position `ref` should be unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `InventoryPosition` record. <br /><br />
 *  The following default values will be set on creation:
 *  * `status` = `CREATED`
 *  * `workflowRef` = `INVENTORY_CATALOGUE::<inventory_catalogue.type>`
 *  * `workflowVersion` = `<Workflow.majorVersion>.<Workflow.minorVersion>` . <br /><br />
 *  After data persistence, an orchestration event will be fired providing the opportunity to perform business logic within a workflow. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type CreateInventoryPositionInput = {
  /**  A list of attributes associated with this Inventory Position. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The Inventory Catalogue in which this Position is managed */
  catalogue: InventoryCatalogueKey;
  /**  A reference identifying the Location where this inventory exists. This is a loosely coupled association. */
  locationRef: Scalars['String'];
  /**  The calculated on hand quantity based on the associated quantities, and rules in the orchestration workflow */
  onHand?: InputMaybe<Scalars['Int']>;
  /**  A reference identifying a Product. The referenced product may or may not exist within one or more Product Catalogues. This is a loosely coupled association, since Product and Inventory are separate domains. */
  productRef: Scalars['String'];
  /**  A list of Inventory Quantities associated with this Position */
  quantities?: InputMaybe<Array<InputMaybe<InventoryQuantityKey>>>;
  /**
   *  The unique reference identifier for the Inventory Position. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  Type of the `InventoryPosition`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**  The `InventoryQuantityKey` input is the parameter for identifying a specific Inventory Quantity. */
export type InventoryQuantityKey = {
  /**  The Inventory Catalogue in which this Quantity resides */
  catalogue: InventoryCatalogueKey;
  /**
   *  Inventory Quantity reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
};

/**
 *  Input parameter for the `createInventoryQuantity` mutation. An inventory quantity `ref` should be unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `InventoryQuantity` record. <br /><br />
 *  The following default values will be set on creation:
 *  * `status` = `CREATED`
 *  * `workflowRef` = `INVENTORY_CATALOGUE::<inventory_catalogue.type>`
 *  * `workflowVersion` = `<Workflow.majorVersion>.<Workflow.minorVersion>` . <br /><br />
 *  After data persistence, an orchestration event will be fired providing the opportunity to perform business logic within a workflow. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type CreateInventoryQuantityInput = {
  /**  A list of attributes associated with this Inventory Quantity. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The Inventory Catalogue in which this Position is managed */
  catalogue: InventoryCatalogueKey;
  /**  The condition of the Inventory Quantity value. The platform does not enforce any values here. Examples could include `NEW`, `USED`, or `DAMAGED` */
  condition?: InputMaybe<Scalars['String']>;
  /**  The date and time the quantity is expected to arrive */
  expectedOn?: InputMaybe<Scalars['DateTime']>;
  /**  The associated parent Inventory Position of which this Quantity applies */
  position: InventoryPositionKey;
  /**  The actual amount of this specific Quantity record */
  quantity: Scalars['Int'];
  /**
   *  The unique reference identifier for the Inventory Quantity. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  A reference to the Storage Area where this inventory is kept. <br/>
   *  Max character limit: 100.
   */
  storageAreaRef?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `InventoryQuantity`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**  `CreateInvoiceInput` */
export type CreateInvoiceInput = {
  /**  A list of attributes associated with the `Invoice`. This can be used to extend the existing data structure with additional data. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The `BillingAccount` associated with the `Invoice`. */
  billingAccount: BillingAccountKey;
  /**
   *  Reference to the `Currency`
   *  The default Tax Type for this invoice. Individual invoice items can override.
   */
  currency: CurrencyKey;
  /**  Default tax type */
  defaultTaxType: TaxTypeInput;
  /**  Due date of the `Invoice` */
  dueDate?: InputMaybe<Scalars['DateTime']>;
  /**  Reference to the `Fulfilment` associated with this `Invoice`. */
  fulfilment?: InputMaybe<FulfilmentLinkInput>;
  /**  Issue date of the `Invoice` */
  issueDate: Scalars['DateTime'];
  /**  The `InvoiceItem`s associated with this `Invoice`. */
  items?: InputMaybe<Array<InputMaybe<CreateInvoiceItemWithInvoiceInput>>>;
  /**  Reference to the `Order` associated with this `Invoice`. */
  order?: InputMaybe<OrderLinkInput>;
  /**
   *  External reference to the `Invoice`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  The total amount of this invoice excluding tax. */
  subTotalAmount: AmountTypeInput;
  /**  The total amount of this invoice including tax */
  totalAmount: AmountTypeInput;
  /**  The total amount of this invoice yet to be paid. (This caters for multi-part payments and payment milestones) */
  totalBalance: AmountTypeInput;
  /**  The total amount of tax for this invoice */
  totalTax: AmountTypeInput;
  /**
   *  Type of the `Invoice`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**  Input type to create an `InvoiceItem` with an `Invoice`. Intended to be used as an inline input in the createInvoice_mutation. */
export type CreateInvoiceItemWithInvoiceInput = {
  /**  The item amount for this item excluding tax */
  amount: AmountTypeInput;
  /**  Description of the `InvoiceItem`. */
  description?: InputMaybe<Scalars['String']>;
  /**  Reference to the `Product` associated with this object. */
  product?: InputMaybe<ProductKey>;
  /**
   *  External reference to the `InvoiceItem`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount: AmountTypeInput;
  /**
   *  Type of the `InvoiceItem`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
  /**  The unit price of the source item. */
  unitAmount: AmountTypeInput;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity: QuantityTypeInput;
  /**  The tax type of this item. Should only be provided if different to the default invoice tax type. */
  unitTaxType?: InputMaybe<TaxTypeInput>;
};

/**  Input type to create an `InvoiceItem` after the `Invoice` creation. */
export type CreateInvoiceItemInput = {
  /**  The item amount for this item excluding tax */
  amount: AmountTypeInput;
  /**  Description of the `InvoiceItem`. */
  description?: InputMaybe<Scalars['String']>;
  /**  The `Invoice` this object is associated with */
  invoice: InvoiceKey;
  /**  Reference to the `Product` associated with this object. */
  product?: InputMaybe<ProductKey>;
  /**
   *  External reference to the `InvoiceItem`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount: AmountTypeInput;
  /**
   *  Type of the `InvoiceItem`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
  /**  The unit price of the source item. */
  unitAmount: AmountTypeInput;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity: QuantityTypeInput;
  /**  The tax type of this item. Should only be provided if different to the default invoice tax type. */
  unitTaxType?: InputMaybe<TaxTypeInput>;
};

export type CreateLocationInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Max character limit: 50. */
  defaultCarrier?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  name: Scalars['String'];
  networks?: InputMaybe<Array<InputMaybe<NetworkId>>>;
  openingSchedule: CreateOpeningScheduleInput;
  primaryAddress: CreateStoreAddressInput;
  /**  Max character limit: 100. */
  ref: Scalars['String'];
  retailer: RetailerId;
  storageAreas?: InputMaybe<Array<InputMaybe<CreateStorageAreaWithLocationInput>>>;
  /**  Max character limit: 20. */
  supportPhoneNumber?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 25. */
  type: Scalars['String'];
};

export type NetworkId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

/** OpeningSchedule */
export type CreateOpeningScheduleInput = {
  allHours: Scalars['Boolean'];
  friEnd: Scalars['Int'];
  friStart: Scalars['Int'];
  monEnd: Scalars['Int'];
  monStart: Scalars['Int'];
  satEnd: Scalars['Int'];
  satStart: Scalars['Int'];
  sunEnd: Scalars['Int'];
  sunStart: Scalars['Int'];
  thuEnd: Scalars['Int'];
  thuStart: Scalars['Int'];
  tueEnd: Scalars['Int'];
  tueStart: Scalars['Int'];
  wedEnd: Scalars['Int'];
  wedStart: Scalars['Int'];
};

export type CreateStoreAddressInput = {
  /**  Max character limit: 45. */
  city?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 45. */
  companyName?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  country?: InputMaybe<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  postcode?: InputMaybe<Scalars['String']>;
  ref: Scalars['String'];
  /**  Max character limit: 250. */
  region?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 200. */
  state?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  street?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 32. */
  timeZone?: InputMaybe<Scalars['String']>;
};

export type CreateStorageAreaWithLocationInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  ref: Scalars['String'];
  /**  Max character limit: 50. */
  type?: InputMaybe<Scalars['String']>;
};

/**  Input for the `createManifest` mutation. */
export type CreateManifestInput = {
  /**  A list of attributes associated with the `Manifest`. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**
   *  Reference to the `Carrier` the `Manifest` is for <br/>
   *  Max character limit: 100.
   */
  carrier: CarrierKey;
  /**  A list of references to the `Consignment`'s the `Manifest` contains. */
  carrierConsignments?: InputMaybe<Array<InputMaybe<CarrierConsignmentKey>>>;
  /**  The link where the carrier's manifest is stored. Not all the carriers generates one, so this field is optional. */
  carrierManifestLink?: InputMaybe<Scalars['String']>;
  /**  The `Location` the `Manifest` is associated with */
  location: LocationKey;
  /**  The name of the `Manifest` */
  name: Scalars['String'];
  /**
   *  External reference for the `Manifest`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The type of `Manifest`. <br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**  Input type to uniquely identify a `Carrier` */
export type CarrierKey = {
  /**
   *  Reference of the object. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
};

/**  Input type to create a `Network` */
export type CreateNetworkInput = {
  /**  List of the network's `attribute`s */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  List of `location`s within this network */
  locations?: InputMaybe<Array<InputMaybe<LocationId>>>;
  /**
   *  Name of the network. Recommended to be unique as this is used as the reference for the network. <br/>
   *  Max character limit: 100.
   */
  name: Scalars['String'];
  /**  List of `retailer`s associated with this network */
  retailers: Array<RetailerId>;
  /**
   *  Type of the network. For example you could use _CC_ for _Click and Collect_ or _HD_ for _Home Delivery_. These types can be defined by the user and used by the Orchestration
   *  Engine to determine the workflow that should be applied <br/>
   *  Max character limit: 15.
   */
  type?: InputMaybe<Scalars['String']>;
};

export type LocationId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

/**  Input type to create an `Order` */
export type CreateOrderInput = {
  /**  List of order `attribute`s */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  `ID` of the `Customer` for the order */
  customer: CustomerId;
  /**  `FulfilmentChoice` for the order */
  fulfilmentChoice?: InputMaybe<CreateFulfilmentChoiceWithOrderInput>;
  /**  A list of `OrderItem`s for this order */
  items: Array<InputMaybe<CreateOrderItemWithOrderInput>>;
  /**  The 'Payment' associated with this `Order` */
  payment?: InputMaybe<PaymentKey>;
  /**  External reference for the order. Must be unique. */
  ref: Scalars['String'];
  /**  `Retailer` for the order */
  retailer: RetailerId;
  /**  Total price */
  totalPrice?: InputMaybe<Scalars['Float']>;
  /**  Total tax price */
  totalTaxPrice?: InputMaybe<Scalars['Float']>;
  /**
   *  Type of the `Order`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type. Currently supports values _CC_, _SFS_, _HD_ for _Click and Collect_, _Ship from Store_ and _Home Delivery_ type orders respectively.
   */
  type: Scalars['String'];
};

/** FulfilmentChoice */
export type CreateFulfilmentChoiceWithOrderInput = {
  currency?: InputMaybe<Scalars['String']>;
  deliveryAddress?: InputMaybe<CreateCustomerAddressInput>;
  deliveryInstruction?: InputMaybe<Scalars['String']>;
  deliveryType: Scalars['String'];
  fulfilmentPrice?: InputMaybe<Scalars['Float']>;
  fulfilmentTaxPrice?: InputMaybe<Scalars['Float']>;
  fulfilmentType?: InputMaybe<Scalars['String']>;
  pickupLocationRef?: InputMaybe<Scalars['String']>;
};

/**  Input type to create an `OrderItem` with an `Order`. Intended to be used as an inline input in the _createOrder_ mutation. */
export type CreateOrderItemWithOrderInput = {
  /**  List of `OrderItem` `attribute`s. There's expected a JSON object */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Currency. Should ideally be a 3 letter ISO currency code. For instance _AUD_. */
  currency?: InputMaybe<Scalars['String']>;
  /**  Price paid. Excludes tax. */
  paidPrice?: InputMaybe<Scalars['Float']>;
  /**  Price */
  price?: InputMaybe<Scalars['Float']>;
  /**
   *  External reference for the product catalogue containing the associated product (specified using the `productRef` in this object).
   *  A product is always associated with a catalogue, that's why we recommend that you always pass a `productCatalogueRef`.
   *  However, if you are using the compatibility catalogue, you don't need to pass in this value as that's the default catalogue
   */
  productCatalogueRef?: InputMaybe<Scalars['String']>;
  /**  External reference for the associated product. */
  productRef: Scalars['String'];
  /**  Quantity ordered */
  quantity: Scalars['Int'];
  /**  External reference for the object. Recommended to be unique. */
  ref: Scalars['String'];
  /**  Tax price */
  taxPrice?: InputMaybe<Scalars['Float']>;
  /**  Tax type. Supported values are _GST_, _VAT_, _EXCLTAX_. */
  taxType?: InputMaybe<Scalars['String']>;
  /**  Total price */
  totalPrice?: InputMaybe<Scalars['Float']>;
  /**  Total tax price */
  totalTaxPrice?: InputMaybe<Scalars['Float']>;
};

/**  Input type to uniquely identify a `Payment` object. We use all the fields present in the request to look for this object. */
export type PaymentKey = {
  /**  The client's reference identifier for the object */
  ref: Scalars['String'];
};

/**  Input type to create an `Order` while creating a new `Customer` in a single request */
export type CreateOrderAndCustomerInput = {
  /**  List of order's `attribute`s */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  `Customer` for the order */
  customer: CreateCustomerInput;
  /**  `FulfilmentChoice` for the order */
  fulfilmentChoice?: InputMaybe<CreateFulfilmentChoiceWithOrderInput>;
  /**  A list of `OrderItem`s for this order */
  items: Array<InputMaybe<CreateOrderItemWithOrderInput>>;
  /**  The 'Payment' associated with this `Order` */
  payment?: InputMaybe<PaymentKey>;
  /**  External reference for the order. Must be unique. */
  ref: Scalars['String'];
  /**  `Retailer` for the order */
  retailer: RetailerId;
  /**  Total price */
  totalPrice?: InputMaybe<Scalars['Float']>;
  /**  Total tax price */
  totalTaxPrice?: InputMaybe<Scalars['Float']>;
  /**
   *  Type of the `Order`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type. Currently supports values _CC_, _SFS_, _HD_ for _Click and Collect_, _Ship from Store_ and _Home Delivery_ type orders respectively
   */
  type: Scalars['String'];
};

/**
 *  `CreateOrderItemInput` is used to create an `OrderItem` separately of the `Order` creation.
 *  Intended to be used for order items exchanges, to add `OrderItem`s after the `Order` has been created.
 */
export type CreateOrderItemInput = {
  /**  List of `OrderItem` `attribute`s. There's expected a JSON object */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Currency. Should ideally be a 3 letter ISO currency code. For instance _AUD_. */
  currency?: InputMaybe<Scalars['String']>;
  /**  Contains the reference to the `Order` this item will be added to. */
  order: OrderKey;
  /**  Price paid. Excludes tax. */
  paidPrice?: InputMaybe<Scalars['Float']>;
  /**  Price */
  price?: InputMaybe<Scalars['Float']>;
  /**
   *  External reference for the product catalogue containing the associated product (specified using the `productRef` in this object).
   *  A product is always associated with a catalogue, that's why we recommend that you always pass a `productCatalogueRef`.
   *  However, if you are using the compatibility catalogue, you don't need to pass in this value as that's the default catalogue
   */
  productCatalogueRef: Scalars['String'];
  /**  External reference for the associated product. Use together with productCatalogueRef to identify a particular `Product` */
  productRef: Scalars['String'];
  /**  Quantity ordered */
  quantity: Scalars['Int'];
  /**  External reference for the object. Recommended to be unique. */
  ref: Scalars['String'];
  /**  Tax price */
  taxPrice?: InputMaybe<Scalars['Float']>;
  /**  Tax type. Supported values are _GST_, _VAT_, _EXCLTAX_. */
  taxType?: InputMaybe<Scalars['String']>;
  /**  Total price */
  totalPrice?: InputMaybe<Scalars['Float']>;
  /**  Total tax price */
  totalTaxPrice?: InputMaybe<Scalars['Float']>;
};

/**  The `OrderKey` input identify the `Order` using either the id or the external reference to the object */
export type OrderKey = {
  /**  ID of the `Order` */
  id?: InputMaybe<Scalars['ID']>;
  /**  External reference of the `Order`. */
  ref?: InputMaybe<Scalars['String']>;
};

/**  Input type to create a `Payment`. */
export type CreatePaymentInput = {
  /**  The total amount of this `Payment` */
  amount: AmountTypeInput;
  /**  A list of attributes associated with the `Payment`. This can be used to extend the existing data structure with additional data. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The `BillingAccount` associated with this `Payment`. */
  billingAccount?: InputMaybe<BillingAccountKey>;
  /**  The `PaymentTransaction`s associated with this `Payment`. */
  paymentTransactions?: InputMaybe<Array<CreatePaymentTransactionWithPaymentInput>>;
  /**
   *  External reference for the `Payment`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Retailer associated to the `Payment`. */
  retailer: RetailerId;
  /**
   *  The current status of the `Payment`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Status of the `Payment`. <br/>
   *  Max character limit: 25.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `Payment`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the `Payment`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 25.
   */
  type: Scalars['String'];
};

/**  Input type to create one or more `PaymentTransaction` when a `Payment` is created. */
export type CreatePaymentTransactionWithPaymentInput = {
  /**  The total amount of this `PaymentTransaction` */
  amount: AmountTypeInput;
  /**  A list of attributes associated with the `PaymentTransaction`. This can be used to extend the existing data structure with additional data. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The Authorization Key of this `PaymentTransaction` if it is of 'PreAuth' */
  authorizationKey?: InputMaybe<Scalars['String']>;
  /**  The Card type used in this `PaymentTransaction`. Some example values are: 'MASTERCARD', 'VISA', 'AMEX', 'DINERS', 'SPAN', 'DISCOVER', 'UNIONPAY', 'JCB', 'MAESTRO', 'INTERAC'. */
  cardType?: InputMaybe<Scalars['String']>;
  /**  The currency used in this `Payment`. */
  currency: CurrencyKey;
  /**  The payment method used in this `PaymentTransaction`. Some example values are: 'CREDITCARD', 'GIFTCARD', 'COUPON'. */
  paymentMethod: Scalars['String'];
  /**  The payment servicer provider for this `PaymentTransaction` */
  paymentServiceProvider: PaymentServiceProviderKey;
  /**
   *  External reference to the `PaymentTransaction`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  Status of the `PaymentTransaction`. <br/>
   *  Max character limit: 25.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `PaymentTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Common types that are used are: CAPTURE
   * REFUND, AUTHORIZATION. <br/>
   *  Max character limit: 25.
   */
  type: Scalars['String'];
};

/**  Input type to uniquely identify a `PaymentServiceProvider` object. We use all the fields present in the request to look for this object. */
export type PaymentServiceProviderKey = {
  /**  The client's reference identifier for the object */
  ref: Scalars['String'];
};

/**  Input type to create a `PaymentServiceProvider`. */
export type CreatePaymentServiceProviderInput = {
  /**  A list of attributes associated with the `PaymentServiceProvider`. This can be used to extend the existing data structure with additional data. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**
   *  The ClientId of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 25.
   */
  clientId: Scalars['String'];
  /**
   *  The Client Secret of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  clientSecret: Scalars['String'];
  /**
   *  The host name of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  host: Scalars['String'];
  /**
   *  Name of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  name?: InputMaybe<Scalars['String']>;
  /**  The port of the `PaymentServiceProvider` */
  port: Scalars['Int'];
  /**
   *  External reference to the `PaymentServiceProvider`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Retailer associated to the `PaymentServiceProvider`. */
  retailer: RetailerId;
  /**
   *  The Authorization Key of this `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  serviceAuthToken: Scalars['String'];
};

/**  Input type to create a `PaymentTransaction`. */
export type CreatePaymentTransactionInput = {
  /**  The total amount of this `PaymentTransaction` */
  amount: AmountTypeInput;
  /**  A list of attributes associated with the `PaymentTransaction`. This can be used to extend the existing data structure with additional data. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**
   *  The Authorization Key of this `PaymentTransaction` if it is of 'PreAuth'. <br/>
   *  Max character limit: 50.
   */
  authorizationKey?: InputMaybe<Scalars['String']>;
  /**
   *  The Card type used in this `PaymentTransaction`. Some example values are: 'MASTERCARD', 'VISA', 'AMEX', 'DINERS', 'SPAN', 'DISCOVER', 'UNIONPAY', 'JCB', 'MAESTRO', 'INTERAC'. <br/>
   *  Max character limit: 25.
   */
  cardType?: InputMaybe<Scalars['String']>;
  /**  The currency used in this `Payment`. */
  currency: CurrencyKey;
  /**  The 'Payment' associated with this `PaymentTransaction` */
  payment: PaymentKey;
  /**
   *  The payment method used in this `PaymentTransaction`. Some example values are: 'CREDITCARD', 'GIFTCARD', 'COUPON'. <br/>
   *  Max character limit: 25.
   */
  paymentMethod: Scalars['String'];
  /**  The payment servicer provider for this `PaymentTransaction` */
  paymentServiceProvider: PaymentServiceProviderKey;
  /**
   *  External reference to the `PaymentTransaction`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The current status of the `PaymentTransaction`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Status of the `PaymentTransaction`. <br/>
   *  Max character limit: 25.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `PaymentTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the `PaymentTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Common types that are used are: CAPTURE
   * REFUND, AUTHORIZATION. <br/>
   *  Max character limit: 25.
   */
  type: Scalars['String'];
};

/**
 *  Input parameter for the `createProductCatalogue` mutation. The `ref` field will be the unique identifier for this catalogue. <br /><br />
 *  The following default values will be set on creation:
 *  * `status` = `CREATED`
 *  * `workflowRef` = `PRODUCT_CATALOGUE::<product_catalogue.type>`
 *  * `workflowVersion` = `<Workflow.majorVersion>.<Workflow.minorVersion>` . <br /><br />
 *  After data persistence, an orchestration event will be fired providing the opportunity to perform business logic within a workflow. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type CreateProductCatalogueInput = {
  /**  A list of attributes associated with this Product Catalogue. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  A short description of the Product Catalogue */
  description?: InputMaybe<Scalars['String']>;
  /**  The name of the Product Catalogue */
  name: Scalars['String'];
  /**
   *  The unique reference identifier for the Product Catalogue. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  A list of Retailer references associated with this Product Catalogue */
  retailerRefs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   *  Type of the `ProductCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/** Retailer */
export type CreateRetailerInput = {
  /**  Max character limit: 45. */
  name: Scalars['String'];
  networks?: InputMaybe<Array<InputMaybe<CreateNetworkWithRetailerInput>>>;
  /**  Max character limit: 250. */
  primaryEmail?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  supportContactName?: InputMaybe<Scalars['String']>;
  supportEmail?: InputMaybe<Scalars['String']>;
  supportPhone?: InputMaybe<Scalars['String']>;
  tradingName?: InputMaybe<Scalars['String']>;
  urlName?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type CreateNetworkWithRetailerInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Max character limit: 100. */
  ref: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};

/**  Input type to create a return fulfilment */
export type CreateReturnFulfilmentInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /** The destination of the return order items */
  destinationLocation: LocationLinkInput;
  /** The lodged location in cases where the return order was directly returned to a store or DC */
  lodgedLocation?: InputMaybe<LocationLinkInput>;
  /** The pickup address in the cases of return orders that are being picked up by a carrier */
  pickupAddress?: InputMaybe<StreetAddressInput>;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /** Add fulfilment items with fulfilment */
  returnFulfilmentItems?: InputMaybe<Array<InputMaybe<CreateReturnFulfilmentItemWithReturnFulfilmentInput>>>;
  /**  Return order reference */
  returnOrder: ReturnOrderKey;
  /**
   *  Type of fulfilment. <br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/** Input type to create a return fulfilment item when creating a return fulfilment */
export type CreateReturnFulfilmentItemWithReturnFulfilmentInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Product reference */
  product?: InputMaybe<ProductKey>;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Return order item reference */
  returnOrderItem: ReturnOrderItemKey;
  /**  Quantity of return fulfilment */
  unitQuantity: QuantityTypeInput;
};

/** Input type to create a return fulfilment item */
export type CreateReturnFulfilmentItemInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /** Product reference */
  product?: InputMaybe<ProductKey>;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /** Return order fulfilment reference */
  returnOrderFulfilment: ReturnFulfilmentKey;
  /**  Reference of return order item */
  returnOrderItem: ReturnOrderItemKey;
  /**  Unit quantity of return fulfilment item */
  unitQuantity: QuantityTypeInput;
};

/**  Input type to create return order */
export type CreateReturnOrderInput = {
  /**  A list of attributes of the return order. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The associated credit memo for this return order */
  creditMemo?: InputMaybe<CreditMemoKey>;
  /**  The currency of this return */
  currency: CurrencyKey;
  /**  Customer reference of the return order. This links the customer to return order */
  customer: CustomerKey;
  /**  The default Tax Type for this return order. Individual return order items can override */
  defaultTaxType: TaxTypeInput;
  /**  The destination of the return order items */
  destinationLocation?: InputMaybe<LocationLinkInput>;
  /**  The associated exchange order managed the exchange item */
  exchangeOrder?: InputMaybe<OrderLinkInput>;
  /**  The lodged location in cases where the return order was directly returned to a store or DC */
  lodgedLocation?: InputMaybe<LocationLinkInput>;
  /**  Linked order for this return order */
  order?: InputMaybe<OrderLinkInput>;
  /**  The pickup address in the cases of return orders that are being picked up by a carrier */
  pickupAddress?: InputMaybe<StreetAddressInput>;
  /**
   *  External reference of the return order. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Retailer reference of return orders */
  retailer: RetailerId;
  /**  The authorised disposition for this return order. This can be different to the return disposition action which reflects the actual action once an item has been inspected */
  returnAuthorisationDisposition?: InputMaybe<SettingValueTypeInput>;
  /**  The generated key representing an authorised return order which the customer can use to progress through the return order proces */
  returnAuthorisationKey?: InputMaybe<Scalars['String']>;
  /**  The time at which the return authorisation expires */
  returnAuthorisationKeyExpiry?: InputMaybe<Scalars['DateTime']>;
  /**  The list of associated return order items */
  returnOrderItems: Array<CreateReturnOrderItemWithReturnOrderInput>;
  /**  List of return verifications associated with the return order */
  returnVerifications?: InputMaybe<Array<InputMaybe<CreateReturnVerificationWithReturnOrderInput>>>;
  /**  The total amount of this return order excluding tax */
  subTotalAmount: AmountTypeInput;
  /**  The total amount of this return order including tax */
  totalAmount: AmountTypeInput;
  /**  The total amount of tax for this return order */
  totalTax: AmountTypeInput;
  /**
   *  Type of the return order. <br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**  Input type to create return order items when creating a return order */
export type CreateReturnOrderItemWithReturnOrderInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Item total amount of returning item */
  itemAmount: AmountTypeInput;
  /**  Item tax amount of the returning item */
  itemTaxAmount: AmountTypeInput;
  /**  Order item of return order item. This field is optional */
  orderItem?: InputMaybe<OrderItemLinkInput>;
  /**  Product reference of return order item */
  product: ProductKey;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  The condition in which the return item was received */
  returnCondition?: InputMaybe<SettingValueTypeInput>;
  /**  An optional comment. Required if the condition code required further information such as 'Other'. */
  returnConditionComment?: InputMaybe<Scalars['String']>;
  /**  The actual disposition action taken for this return item */
  returnDispositionAction?: InputMaybe<SettingValueTypeInput>;
  /**  The actual payment action taken for this return item */
  returnPaymentAction?: InputMaybe<SettingValueTypeInput>;
  /**  Reason for returning the item */
  returnReason?: InputMaybe<SettingValueTypeInput>;
  /**  Additional comments related to the returning item */
  returnReasonComment?: InputMaybe<Scalars['String']>;
  /**
   *  Type. <br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
  /**  Unit price of the returning item */
  unitAmount: AmountTypeInput;
  /**  Return quantity */
  unitQuantity: QuantityTypeInput;
  /**  Unit tax type of the retuning item */
  unitTaxType?: InputMaybe<TaxTypeInput>;
};

export type CreateReturnVerificationWithReturnOrderInput = {
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /** Type */
  type: Scalars['String'];
  /** verification details */
  verificationDetails: Scalars['String'];
};

/**  Input type to create return order items */
export type CreateReturnOrderItemInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Item total amount of returning item */
  itemAmount: AmountTypeInput;
  /**  Item tax amount of the returning item */
  itemTaxAmount: AmountTypeInput;
  /**  Order item of return order item. This field is optional */
  orderItem: OrderItemLinkInput;
  /**  Product reference of return order item */
  product: ProductKey;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  The condition in which the return item was received */
  returnCondition?: InputMaybe<SettingValueTypeInput>;
  /**  An optional comment. Required if the condition code required further information such as 'Other' */
  returnConditionComment?: InputMaybe<Scalars['String']>;
  /**  The actual disposition action taken for this return item */
  returnDispositionAction?: InputMaybe<SettingValueTypeInput>;
  /**  Return order reference */
  returnOrder: ReturnOrderKey;
  /**  The actual payment action taken for this return item */
  returnPaymentAction?: InputMaybe<SettingValueTypeInput>;
  /**  Reason for returning the item */
  returnReason?: InputMaybe<SettingValueTypeInput>;
  /**  Additional comments related to the returning item */
  returnReasonComment?: InputMaybe<Scalars['String']>;
  /**
   *  Status of the return order item. <br/>
   *  Max character limit: 50.
   */
  status: Scalars['String'];
  /**
   *  Type. <br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
  /**  Unit price of the returning item */
  unitAmount: AmountTypeInput;
  /**  Return quantity */
  unitQuantity: QuantityTypeInput;
  /**  Unit tax type of the retuning item */
  unitTaxType?: InputMaybe<TaxTypeInput>;
};

/**  Input type to create a `Role` */
export type CreateRoleInput = {
  /**  Name of the role. Must be unique. */
  name: Scalars['String'];
  /**  A list of permissions to be assigned to the role */
  permissions?: InputMaybe<Array<InputMaybe<PermissionKey>>>;
};

/**  Input type to uniquely identify a `Permission` object. We use all the fields present in the request to look for this object. */
export type PermissionKey = {
  /**  Name of the permission */
  name: Scalars['String'];
};

/**
 *  Input type to create a `Setting`
 *  <br/><br/>**USAGE**<br/>
 *  Use a unique combination of `context` and `contextId` to create settings for various contexts.
 *  Not using a unique combination of those two will result in a _ConstraintViolationException_.
 */
export type CreateSettingInput = {
  /**  The context of the setting. Supported values are ACCOUNT, RETAILER, AGENT or CUSTOMER */
  context: Scalars['String'];
  /**  `ID` of the context type. For instance, use a retailer's ID when using _RETAILER_ context. */
  contextId: Scalars['Int'];
  /**  Value of the setting. Use this if the value is a JSON. */
  lobValue?: InputMaybe<Scalars['Json']>;
  /**  Name of the setting */
  name: Scalars['String'];
  /**  Value of the setting. Use this if the value is NOT a JSON. */
  value?: InputMaybe<Scalars['String']>;
  /**  Data type of the setting's value. Supported types are _LOB_, _STRING_, _INTEGER_, _BOOLEAN_ and _JSON_. */
  valueType: Scalars['String'];
};

/**
 *  Input parameter for the `createStandardProduct` mutation. A standard product `ref` should be unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `StandardProduct` record. <br /><br />
 *  The following default values will be set on creation:
 *  * `status` = `CREATED`
 *  * `workflowRef` = `PRODUCT_CATALOGUE::<product_catalogue.type>`
 *  * `workflowVersion` = `<Workflow.majorVersion>.<Workflow.minorVersion>` . <br /><br />
 *  After data persistence, an orchestration event will be fired providing the opportunity to perform business logic within a workflow. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type CreateStandardProductInput = {
  /**  A list of attributes associated with this Product. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogueKey;
  /**  A list of references to the `Category`'s to which this `Product` relates. Product categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The `Category` must already exist. */
  categories?: InputMaybe<Array<InputMaybe<CategoryKey>>>;
  /**
   *  The Global Trade Item Number (GTIN) for this Product. <br/>
   *  Max character limit: 20.
   */
  gtin: Scalars['String'];
  /**  The name of the Product */
  name: Scalars['String'];
  /**  A list of Prices for this Product */
  prices?: InputMaybe<Array<InputMaybe<PriceInput>>>;
  /**
   *  The unique reference identifier for the Product. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  A short description of the Product (max 255 chars) */
  summary?: InputMaybe<Scalars['String']>;
  /**  The tax information for this Product */
  taxType?: InputMaybe<TaxTypeInput>;
  /**
   *  Type of the `StandardProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
  /**  A list of references to the `VariantProduct`'s to which this `Product` relates. Product variants must be a part of the same `ProductCatalogue` (see `catalogue` field). The `VariantProduct` must already exist. */
  variants?: InputMaybe<Array<InputMaybe<VariantProductKey>>>;
};

/**  The `VariantProductKey` input is the parameter for identifying a specific Variant Product. */
export type VariantProductKey = {
  /**  The Product Catalogue in which this Product resides */
  catalogue: ProductCatalogueKey;
  /**  Max character limit: 100. */
  ref?: InputMaybe<Scalars['String']>;
};

export type CreateStorageAreaInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  location: LocationId;
  ref: Scalars['String'];
  /**  Max character limit: 50. */
  type?: InputMaybe<Scalars['String']>;
};

/**  Creates a new `User` */
export type CreateUserInput = {
  /**
   *  API Key. To be used with the Fluent Widget. <br/>
   *  Max character limit: 128.
   */
  apiKey?: InputMaybe<Scalars['String']>;
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**
   *  Country. <br/>
   *  Max character limit: 100.
   */
  country?: InputMaybe<Scalars['String']>;
  /**  Department */
  department?: InputMaybe<Scalars['String']>;
  /**
   *  User's first name. <br/>
   *  Max character limit: 50.
   */
  firstName: Scalars['String'];
  /**  User language (leave null to allow users to self-select their language preference) */
  language?: InputMaybe<SettingValueTypeInput>;
  /**
   *  User's last name. <br/>
   *  Max character limit: 50.
   */
  lastName?: InputMaybe<Scalars['String']>;
  /**
   *  Password. # **Note** <br /><br />
   *  Please note that password once created can not be retrieved via the API at the moment. We are working on a security model that will enable password viewing to
   *  authenticated customers but until then, we request you to remember the password you created the `User` with. <br/>
   *  Max character limit: 128.
   */
  password: Scalars['String'];
  /**
   *  User's primary email. <br/>
   *  Max character limit: 250.
   */
  primaryEmail: Scalars['String'];
  /**  User's location context */
  primaryLocation?: InputMaybe<LocationId>;
  /**
   *  User's primary phone number. <br/>
   *  Max character limit: 20.
   */
  primaryPhone?: InputMaybe<Scalars['String']>;
  /**  User's retailer context */
  primaryRetailer?: InputMaybe<RetailerId>;
  /**  Determines if the user has opted to receive promotions */
  promotionOptIn?: InputMaybe<Scalars['Boolean']>;
  /**
   *  External reference of the object. Recommended to be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  A list of roles along with their contexts which are to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<UserRoleInput>>>;
  /**
   *  Timezone. <br/>
   *  Max character limit: 32.
   */
  timezone: Scalars['String'];
  /**
   *  The user's title. For example _Mr._, _Miss_, _Dr._, _Ms._ etc <br/>
   *  Max character limit: 50.
   */
  title?: InputMaybe<Scalars['String']>;
  /**  Type of the user. This type is currently supports one of the following three values: _ADMIN_, _RETAILER_, _LOCATION_ */
  type: Scalars['String'];
  /**
   *  Unique name for the user used for identification and logging purposes. <br/>
   *  Max character limit: 250.
   */
  username: Scalars['String'];
};

/**  Input type to assign a `Role` with it's context to the `User` object */
export type UserRoleInput = {
  /**  Context for the role being assigned */
  contexts: Array<RoleContextInput>;
  /**  Input to identify the role to be assigned */
  role: RoleKey;
};

/**  Input type to supply context during assignment of a role */
export type RoleContextInput = {
  /**  Represents the identity of the context object. */
  contextId: Scalars['ID'];
  /**
   *  Represents the type of context. For more information on contexts and how they relate to user and roles,
   *  please visit <a href="https://lingo.fluentretail.com/display/LIN/Flex+Academy+Users" target="_blank">User's section on Lingo</a>.
   */
  contextType: Scalars['String'];
};

/**  Input type to uniquely identify a `Role` object. We use all the fields present in the request to look for this object. */
export type RoleKey = {
  /**  Name of the role which is unique and acts as a key to identify the role itself */
  name: Scalars['String'];
};

/**
 *  Input parameter for the `createVariantProduct` mutation. A variant product `ref` should be unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `VariantProduct` record. <br /><br />
 *  The following default values will be set on creation:
 *  * `status` = `CREATED`
 *  * `workflowRef` = `PRODUCT_CATALOGUE::<product_catalogue.type>`
 *  * `workflowVersion` = `<Workflow.majorVersion>.<Workflow.minorVersion>` . <br /><br />
 *  After data persistence, an orchestration event will be fired providing the opportunity to perform business logic within a workflow. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type CreateVariantProductInput = {
  /**  A list of attributes associated with this Product. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogueKey;
  /**  A list of references to the `Category`'s to which this `Product` relates. Product categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The `Category` must already exist. */
  categories?: InputMaybe<Array<InputMaybe<CategoryKey>>>;
  /**
   *  The Global Trade Item Number (GTIN) for this Product. <br/>
   *  Max character limit: 20.
   */
  gtin: Scalars['String'];
  /**  The name of the Product */
  name: Scalars['String'];
  /**  A list of Prices for this Product */
  prices?: InputMaybe<Array<InputMaybe<PriceInput>>>;
  /**  Associated base 'Product' of this variant */
  product?: InputMaybe<ProductKey>;
  /**
   *  The unique reference identifier for the Product. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  A short description of the Product (max 255 chars) */
  summary?: InputMaybe<Scalars['String']>;
  /**  The tax information for this Product */
  taxType?: InputMaybe<TaxTypeInput>;
  /**
   *  Type of the `VariantProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**
 *  Input parameter for the `createVirtualCatalogue` mutation. The `ref` field will be the unique identifier for this catalogue. <br /><br />
 *  The following default values will be set on creation:
 *  * `status` = `CREATED`
 *  * `workflowVersion` = `<Workflow.majorVersion>.<Workflow.minorVersion>` . <br /><br />
 *  After data persistence, an orchestration event will be fired providing the opportunity to perform business logic within a workflow. <br /><br />
 *  For more information, please refer to the https://lingo.fluentretail.com/display/LIN/Global+Inventory
 */
export type CreateVirtualCatalogueInput = {
  /**  List of Attribute containing meta data information for an entity */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Control group Ref */
  controlGroupRef?: InputMaybe<Scalars['String']>;
  /**  Description */
  description?: InputMaybe<Scalars['String']>;
  /**  Inventory Catalogue used for this virtual catalogue */
  inventoryCatalogueRef: Scalars['String'];
  /**  Name of the inventory catalogue */
  name: Scalars['String'];
  /**  Networks used for this catalogue */
  networkIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**  Product Catalogue used for this virtual catalogue */
  productCatalogueRef: Scalars['String'];
  /**
   *  The reference identifier used to identify an entity. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Retailer refs */
  retailerRefs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   *  Type of the `VirtualCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**
 *  Input parameter for the `createVirtualPosition` mutation. A position `ref` should be unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `inventory position` record. <br /><br />
 *  The following default values will be set on creation:
 *  * `status` = `CREATED`
 *  * `workflowVersion` = `<Workflow.majorVersion>.<Workflow.minorVersion>` . <br /><br /># After data persistence, an orchestration event will be fired providing the opportunity to perform business logic within a workflow. <br /><br />
 *  For more information, please refer to the https://lingo.fluentretail.com/display/LIN/Global+Inventory
 */
export type CreateVirtualPositionInput = {
  /**  List of Attribute containing meta data information for an entity */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Catalogue */
  catalogue: VirtualCatalogueKey;
  /**  Group Reference */
  groupRef?: InputMaybe<Scalars['String']>;
  /**  Product Reference */
  productRef?: InputMaybe<Scalars['String']>;
  /**  Quantity */
  quantity: Scalars['Int'];
  /**
   *  The reference identifier used to identify an entity. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  Type of the `VirtualPosition`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: Scalars['String'];
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type to create a `VirtualView`
 */
export type CreateVirtualViewInput = {
  /**  Description */
  description?: InputMaybe<Scalars['String']>;
  /**  `InventoryCatalogue` associated with the Virtual View. */
  inventoryCatalogueKey: InventoryCatalogueKey;
  /**  Creates inventory controls as a decision table and associate it with this Virtual View. */
  inventoryControls: CreateDecisionTableInput;
  /**  Name */
  name: Scalars['String'];
  /**  `Network` associated with the Virtual View. */
  networkKey: NetworkKey;
  /**  `ProductCatalogue` associated with the Virtual View. */
  productCatalogueKey: ProductCatalogueKey;
  /**  A unique reference for the Virtual View. Note: Virtual View refs do not support the hash (#) character. */
  ref: Scalars['String'];
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type for creating a new decision table
 */
export type CreateDecisionTableInput = {
  /**  Description of the decision table. */
  description?: InputMaybe<Scalars['String']>;
  /**  Name of the table. Please provide a name that will help in identifying the decision table. */
  name: Scalars['String'];
  /**  A connection of `DecisionRule`s. A decision rule is a set of conditions with the corresponding actions. The actions are performed if the conditions evaluate to true.So rules can be created in a single mutation while creating the table. But they can be added later too. */
  rules?: InputMaybe<Array<InputMaybe<CreateDecisionRuleWithDecisionTableInput>>>;
};

/**  Input type to uniquely identify a `Network` object. We use all the fields present in the request to look for this object. */
export type NetworkKey = {
  /**  ID of the object */
  id?: InputMaybe<Scalars['ID']>;
  /**  The client's reference identifier for the object */
  ref?: InputMaybe<Scalars['String']>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Output for create Virtual View mutation
 */
export type CreateVirtualViewOutput = {
  __typename?: 'CreateVirtualViewOutput';
  /**  Current status of the Virtual View */
  status?: Maybe<VirtualViewStatus>;
};

/**  Input type to create a `Wave` */
export type CreateWaveInput = {
  /**  `User` who this wave is assigned to */
  allocatedTo?: InputMaybe<UserId>;
  /**  A list of attributes associated with this wave. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  `Fulfilment`s associated with this wave */
  fulfilments: Array<FulfilmentId>;
  /**  `Location` of the wave operation */
  location: LocationId;
  /**  Name of the wave */
  name?: InputMaybe<Scalars['String']>;
  /**  External reference of the object. Must be unique. */
  ref: Scalars['String'];
  /**  `Retailer` of the wave */
  retailer: RetailerId;
  /**  Type of the `Wave`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: Scalars['String'];
};

export type UserId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

/**  Input type to remove one or more `Category`s from a `GroupProduct` */
export type RemoveCategoriesFromGroupProductInput = {
  /**  Key to identify the `Category` objects to remove */
  categories: Array<CategoryKey>;
  /**  Key to identify the `GroupProduct` object from which to remove the `Category`s */
  groupProduct: GroupProductKey;
};

/**  The `GroupProductKey` input is the parameter for identifying a specific Group Product. */
export type GroupProductKey = {
  /**  The Product Catalogue in which this Product resides */
  catalogue: ProductCatalogueKey;
  /**  Max character limit: 100. */
  ref?: InputMaybe<Scalars['String']>;
};

/**  Output type for removing `Category`s from a `GroupProduct` */
export type RemoveCategoriesFromGroupProductOutput = {
  __typename?: 'RemoveCategoriesFromGroupProductOutput';
  /**  Status of the mutation operation */
  status?: Maybe<Scalars['String']>;
};

/**  Input type to remove one or more `Category`s from a `StandardProduct` */
export type RemoveCategoriesFromStandardProductInput = {
  /**  Key to identify the `Category` objects to remove */
  categories: Array<CategoryKey>;
  /**  Key to identify the `StandardProduct` object from which to remove the `Category`s */
  standardProduct: StandardProductKey;
};

/**  The `StandardProductKey` input is the parameter for identifying a specific Standard Product. */
export type StandardProductKey = {
  /**  The Product Catalogue in which this Product resides */
  catalogue: ProductCatalogueKey;
  /**  Max character limit: 100. */
  ref?: InputMaybe<Scalars['String']>;
};

/**  Output type for removing `Category`s from a `StandardProduct` */
export type RemoveCategoriesFromStandardProductOutput = {
  __typename?: 'RemoveCategoriesFromStandardProductOutput';
  /**  Status of the mutation operation */
  status?: Maybe<Scalars['String']>;
};

/**  Input type to remove one or more `Category`s from a `VariantProduct` */
export type RemoveCategoriesFromVariantProductInput = {
  /**  Key to identify the `Category` objects to remove */
  categories: Array<CategoryKey>;
  /**  Key to identify the `VariantProduct` object from which to remove the `Category`s */
  variantProduct: VariantProductKey;
};

/**  Output type for removing `Category`s from a `VariantProduct` */
export type RemoveCategoriesFromVariantProductOutput = {
  __typename?: 'RemoveCategoriesFromVariantProductOutput';
  /**  Status of the mutation operation */
  status?: Maybe<Scalars['String']>;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type to remove the decision rule
 */
export type RemoveDecisionRuleInput = {
  /**  ID of the rule that is to be removed */
  decisionRuleId: Scalars['ID'];
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Output type of the `removeDecisionRule` mutation
 */
export type RemoveDecisionRuleOutput = {
  __typename?: 'RemoveDecisionRuleOutput';
  /**  Status of the mutation operation */
  status?: Maybe<Scalars['String']>;
};

/**  Input type to remove one or more `Location`s from a `Network` */
export type RemoveLocationsFromNetworkInput = {
  /**  Key to identify the `Location` objects to remove */
  locations: Array<LocationKey>;
  /**  Key to identify the `Network` object from which to remove the `Location`s */
  network: NetworkKey;
};

/**  Output type for removing `Location`s from a `Network` */
export type RemoveLocationsFromNetworkOutput = {
  __typename?: 'RemoveLocationsFromNetworkOutput';
  /**  Status of the mutation operation */
  status?: Maybe<Scalars['String']>;
};

/**  Input type to remove one or more `Network`s from a `Location` */
export type RemoveNetworksFromLocationInput = {
  /**  Key to identify the `Location` object from which to remove the `Network`s */
  location: LocationKey;
  /**  Key to identify the `Network` objects to remove */
  networks: Array<NetworkKey>;
};

/**  Output type for removing `Network`s from a `Location` */
export type RemoveNetworksFromLocationOutput = {
  __typename?: 'RemoveNetworksFromLocationOutput';
  /**  Status of the mutation operation */
  status?: Maybe<Scalars['String']>;
};

/**  Input type to remove one or more `Permission`s from a `Role` */
export type RemovePermissionsFromRoleInput = {
  /**  Key to identify the `Permission` objects to remove */
  permissions: Array<PermissionKey>;
  /**  Key to identify the `Role` object from which to remove the `Permission`s */
  role: RoleKey;
};

/**  Output type for removing `Permission`s from a `Role` */
export type RemovePermissionsFromRoleOutput = {
  __typename?: 'RemovePermissionsFromRoleOutput';
  /**  Status of the mutation operation */
  status?: Maybe<Scalars['String']>;
};

/**  Input type to remove one or more `UserRole`s from an `User` */
export type RemoveUserRolesFromUserInput = {
  /**  Key to identify the `UserRole` objects to remove */
  roles: Array<UserRoleKey>;
  /**  Key to identify the `User` object from which to remove the `UserRole`s */
  user: UserKey;
};

/**  Input type to uniquely identify an `UserRole` object. We use all the fields present in the request to look for this object. */
export type UserRoleKey = {
  /**  Key to identify the `RoleContext` objects to remove */
  contexts: Array<RoleContextKey>;
  /**  Key to identify the `Role` object from which to remove the `RoleContext` */
  role: RoleKey;
};

/**  Input type to uniquely identify a `RoleContext` object. We use all the fields present in the request to look for this object. */
export type RoleContextKey = {
  /**  Represents the identity of the context object. */
  contextId: Scalars['ID'];
  /**  Represents the type of context. For more information on contexts and how they relate to user and roles, please visit <a href="https://lingo.fluentretail.com/display/LIN/Flex+Academy+Users" target="_blank">User's section on Lingo</a>. */
  contextType: Scalars['String'];
};

/**  Input type to uniquely identify an `User` object. We use all the fields present in the request to look for this object. */
export type UserKey = {
  /**  ID of the object */
  id?: InputMaybe<Scalars['ID']>;
  /**  Unique name for the user used for identification and logging purposes. */
  username?: InputMaybe<Scalars['String']>;
};

/**  Output type for removing `UserRole`s from an `User` */
export type RemoveUserRolesFromUserOutput = {
  __typename?: 'RemoveUserRolesFromUserOutput';
  /**  Status of the mutation operation */
  status?: Maybe<Scalars['String']>;
};

export type UpdateArticleInput = {
  /**  Max character limit: 30. */
  articleNumber?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Max character limit: 50. */
  barcodeArticleNumber?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 256. */
  description?: InputMaybe<Scalars['String']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  height?: InputMaybe<Scalars['Float']>;
  /**  ID of the object */
  id: Scalars['ID'];
  length?: InputMaybe<Scalars['Float']>;
  /**  Max character limit: 256. */
  name?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  purchaseValue?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  /**
   *  The current status of the `Article`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 30.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `Article`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type UpdateBillingAccountInput = {
  /**  Address associated to the `BillingAccount`. */
  address?: InputMaybe<StreetAddressInput>;
  /**  A list of attributes associated with the `BillingAccount`. This can be used to extend the existing data structure with additional data. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**
   *  Name of the `BillingAccount`. <br/>
   *  Max character limit: 100.
   */
  name?: InputMaybe<Scalars['String']>;
  /**
   *  External reference to the `BillingAccount`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  Status of the `BillingAccount`. <br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
};

/**  Input type to update a `Carrier` */
export type UpdateCarrierInput = {
  /**  A list of attributes associated with this Carrier. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**
   *  Name of the carrier. <br/>
   *  Max character limit: 45.
   */
  name?: InputMaybe<Scalars['String']>;
  /**
   *  The current status of the `Carrier`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
};

/**  Input for updating a `CarrierConsignment` object. */
export type UpdateCarrierConsignmentInput = {
  /**  A list of attributes associated with this Consignment. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**
   *  The external consignment reference assigned by the carrier. <br/>
   *  Max character limit: 100.
   */
  consignmentReference?: InputMaybe<Scalars['String']>;
  /**  The URL used to retrieve the shipping label */
  labelUrl?: InputMaybe<Scalars['String']>;
  /**  A url to represent the order summary. Usually the manifest url from the service provider. */
  orderSummaryUrl?: InputMaybe<Scalars['String']>;
  /**  ref of the object */
  ref: Scalars['String'];
  /**
   *  The status of the consignment. <br/>
   *  Max character limit: 25.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Tracking label of the consignment. <br/>
   *  Max character limit: 100.
   */
  trackingLabel?: InputMaybe<Scalars['String']>;
};

/**
 *  Input parameter for the `updateCategory` mutation. A category `ref` is unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `Category` record. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type UpdateCategoryInput = {
  /**  A list of attributes associated with this Category. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The reference of the `ProductCatalogue` in which this `Category` resides. */
  catalogue: ProductCatalogueKey;
  /**  List of child `Category` references, if any. Child categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The child `Category` must already exist. */
  childCategories?: InputMaybe<Array<InputMaybe<CategoryKey>>>;
  /**  The name of the Category */
  name?: InputMaybe<Scalars['String']>;
  /**
   *  The reference to the parent of this `Category`, if any. The parent `Category` must be a part of the same `ProductCatalogue` (see `catalogue` field). The parent `Category` must already exist. <br/>
   *  Max character limit: 36.
   */
  parentCategory?: InputMaybe<CategoryKey>;
  /**
   *  The reference of the `Category` to be updated. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The current status of the `Category`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**  A short description of the Category */
  summary?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `Category`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
};

/**  Input for updating an existing `comment` object */
export type UpdateCommentInput = {
  /**  ID of the object */
  id: Scalars['ID'];
  /**
   *  Comment text. <br/>
   *  Max character limit: 200.
   */
  text: Scalars['String'];
};

/**  Input for updating a `Consignment` object. */
export type UpdateConsignmentInput = {
  /**  Carrier used for the consignment */
  carrier?: InputMaybe<CarrierId>;
  /**
   *  The external consignment reference assigned by the carrier. <br/>
   *  Max character limit: 100.
   */
  consignmentReference?: InputMaybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  The URL used to retrieve the shipping label */
  labelUrl?: InputMaybe<Scalars['String']>;
  /**  A url to represent the order summary. Usually the manifest url from the service provider. */
  orderSummaryUrl?: InputMaybe<Scalars['String']>;
  /**
   *  The status of the consignment. <br/>
   *  Max character limit: 25.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Tracking label of the consignment. <br/>
   *  Max character limit: 100.
   */
  trackingLabel?: InputMaybe<Scalars['String']>;
};

/**
 *  Input parameter for the `updateControl` mutation. A control `ref` should be unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `catalogue control` record. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  For more information, please refer to the https://lingo.fluentretail.com/display/LIN/Global+Inventory
 */
export type UpdateControlInput = {
  /**  List of Attribute containing meta data information for this entity */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Control Group */
  controlGroup?: InputMaybe<ControlGroupKey>;
  /**  Description */
  description?: InputMaybe<Scalars['String']>;
  /**  Order that this control is applied */
  executionOrder?: InputMaybe<Scalars['Int']>;
  /**  Name */
  name?: InputMaybe<Scalars['String']>;
  /**
   *  The reference identifier used to identify an entity. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The current status of the `Control`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `Control`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
  /**  values */
  values?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
};

/**
 *  Input parameter for the `updateControlGroup` mutation. The `ref` field is the unique identifier for the catalogue you wish to update. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  For more information, please refer to the https://lingo.fluentretail.com/display/LIN/Global+Inventory
 */
export type UpdateControlGroupInput = {
  /**  List of Attribute containing meta data information for this entity */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Description */
  description?: InputMaybe<Scalars['String']>;
  /**  Name */
  name?: InputMaybe<Scalars['String']>;
  /**
   *  The reference identifier used to identify an entity. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Retailer refs */
  retailerRefs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   *  The current status of the `ControlGroup`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `ControlGroup`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateCreditMemoInput = {
  /**  A list of attributes associated with the `CreditMemo`. This can be used to extend the existing data structure with additional data. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Reference to the `Currency` */
  currency?: InputMaybe<CurrencyKey>;
  /**  The default Tax Type for this credit memo. Individual credit memo items can override. */
  defaultTaxType?: InputMaybe<TaxTypeInput>;
  /**  Issue date */
  issueDate?: InputMaybe<Scalars['DateTime']>;
  /**  The `CreditMemoItem`s associated with this `CreditMemo`. */
  items?: InputMaybe<Array<InputMaybe<UpdateCreditMemoItemWithCreditMemoInput>>>;
  /**  Reference to an `Order` associated with the `CreditMemo`. */
  order?: InputMaybe<OrderLinkInput>;
  /**
   *  External reference to the `CreditMemo`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Reference to a `ReturnOrder` associated with the `CreditMemo`. */
  returnOrder?: InputMaybe<ReturnOrderKey>;
  /**
   *  Status of the `CreditMemo`. <br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**  The total amount of this credit memo excluding tax. */
  subTotalAmount?: InputMaybe<AmountTypeInput>;
  /**  The total amount of this credit memo including tax */
  totalAmount?: InputMaybe<AmountTypeInput>;
  /**  The total amount of this credit memo yet to be paid. (This caters for multi-part payments and payment milestones) */
  totalBalance?: InputMaybe<AmountTypeInput>;
  /**  The total amount of tax for this credit memo */
  totalTax?: InputMaybe<AmountTypeInput>;
};

export type UpdateCreditMemoItemWithCreditMemoInput = {
  /**  The item amount for this item excluding tax. This is a calculated value based on business rules that does not necessarily have to take into account the unit quantity or amounts. */
  amount?: InputMaybe<AmountTypeInput>;
  /**  Credit reason code of the `CreditMemoItem`. */
  creditReasonCode?: InputMaybe<SettingValueTypeInput>;
  /**  Description of the `CreditMemoItem`. */
  description?: InputMaybe<Scalars['String']>;
  /**  Reference to an `OrderItem` associated with the `CreditMemoItem`. */
  orderItem?: InputMaybe<OrderItemLinkInput>;
  /**  Reference to a `Product` associated with the `CreditMemoItem`. */
  product?: InputMaybe<ProductKey>;
  /**
   *  External reference to the `CreditMemoItem`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref?: InputMaybe<Scalars['String']>;
  /**  Reference to a `ReturnOrderItem` associated with the `CreditMemoItem`. */
  returnOrderItem?: InputMaybe<ReturnOrderItemKey>;
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount?: InputMaybe<AmountTypeInput>;
  /**  The unit sale price at time of sale or exchange */
  unitAmount?: InputMaybe<AmountTypeInput>;
  /**  The unit cost price at time of sale or exchange. */
  unitCostAmount?: InputMaybe<AmountTypeInput>;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity?: InputMaybe<QuantityTypeInput>;
  /**  The tax type of this item. Should only be provided if different to the default credit memo tax type. */
  unitTaxType?: InputMaybe<TaxTypeInput>;
};

/** Input type to update a `Customer`. */
export type UpdateCustomerInput = {
  /**  List of new attributes or updates to existing attributes. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**
   *  Customer's Country
   *  Max character limit: 100.
   */
  country?: InputMaybe<Scalars['String']>;
  /**
   *  Firstname of the customer.
   *  Max character limit: 50.
   */
  firstName?: InputMaybe<Scalars['String']>;
  /**
   *  Lastname of the customer.
   *  Max character limit: 50.
   */
  lastName?: InputMaybe<Scalars['String']>;
  /**
   *  Email of the customer
   *  Max character limit: 250.
   */
  primaryEmail?: InputMaybe<Scalars['String']>;
  /**
   *  Phone number of the customer.
   *  Max character limit: 20.
   */
  primaryPhone?: InputMaybe<Scalars['String']>;
  /**  Specifies whether the customer has opted-in to receive promotions */
  promotionOptIn?: InputMaybe<Scalars['Boolean']>;
  /**
   *  Customer's timezone
   *  Max character limit: 32.
   */
  timezone?: InputMaybe<Scalars['String']>;
  /**
   *  Customer's title.
   *  Max character limit: 50.
   */
  title?: InputMaybe<Scalars['String']>;
  /**
   *  The username of the customer. This value is used to identify the customer to update.
   *  Max character limit: 250.
   */
  username: Scalars['String'];
};

export type UpdateCustomerAddressInput = {
  /**  Max character limit: 45. */
  city?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 45. */
  companyName?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  country?: InputMaybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  postcode?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 250. */
  region?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 200. */
  state?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  street?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 32. */
  timeZone?: InputMaybe<Scalars['String']>;
};

/**  Input type to update a `Fulfilment` */
export type UpdateFulfilmentInput = {
  /**  List of fulfilment `attribute`s */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Type of delivery. Supported values are _STANDARD_, _OVERNIGHT_ and _EXPRESS_. */
  deliveryType?: InputMaybe<Scalars['String']>;
  /**  Estimated time of completing this fulfilment */
  eta?: InputMaybe<Scalars['String']>;
  /**  Expiry time of the fulfilment */
  expiryTime?: InputMaybe<Scalars['DateTime']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  List of `FulfilmentItem`s */
  items?: InputMaybe<Array<InputMaybe<UpdateFulfilmentItemWithFulfilmentInput>>>;
  /**  The current status of the `Fulfilment`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `Fulfilment`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of fulfilment. Supported types are <br/>
   *  - *CC_PFS* for Click & Collect - Pick from Store
   *  - *CC_PFDC* for Click & Collect - Pick from DC
   *  - *HD_PFS* for Home Delivery - Pick from Store
   *  - *HD_PFDC* for Home Delivery - Pick from DC
   */
  type?: InputMaybe<Scalars['String']>;
};

/**  Input type to update a Fulfilment */
export type UpdateFulfilmentItemWithFulfilmentInput = {
  /**  Number of `OrderItem`s confirmed */
  filledQuantity?: InputMaybe<Scalars['Int']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Number of `OrderItem`s rejected */
  rejectedQuantity?: InputMaybe<Scalars['Int']>;
  /**  Number of `OrderItem`s assigned to the fulfilment */
  requestedQuantity?: InputMaybe<Scalars['Int']>;
  /**  Status. Supported value is _DELETED_. */
  status?: InputMaybe<Scalars['String']>;
};

/**  Input type to update a `FulfilmentOption` object. */
export type UpdateFulfilmentOptionInput = {
  /**  A list of attributes associated with this object. This can be used to extend an existing object with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  ID of the object. If provided, will be used to identify the object. */
  id: Scalars['ID'];
  /**  External reference. If provided, will be used to identify the object. */
  ref?: InputMaybe<Scalars['String']>;
  /**  The current status of the `FulfilmentOption`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: InputMaybe<Scalars['String']>;
  /**  A unique identifier for the clients to group related Fulfilment Plans. */
  trackingCode?: InputMaybe<Scalars['String']>;
};

/**  Input type to update a `FulfilmentPlan` object. */
export type UpdateFulfilmentPlanInput = {
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  ETA of the `FulfilmentPlan`. Although this can be set explicitly, we recommend that this be determined and set in the workflow. */
  eta?: InputMaybe<Scalars['String']>;
  /**
   *  A list of exceptions.
   *  **Note** <br /><br />
   *  This will always be an append operation. Existing exceptions can not be modified but new ones can be added.
   */
  exceptions?: InputMaybe<Array<InputMaybe<CreateFulfilmentPlanExceptionInput>>>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  External reference. Recommended to be unique. */
  ref?: InputMaybe<Scalars['String']>;
  /**  The current status of the `FulfilmentPlan`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: InputMaybe<Scalars['String']>;
};

/**
 *  Input parameter for the `updateGroupProduct` mutation. A group product `ref` is unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `GroupProduct` record. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  * `prices` - `type` and `currency` are the unique key for the Price `value`. If an associated Price with a matching `name` and `type` already exists, then the `value` field will be updated, else it will be inserted.
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type UpdateGroupProductInput = {
  /**  A list of attributes associated with this Product. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogueKey;
  /**  A list of references to the `Category`'s to which this `Product` relates. Product categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The `Category` must already exist. */
  categories?: InputMaybe<Array<InputMaybe<CategoryKey>>>;
  /**  The name of the Product */
  name?: InputMaybe<Scalars['String']>;
  /**  A list of Prices for this Product */
  prices?: InputMaybe<Array<InputMaybe<PriceInput>>>;
  /**  A list of Products within the group */
  products?: InputMaybe<Array<InputMaybe<ProductKey>>>;
  /**
   *  The unique reference identifier for the Product. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The current status of the `GroupProduct`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**  A short description of the Product (max 255 chars) */
  summary?: InputMaybe<Scalars['String']>;
  /**  The tax information for this Product */
  taxType?: InputMaybe<TaxTypeInput>;
  /**
   *  Type of the `GroupProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
};

/**
 *  Input parameter for the `updateInventoryCatalogue` mutation. The `ref` field is the unique identifier for the catalogue you wish to update. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type UpdateInventoryCatalogueInput = {
  /**  A list of attributes associated with this Inventory Catalogue. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  A short description of the Inventory Catalogue */
  description?: InputMaybe<Scalars['String']>;
  /**  The name of the Inventory Catalogue */
  name?: InputMaybe<Scalars['String']>;
  /**
   *  The unique reference identifier for the Inventory Catalogue. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  A list of Retailer references associated with this Inventory Catalogue */
  retailerRefs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   *  The current status of the `InventoryCatalogue`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `InventoryCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
};

/**
 *  Input parameter for the `updateInventoryPosition` mutation. An inventory position `ref` is unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `InventoryPosition` record. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type UpdateInventoryPositionInput = {
  /**  A list of attributes associated with this Inventory Position. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The Inventory Catalogue in which this Position is managed */
  catalogue: InventoryCatalogueKey;
  /**  A reference identifying the Location where this inventory exists. This is a loosely coupled association. */
  locationRef?: InputMaybe<Scalars['String']>;
  /**  The calculated on hand quantity based on the associated quantities, and rules in the orchestration workflow */
  onHand?: InputMaybe<Scalars['Int']>;
  /**  A reference identifying a Product. The referenced product may or may not exist within one or more Product Catalogues. This is a loosely coupled association, since Product and Inventory are separate domains. */
  productRef?: InputMaybe<Scalars['String']>;
  /**  A list of Inventory Quantities associated with this Position */
  quantities?: InputMaybe<Array<InputMaybe<InventoryQuantityKey>>>;
  /**
   *  The unique reference identifier for the Inventory Position. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The current status of the `InventoryPosition`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `InventoryPosition`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
};

/**  Input for filtering out a subset of Inventory Positions */
export type InventoryPositionsLocationFilterInput = {
  /**  Inventory Catalogue reference identifier */
  catalogue: InventoryCatalogueKey;
  /**  Location reference identifier */
  locationRef: Scalars['String'];
};

/**  Input for updating the status of any entity with a status field */
export type StatusInput = {
  /**  Status value used for the input */
  status: Scalars['String'];
};

/**  Output type for bulk updating entity statuses */
export type UpdateStatusOutput = {
  __typename?: 'UpdateStatusOutput';
  /**  Returns the count of data entries that were updated. Count >= 0 implies the query executed successfully */
  count?: Maybe<Scalars['Int']>;
};

/**  Input for filtering out a subset of Inventory Quantities */
export type InventoryQuantityFilterInput = {
  /**  Inventory quantity expected on date */
  expectedOn?: InputMaybe<DateRange>;
  /**  Inventory Position reference identifier */
  position: InventoryPositionKey;
  /**  Inventory quantity status */
  status?: InputMaybe<Array<Scalars['String']>>;
  /**  Inventory quantity type */
  type?: InputMaybe<Array<Scalars['String']>>;
};

/**
 *  Input parameter for the `updateInventoryQuantity` mutation. An inventory quantity `ref` is unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `InventoryQuantity` record. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type UpdateInventoryQuantityInput = {
  /**  A list of attributes associated with this Inventory Quantity. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The Inventory Catalogue in which this Position is managed */
  catalogue: InventoryCatalogueKey;
  /**  The condition of the Inventory Quantity value. The platform does not enforce any values here. Examples could include `NEW`, `USED`, or `DAMAGED` */
  condition?: InputMaybe<Scalars['String']>;
  /**  The date and time the quantity is expected to arrive */
  expectedOn?: InputMaybe<Scalars['DateTime']>;
  /**  The actual amount of this specific Quantity record */
  quantity?: InputMaybe<Scalars['Int']>;
  /**
   *  The unique reference identifier for the Inventory Quantity. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The current status of the `InventoryQuantity`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  A reference to the Storage Area where this inventory is kept. <br/>
   *  Max character limit: 100.
   */
  storageAreaRef?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `InventoryQuantity`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
};

/**  `UpdateInvoiceInput` */
export type UpdateInvoiceInput = {
  /**  A list of attributes associated with the `Invoice`. This can be used to extend the existing data structure with additional data. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Reference to the `Currency` */
  currency?: InputMaybe<CurrencyKey>;
  /**  The default Tax Type for this invoice. Individual invoice items can override. */
  defaultTaxType?: InputMaybe<TaxTypeInput>;
  /**  Due date of the `Invoice` */
  dueDate?: InputMaybe<Scalars['DateTime']>;
  /**  Reference to the `Fulfilment` associated with this `Invoice`. */
  fulfilment?: InputMaybe<FulfilmentLinkInput>;
  /**  Issue date of the `Invoice` */
  issueDate?: InputMaybe<Scalars['DateTime']>;
  /**  The `InvoiceItem`s associated with this `Invoice`. */
  items?: InputMaybe<Array<InputMaybe<UpdateInvoiceItemWithInvoiceInput>>>;
  /**  Reference to the `Order` associated with this `Invoice`. */
  order?: InputMaybe<OrderLinkInput>;
  /**
   *  External reference to the `Invoice`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  Status of the `Invoice`. <br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**  The total amount of this invoice excluding tax. */
  subTotalAmount?: InputMaybe<AmountTypeInput>;
  /**  The total amount of this invoice including tax */
  totalAmount?: InputMaybe<AmountTypeInput>;
  /**  The total amount of this invoice yet to be paid. (This caters for multi-part payments and payment milestones) */
  totalBalance?: InputMaybe<AmountTypeInput>;
  /**  The total amount of tax for this invoice */
  totalTax?: InputMaybe<AmountTypeInput>;
};

/**  Input type to create an `InvoiceItem` with an `Invoice`. Intended to be used as an inline input in the createInvoice_mutation. */
export type UpdateInvoiceItemWithInvoiceInput = {
  /**  The item amount for this item excluding tax */
  amount?: InputMaybe<AmountTypeInput>;
  /**  Description of the `InvoiceItem` */
  description?: InputMaybe<Scalars['String']>;
  /**  Reference to the `Product` associated with this object. */
  product?: InputMaybe<ProductKey>;
  /**
   *  External reference to the `InvoiceItem`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount?: InputMaybe<AmountTypeInput>;
  /**  The unit price of the source item. */
  unitAmount?: InputMaybe<AmountTypeInput>;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity?: InputMaybe<QuantityTypeInput>;
  /**  The tax type of this item. Should only be provided if different to the default invoice tax type. */
  unitTaxType?: InputMaybe<TaxTypeInput>;
};

export type UpdateLocationInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Max character limit: 50. */
  defaultCarrier?: InputMaybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Max character limit: 100. */
  name?: InputMaybe<Scalars['String']>;
  networks?: InputMaybe<Array<InputMaybe<NetworkId>>>;
  openingSchedule?: InputMaybe<UpdateOpeningScheduleInput>;
  primaryAddress?: InputMaybe<UpdateStoreAddressInput>;
  retailer?: InputMaybe<RetailerId>;
  /**  Max character limit: 15. */
  status?: InputMaybe<Scalars['String']>;
  storageAreas?: InputMaybe<Array<InputMaybe<UpdateStorageAreaWithLocationInput>>>;
  /**  Max character limit: 20. */
  supportPhoneNumber?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 25. */
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateOpeningScheduleInput = {
  allHours?: InputMaybe<Scalars['Boolean']>;
  friEnd?: InputMaybe<Scalars['Int']>;
  friStart?: InputMaybe<Scalars['Int']>;
  /**  ID of the object */
  id: Scalars['ID'];
  monEnd?: InputMaybe<Scalars['Int']>;
  monStart?: InputMaybe<Scalars['Int']>;
  satEnd?: InputMaybe<Scalars['Int']>;
  satStart?: InputMaybe<Scalars['Int']>;
  sunEnd?: InputMaybe<Scalars['Int']>;
  sunStart?: InputMaybe<Scalars['Int']>;
  thuEnd?: InputMaybe<Scalars['Int']>;
  thuStart?: InputMaybe<Scalars['Int']>;
  tueEnd?: InputMaybe<Scalars['Int']>;
  tueStart?: InputMaybe<Scalars['Int']>;
  wedEnd?: InputMaybe<Scalars['Int']>;
  wedStart?: InputMaybe<Scalars['Int']>;
};

export type UpdateStoreAddressInput = {
  /**  Max character limit: 45. */
  city?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 45. */
  companyName?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  country?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 4096. */
  directions?: InputMaybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  postcode?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 250. */
  region?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 200. */
  state?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 100. */
  street?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 32. */
  timeZone?: InputMaybe<Scalars['String']>;
};

export type UpdateStorageAreaWithLocationInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  ID of the object */
  id: Scalars['ID'];
  status?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 50. */
  type?: InputMaybe<Scalars['String']>;
};

/**  Input for the `updateManifest` mutation. */
export type UpdateManifestInput = {
  /**  A list of attributes associated with this `Manifest`. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**
   *  Reference to the `Carrier` this `Manifest` is for <br/>
   *  Max character limit: 100.
   */
  carrier?: InputMaybe<CarrierKey>;
  /**  A list of references to the `Consignment`s this `Manifest` contains. */
  carrierConsignments?: InputMaybe<Array<InputMaybe<CarrierConsignmentKey>>>;
  /**  The link where the carrier's manifest is stored. Not all the carriers generates one, so this field is optional. */
  carrierManifestLink?: InputMaybe<Scalars['String']>;
  /**  The `Location` this `Manifest` is associated with */
  location?: InputMaybe<LocationKey>;
  /**  The name of this `Manifest` */
  name?: InputMaybe<Scalars['String']>;
  /**
   *  External reference for this `Manifest`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The status of this `Manifest`. <br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  The type of `Manifest`. <br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
};

/**  Input type to update a `Network` */
export type UpdateNetworkInput = {
  /**  List of the network's `attribute`s */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  List of `location`s within this network */
  locations?: InputMaybe<Array<InputMaybe<LocationId>>>;
  /**
   *  Name of the network. <br/>
   *  Max character limit: 100.
   */
  name?: InputMaybe<Scalars['String']>;
  /**  Status of the network */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the network. For example you could use _CC_ for _Click and Collect_ or _HD_ for _Home Delivery_. These types can be defined by the user and used by the Orchestration
   *  Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 15.
   */
  type?: InputMaybe<Scalars['String']>;
};

/**  Input type to update an `Order` */
export type UpdateOrderInput = {
  /**  List of order's `attribute`s */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  ID of the `Order` */
  id: Scalars['ID'];
  /**  List of `OrderItem`s to be updated */
  items?: InputMaybe<Array<InputMaybe<UpdateOrderItemWithOrderInput>>>;
  /**  The current status of the `Order`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: InputMaybe<Scalars['String']>;
  /**  Tax price */
  totalPrice?: InputMaybe<Scalars['Float']>;
  /**  Total tax price */
  totalTaxPrice?: InputMaybe<Scalars['Float']>;
};

/**
 *  Input type to update an `OrderItem` with an `Order`. Intended to be used as an inline input in the _updateOrder_ mutation.
 *  <br/><br/>**NOTE**<br/>
 *  This mutation has potential implications on existing `Order`s and their workflows. We recommend this mutation to be not used directly. It should either be called from a user
 *  action or from within a workflow.
 */
export type UpdateOrderItemWithOrderInput = {
  /**  List of `OrderItem` `attribute`s. There's expected a JSON object */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Currency. Should ideally be a 3 letter ISO currency code. For instance _AUD_. */
  currency?: InputMaybe<Scalars['String']>;
  /**  ID of the `OrderItem` */
  id: Scalars['ID'];
  /**  Price paid. Excludes tax. */
  paidPrice?: InputMaybe<Scalars['Float']>;
  /**  Price */
  price?: InputMaybe<Scalars['Float']>;
  /**
   *  External reference for the product catalogue containing the associated product (specified using the `productRef`in this object).
   *  When `productCatalogueRef` is not passed, the compatibility catalogue for this product is used.
   */
  productCatalogueRef?: InputMaybe<Scalars['String']>;
  /**  External reference for the associated product. */
  productRef?: InputMaybe<Scalars['String']>;
  /**  Quantity ordered */
  quantity?: InputMaybe<Scalars['Int']>;
  /**  External reference for the object. Recommended to be unique. */
  ref?: InputMaybe<Scalars['String']>;
  /**  Status of the OrderItem. Currently supported values are limited to _CREATED_, _NEW_, _COMPLETE_. */
  status?: InputMaybe<Scalars['String']>;
  /**  Tax price */
  taxPrice?: InputMaybe<Scalars['Float']>;
  /**  Tax type. Supported values are _GST_, _VAT_, _EXCLTAX_. */
  taxType?: InputMaybe<Scalars['String']>;
  /**  Total price */
  totalPrice?: InputMaybe<Scalars['Float']>;
  /**  Total tax price */
  totalTaxPrice?: InputMaybe<Scalars['Float']>;
};

/**  Input type to update a `Payment`. */
export type UpdatePaymentInput = {
  /**  A list of attributes associated with the `Payment`. This can be used to extend the existing data structure with additional data. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The `BillingAccount` associated with this `Payment`. */
  billingAccount?: InputMaybe<BillingAccountKey>;
  /**
   *  External reference to the `Payment`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The current status of the `Payment`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Status of the `Payment`. <br/>
   *  Max character limit: 25.
   */
  status?: InputMaybe<Scalars['String']>;
};

/**  Input type to update a `PaymentServiceProvider`. */
export type UpdatePaymentServiceProviderInput = {
  /**  A list of attributes associated with the `PaymentServiceProvider`. This can be used to extend the existing data structure with additional data. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**
   *  The ClientId of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 25.
   */
  clientId?: InputMaybe<Scalars['String']>;
  /**
   *  The Client Secret of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  clientSecret?: InputMaybe<Scalars['String']>;
  /**
   *  The host name of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  host?: InputMaybe<Scalars['String']>;
  /**
   *  Name of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  name?: InputMaybe<Scalars['String']>;
  /**  The port of the `PaymentServiceProvider` */
  port?: InputMaybe<Scalars['Int']>;
  /**
   *  External reference to the `PaymentServiceProvider`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The Authorization Key of this `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  serviceAuthToken?: InputMaybe<Scalars['String']>;
};

/**
 *  Input parameter for the `updateProductCatalogue` mutation. The `ref` field is the unique identifier for the catalogue you wish to update. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type UpdateProductCatalogueInput = {
  /**  A list of attributes associated with this Product Catalogue. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  A short description of the Product Catalogue */
  description?: InputMaybe<Scalars['String']>;
  /**  The name of the Product Catalogue */
  name?: InputMaybe<Scalars['String']>;
  /**
   *  The unique reference identifier for the Product Catalogue. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  A list of Retailer references associated with this Product Catalogue */
  retailerRefs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   *  The current status of the `ProductCatalogue`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `ProductCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateRetailerInput = {
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Max character limit: 45. */
  name?: InputMaybe<Scalars['String']>;
  networks?: InputMaybe<Array<InputMaybe<NetworkId>>>;
  /**  Max character limit: 250. */
  primaryEmail?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 25. */
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  supportContactName?: InputMaybe<Scalars['String']>;
  supportEmail?: InputMaybe<Scalars['String']>;
  supportPhone?: InputMaybe<Scalars['String']>;
  tradingName?: InputMaybe<Scalars['String']>;
  urlName?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The lodged location in cases where the return order was directly returned to a store or DC */
export type UpdateReturnFulfilmentInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /** The destination of the return order items */
  destinationLocation?: InputMaybe<LocationLinkInput>;
  /** The lodged location in cases where the return order was directly returned to a store or DC */
  lodgedLocation?: InputMaybe<LocationLinkInput>;
  /** The pickup address in the cases of return orders that are being picked up by a carrier */
  pickupAddress?: InputMaybe<StreetAddressInput>;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /** Update fulfilment items */
  returnFulfilmentItems?: InputMaybe<Array<InputMaybe<UpdateReturnFulfilmentItemWithReturnFulfilmentInput>>>;
  /**  Return order reference related to the fulfilment */
  returnOrder: ReturnOrderKey;
  /**
   *  Status of the return fulfilment. <br/>
   *  Max character limit: 100.
   */
  status?: InputMaybe<Scalars['String']>;
};

/**  Input type to update return fulfilment item with return fulfilment */
export type UpdateReturnFulfilmentItemWithReturnFulfilmentInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /** Product reference of return fulfilment item */
  product?: InputMaybe<ProductKey>;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Unit quantity of return fulfilment item */
  unitQuantity?: InputMaybe<QuantityTypeInput>;
};

/**  Input type to update return order */
export type UpdateReturnOrderInput = {
  /**  A list of attributes of the return order. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The associated credit memo for this return order */
  creditMemo?: InputMaybe<CreditMemoKey>;
  /**  The currency of this return */
  currency?: InputMaybe<CurrencyKey>;
  /**  The default Tax Type for this return order. Individual return order items can override */
  defaultTaxType?: InputMaybe<TaxTypeInput>;
  /**  The destination of the return order items */
  destinationLocation?: InputMaybe<LocationLinkInput>;
  /**  The associated exchange order managed the exchange item */
  exchangeOrder?: InputMaybe<OrderLinkInput>;
  /**  The lodged location in cases where the return order was directly returned to a store or DC */
  lodgedLocation?: InputMaybe<LocationLinkInput>;
  /**  Customer reference of the return order. This links the customer to return order */
  order?: InputMaybe<OrderLinkInput>;
  /**  The pickup address in the cases of return orders that are being picked up by a carrier */
  pickupAddress?: InputMaybe<StreetAddressInput>;
  /**
   *  External reference of the return order. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Retailer reference of return orders */
  retailer: RetailerId;
  /**  The authorised disposition for this return order. This can be different to the return disposition action which reflects the actual action once an item has been inspected */
  returnAuthorisationDisposition?: InputMaybe<SettingValueTypeInput>;
  /**  The generated key representing an authorised return order which the customer can use to progress through the return order process */
  returnAuthorisationKey?: InputMaybe<Scalars['String']>;
  /**  The time at which the return authorisation expires */
  returnAuthorisationKeyExpiry?: InputMaybe<Scalars['DateTime']>;
  /**  The destination of the return order items */
  returnOrderItems?: InputMaybe<Array<InputMaybe<UpdateReturnOrderItemWithReturnOrderInput>>>;
  /**  List of return verifications associated with the return order */
  returnVerifications?: InputMaybe<Array<InputMaybe<UpdateReturnVerificationWithReturnOrderInput>>>;
  /**
   *  Status of the return order. <br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**  The total amount of this return order excluding tax */
  subTotalAmount?: InputMaybe<AmountTypeInput>;
  /**  The total amount of this return order including tax */
  totalAmount?: InputMaybe<AmountTypeInput>;
  /**  The total amount of tax for this return order */
  totalTax?: InputMaybe<AmountTypeInput>;
};

/**  Input type to update return order item when updating the return order */
export type UpdateReturnOrderItemWithReturnOrderInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Item total amount of returning item */
  itemAmount?: InputMaybe<AmountTypeInput>;
  /**  Item tax amount of the returning item */
  itemTaxAmount?: InputMaybe<AmountTypeInput>;
  /**  Order item of return order item. This field is optional */
  orderItem?: InputMaybe<OrderItemLinkInput>;
  /**  Product reference of return order item */
  product?: InputMaybe<ProductKey>;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  The condition in which the return item was received */
  returnCondition?: InputMaybe<SettingValueTypeInput>;
  /**  An optional comment. Required if the condition code required further information such as 'Other'. */
  returnConditionComment?: InputMaybe<Scalars['String']>;
  /**  The actual disposition action taken for this return item */
  returnDispositionAction?: InputMaybe<SettingValueTypeInput>;
  /**  The actual payment action taken for this return item */
  returnPaymentAction?: InputMaybe<SettingValueTypeInput>;
  /**  Reason for returning the item */
  returnReason?: InputMaybe<SettingValueTypeInput>;
  /**  Additional comments related to the returning item */
  returnReasonComment?: InputMaybe<Scalars['String']>;
  /**
   *  Status or the return order item. <br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**  Unit price of the returning item */
  unitAmount?: InputMaybe<AmountTypeInput>;
  /**  Return quantity */
  unitQuantity?: InputMaybe<QuantityTypeInput>;
  /**  Unit tax type of the retuning item */
  unitTaxType?: InputMaybe<TaxTypeInput>;
};

export type UpdateReturnVerificationWithReturnOrderInput = {
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /** verification details */
  verificationDetails?: InputMaybe<Scalars['String']>;
};

/**  Input type to update a `Role` */
export type UpdateRoleInput = {
  /**  Name of the role. This input is used to identify the role to be updated. */
  name: Scalars['String'];
  /**  A list of permissions to be assigned to the role. Please note that all new permissions in the input will be added, existing ones will not be affected. */
  permissions?: InputMaybe<Array<InputMaybe<PermissionKey>>>;
};

/**
 *  Input type to update a `Setting`
 *  <br/><br/>**USAGE**<br/>
 *  Use a unique combination of `context` and `contextId` to create settings for various contexts.
 *  Not using a unique combination of those two will result in a _ConstraintViolationException_.
 *  <br/><br/>**NOTE**<br/>
 *  If you are an existing client, you may already be using our <a href="https://lingo.fluentretail.com/display/LIN/Configuration+Settings" target="_blank">Configuration Settings</a> feature.
 *  You can still use this API to update existing settings. However, we advise you to be very cautious in doing so as _V4_ APIs may behave unexpectedly
 *  if you modify your existing settings. If you have questions, please contact support.
 */
export type UpdateSettingInput = {
  /**  The context of the setting. Supported values are ACCOUNT, RETAILER, AGENT or CUSTOMER */
  context: Scalars['String'];
  /**  `ID` of the context type. For instance, use a retailer's ID when using _RETAILER_ context. */
  contextId: Scalars['Int'];
  /**  ID of the object */
  id: Scalars['ID'];
  /**  Value of the setting. Use this if the value is a JSON. */
  lobValue?: InputMaybe<Scalars['Json']>;
  /**  Name of the setting */
  name?: InputMaybe<Scalars['String']>;
  /**  Value of the setting. Use this if the value is NOT a JSON. */
  value?: InputMaybe<Scalars['String']>;
  /**  Data type of the setting's value. Supported types are _LOB_, _STRING_, _INTEGER_, _BOOLEAN_ and _JSON_. */
  valueType: Scalars['String'];
};

/**
 *  Input parameter for the `updateStandardProduct` mutation. A standard product `ref` is unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `StandardProduct` record. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  * `prices` - `type` and `currency` are the unique key for the Price `value`. If an associated Price with a matching `name` and `type` already exists, then the `value` field will be updated, else it will be inserted.
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type UpdateStandardProductInput = {
  /**  A list of attributes associated with this Product. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogueKey;
  /**  A list of references to the `Category`'s to which this `Product` relates. Product categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The `Category` must already exist. */
  categories?: InputMaybe<Array<InputMaybe<CategoryKey>>>;
  /**
   *  The Global Trade Item Number (GTIN) for this Product.<br/>
   *  Max character limit: 20.
   */
  gtin?: InputMaybe<Scalars['String']>;
  /**  The name of the Product */
  name?: InputMaybe<Scalars['String']>;
  /**  A list of Prices for this Product */
  prices?: InputMaybe<Array<InputMaybe<PriceInput>>>;
  /**
   *  The unique reference identifier for the Product. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The current status of the `StandardProduct`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**  A short description of the Product (max 255 chars) */
  summary?: InputMaybe<Scalars['String']>;
  /**  The tax information for this Product */
  taxType?: InputMaybe<TaxTypeInput>;
  /**
   *  Type of the `StandardProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
  /**  A list of references to the `VariantProduct`'s to which this `Product` relates. Product variants must be a part of the same `ProductCatalogue` (see `catalogue` field). The `VariantProduct` must already exist. */
  variants?: InputMaybe<Array<InputMaybe<VariantProductKey>>>;
};

export type UpdateStorageAreaInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  ID of the object */
  id: Scalars['ID'];
  status?: InputMaybe<Scalars['String']>;
  /**  Max character limit: 50. */
  type?: InputMaybe<Scalars['String']>;
};

/**  Updates an existing `User`s details */
export type UpdateUserInput = {
  /**
   *  API Key. To be used with the Fluent Widget. <br/>
   *  Max character limit: 128.
   */
  apiKey?: InputMaybe<Scalars['String']>;
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**
   *  Country. <br/>
   *  Max character limit: 100.
   */
  country?: InputMaybe<Scalars['String']>;
  /**  Department */
  department?: InputMaybe<Scalars['String']>;
  /**
   *  User's first name. <br/>
   *  Max character limit: 50.
   */
  firstName?: InputMaybe<Scalars['String']>;
  /**  ID of the object */
  id: Scalars['ID'];
  /**  User language (leave null to allow users to self-select their language preference) */
  language?: InputMaybe<SettingValueTypeInput>;
  /**
   *  User's last name. <br/>
   *  Max character limit: 50.
   */
  lastName?: InputMaybe<Scalars['String']>;
  /**
   *  User Password.
   *  Max character limit: 128.
   */
  password?: InputMaybe<Scalars['String']>;
  /**
   *  User's primary email. <br/>
   *  Max character limit: 250.
   */
  primaryEmail?: InputMaybe<Scalars['String']>;
  /**  User's location context */
  primaryLocation?: InputMaybe<LocationId>;
  /**
   *  User's primary phone number. <br/>
   *  Max character limit: 20.
   */
  primaryPhone?: InputMaybe<Scalars['String']>;
  /**  User's retailer context */
  primaryRetailer?: InputMaybe<RetailerId>;
  /**  Determines if the user has opted to receive promotions */
  promotionOptIn?: InputMaybe<Scalars['Boolean']>;
  /**
   *  External reference of the object. Recommended to be unique. <br/>
   *  Max character limit: 100.
   */
  ref?: InputMaybe<Scalars['String']>;
  /**
   *  A list of roles to be assigned to the user. This operation works in an _upsert_ fashion i.e. any previously assigned roles to the user will not be removed; only new ones
   *  will be added.
   */
  roles?: InputMaybe<Array<InputMaybe<UserRoleInput>>>;
  /**
   *  Status of the user. <br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Timezone. <br/>
   *  Max character limit: 32.
   */
  timezone?: InputMaybe<Scalars['String']>;
  /**
   *  The user's title. For example _Mr._, _Miss_, _Dr._, _Ms._ etc <br/>
   *  Max character limit: 50.
   */
  title?: InputMaybe<Scalars['String']>;
  /**  Type of the user. For example _ADMIN_, _RETAILER_, _LOCATION_ etc */
  type?: InputMaybe<Scalars['String']>;
};

/**
 *  Input parameter for the `updateVariantProduct` mutation. A variant product `ref` is unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `VariantProduct` record. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  * `prices` - `type` and `currency` are the unique key for the Price `value`. If an associated Price with a matching `name` and `type` already exists, then the `value` field will be updated, else it will be inserted.
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type UpdateVariantProductInput = {
  /**  A list of attributes associated with this Product. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogueKey;
  /**  A list of references to the `Category`'s to which this `Product` relates. Product categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The `Category` must already exist. */
  categories?: InputMaybe<Array<InputMaybe<CategoryKey>>>;
  /**
   *  The Global Trade Item Number (GTIN) for this Product. <br/>
   *  Max character limit: 20.
   */
  gtin?: InputMaybe<Scalars['String']>;
  /**  The name of the Product */
  name?: InputMaybe<Scalars['String']>;
  /**  A list of Prices for this Product */
  prices?: InputMaybe<Array<InputMaybe<PriceInput>>>;
  /**  Associated base 'Product' of this variant */
  product?: InputMaybe<ProductKey>;
  /**
   *  The unique reference identifier for the Product. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The current status of the `VariantProduct`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**  A short description of the Product (max 255 chars) */
  summary?: InputMaybe<Scalars['String']>;
  /**  The tax information for this Product */
  taxType?: InputMaybe<TaxTypeInput>;
  /**
   *  Type of the `VariantProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
};

/**
 *  Input parameter for the `updateVirtualCatalogue` mutation. The `ref` field is the unique identifier for the catalogue you wish to update. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  For more information, please refer to the https://lingo.fluentretail.com/display/LIN/Global+Inventory
 */
export type UpdateVirtualCatalogueInput = {
  /**  New list of Attribute containing meta data information for this entity object */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Control group Ref */
  controlGroupRef?: InputMaybe<Scalars['String']>;
  /**  Description */
  description?: InputMaybe<Scalars['String']>;
  /**  Inventory Catalogue used for this virtual catalogue */
  inventoryCatalogueRef?: InputMaybe<Scalars['String']>;
  /**  Name of the inventory catalogue */
  name?: InputMaybe<Scalars['String']>;
  /**  Networks used for this catalogue */
  networkIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**  Product Catalogue used for this virtual catalogue */
  productCatalogueRef?: InputMaybe<Scalars['String']>;
  /**
   *  Reference identifier used to identify this entity object. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Retailer refs */
  retailerRefs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   *  The current status of the `VirtualCatalogue`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `VirtualCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
};

/**
 *  Input parameter for the `updateVirtualPosition` mutation. A position `ref` should be unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `inventory position` record. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  For more information, please refer to the https://lingo.fluentretail.com/display/LIN/Global+Inventory
 */
export type UpdateVirtualPositionInput = {
  /**  List of Attribute containing meta data information for this entity */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Catalogue */
  catalogue: VirtualCatalogueKey;
  /**  Group Reference */
  groupRef?: InputMaybe<Scalars['String']>;
  /**  Product reference */
  productRef?: InputMaybe<Scalars['String']>;
  /**  Quantity */
  quantity?: InputMaybe<Scalars['Int']>;
  /**
   *  Reference identifier used to identify this entity. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**
   *  The current status of the `VirtualPosition`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: InputMaybe<Scalars['String']>;
  /**
   *  Type of the `VirtualPosition`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: InputMaybe<Scalars['String']>;
};

/**  Input for filtering out a subset of Virtual Positions */
export type VirtualPositionsGroupFilterInput = {
  /**  Virtual Catalogue reference identifier */
  catalogue: VirtualCatalogueKey;
  /**  Virtual Position Group reference identifier */
  groupRef: Scalars['String'];
};

/**  Input type to update a `Wave` */
export type UpdateWaveInput = {
  /**  `User` who this wave is assigned to */
  allocatedTo?: InputMaybe<UserId>;
  /**  A list of attributes associated with this wave. `Attribute`s can be used to extend the existing data structure with additional data for use in orchestration rules, UI etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  /**  Fulfilments associated with this wave. This field can be used to add new fulfilments to the wave. Existing fulfilments can't be deleted. */
  fulfilments?: InputMaybe<Array<InputMaybe<FulfilmentId>>>;
  /**  ID of the `Wave` to be updated */
  id: Scalars['ID'];
  /**  Name of the wave */
  name?: InputMaybe<Scalars['String']>;
  /**  The current status of the `Wave`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: InputMaybe<Scalars['String']>;
  /**  Type of the `Wave`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type?: InputMaybe<Scalars['String']>;
};

/** CarrierConsignmentArticle */
export type CarrierConsignmentArticleId = {
  article?: InputMaybe<ArticleId>;
  carrierConsignment?: InputMaybe<CarrierConsignmentKey>;
};

export type CommentId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

/** ConsignmentArticle */
export type ConsignmentArticleId = {
  article?: InputMaybe<ArticleId>;
  consignment?: InputMaybe<ConsignmentId>;
};

/**  The `ControlKey` input is the parameter for identifying a specific Catalogue Control */
export type ControlKey = {
  /**  Control Group */
  controlGroup: ControlGroupKey;
  /**
   *  Control reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
};

export type CreateReturnVerificationInput = {
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  /**  Reference of return order */
  returnOrder: ReturnOrderKey;
  /**  Type */
  type: Scalars['String'];
  /**  verification details */
  verificationDetails: Scalars['String'];
};

/**  Input type to uniquely identify a `CreditMemoItem` object. We use all the fields present in the request to look for this object. */
export type CreditMemoItemKey = {
  /**  The client's reference identifier for the object */
  ref: Scalars['String'];
};

export type CustomerAddressId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

export type FulfilmentPlanId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

/**  Input type to uniquely identify an `InvoiceItem` object. We use all the fields present in the request to look for this object. */
export type InvoiceItemKey = {
  /**  The client's reference identifier for the object */
  ref: Scalars['String'];
};

/**  The `ManifestKey` input, for identifying a specific Manifest. */
export type ManifestKey = {
  /**
   *  external reference of the object. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
};

/**  Input type to uniquely identify a `ReturnFulfilmentItem` object. We use all the fields present in the request to look for this object. */
export type ReturnFulfilmentItemKey = {
  /**  The client's reference identifier for the object */
  ref: Scalars['String'];
  returnFulfilment: ReturnFulfilmentKey;
};

export type StoreAddressId = {
  /**  ID of the object */
  id: Scalars['ID'];
};

export type UpdateReturnFulfilmentItemInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  product?: InputMaybe<ProductLinkInput>;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
  returnOrderFulfilment: ReturnFulfilmentKey;
  /**  Unit quantity of return fulfilment item */
  unitQuantity?: InputMaybe<QuantityTypeInput>;
};

/**  The `VirtualPositionKey` input is the parameter for identifying a specific Virtual Position */
export type VirtualPositionKey = {
  /**  Catalogue */
  catalogue: VirtualCatalogueKey;
  /**
   *  Virtual Position reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: Scalars['String'];
};

export type WaveId = {
  /**  ID of the object */
  id: Scalars['ID'];
};
