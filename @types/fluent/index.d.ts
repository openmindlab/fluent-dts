declare module 'fluent-dts' {

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
  articleById?: Article;
  /**  Search for ArticleItem entities */
  articleItems?: ArticleItemConnection;
  /**  Search for Article entities */
  articles?: ArticleConnection;
  /**  Returns the articles currently enroute to, or awaiting collection from, a given location or set of locations. Either 'fromLocation' or 'toLocation' should be provided. */
  articlesByLocation?: ArticleConnection;
  /**  Find a BillingAccount entity */
  billingAccount?: BillingAccount;
  /**  Search for BillingAccount entities */
  billingAccounts?: BillingAccountConnection;
  /**  Find a Carrier entity */
  carrier?: Carrier;
  /**  Search for CarrierAttribute entities */
  carrierAttributes?: CarrierAttributeConnection;
  /**  Find a Carrier entity */
  carrierById?: Carrier;
  /**  Find a CarrierConsignment entity */
  carrierConsignment?: CarrierConsignment;
  /**  Find a CarrierConsignmentArticle entity */
  carrierConsignmentArticleById?: CarrierConsignmentArticle;
  /**  Search for CarrierConsignmentArticle entities */
  carrierConsignmentArticles?: CarrierConsignmentArticleConnection;
  /**  Search for CarrierConsignment entities */
  carrierConsignments?: CarrierConsignmentConnection;
  /**  Search for CarrierDetails entities */
  carrierDetailses?: CarrierDetailsConnection;
  /**  Search for Carrier entities */
  carriers?: CarrierConnection;
  /**  Search for Category entities */
  categories?: CategoryConnection;
  /**  Find a Category entity */
  category?: Category;
  /**  Find a Comment entity */
  commentById?: Comment;
  /**  Search for Comment entities */
  comments?: CommentConnection;
  /**  Find a ConsignmentArticle entity */
  consignmentArticleById?: ConsignmentArticle;
  /**  Search for ConsignmentArticle entities */
  consignmentArticles?: ConsignmentArticleConnection;
  /**  Find a Consignment entity */
  consignmentById?: Consignment;
  /**  Search for Consignment entities */
  consignments?: ConsignmentConnection;
  /**  Find a Control entity */
  control?: Control;
  /**  Find a ControlGroup entity */
  controlGroup?: ControlGroup;
  /**  Search for ControlGroup entities */
  controlGroups?: ControlGroupConnection;
  /**  Search for Control entities */
  controls?: ControlConnection;
  /**  Find a CreditMemo entity */
  creditMemo?: CreditMemo;
  /**  Search for CreditMemo entities */
  creditMemoes?: CreditMemoConnection;
  /**  Find a CreditMemoItem entity */
  creditMemoItem?: CreditMemoItem;
  /**  Search for CreditMemoItem entities */
  creditMemoItems?: CreditMemoItemConnection;
  /**  Search for Currency entities */
  currencies?: CurrencyConnection;
  /**  Find a Currency entity */
  currency?: Currency;
  /**  Find a Customer entity */
  customer?: Customer;
  /**  Find a CustomerAddress entity */
  customerAddressById?: CustomerAddress;
  /**  Search for CustomerAddress entities */
  customerAddresses?: CustomerAddressConnection;
  /**  Find a Customer entity */
  customerById?: Customer;
  /**  Search for Customer entities */
  customers?: CustomerConnection;
  /**
   *  _Disclaimer:  This query is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
   *  Find a `DecisionTable` entity
   */
  decisionTable?: DecisionTable;
  /**  Search for FinancialTransaction entities */
  financialTransactions?: FinancialTransactionConnection;
  /**  Find a Fulfilment entity */
  fulfilmentById?: Fulfilment;
  /**  Find a FulfilmentChoice entity */
  fulfilmentChoice?: FulfilmentChoice;
  /**  Find a FulfilmentChoice entity */
  fulfilmentChoiceById?: FulfilmentChoice;
  /**  Search for FulfilmentChoice entities */
  fulfilmentChoices?: FulfilmentChoiceConnection;
  /**  Search for FulfilmentItem entities */
  fulfilmentItems?: FulfilmentItemConnection;
  /**  Find a FulfilmentOption entity */
  fulfilmentOptionById?: FulfilmentOption;
  /**  Search for FulfilmentOption entities */
  fulfilmentOptions?: FulfilmentOptionConnection;
  /**  Find a FulfilmentPlan entity */
  fulfilmentPlanById?: FulfilmentPlan;
  /**  Search for FulfilmentPlan entities */
  fulfilmentPlans?: FulfilmentPlanConnection;
  /**  Search for Fulfilment entities */
  fulfilments?: FulfilmentConnection;
  /**  Find a GroupProduct entity */
  groupProduct?: GroupProduct;
  /**  Search for GroupProduct entities */
  groupProducts?: GroupProductConnection;
  /**  Find a InventoryCatalogue entity */
  inventoryCatalogue?: InventoryCatalogue;
  /**  Search for InventoryCatalogue entities */
  inventoryCatalogues?: InventoryCatalogueConnection;
  /**  Find a InventoryPosition entity */
  inventoryPosition?: InventoryPosition;
  /**  Retrieve the aggregate onHand of Inventory Position for one Product */
  inventoryPositionAggregate?: InventoryPositionAggregateOutput;
  /**  Search for InventoryPosition entities */
  inventoryPositions?: InventoryPositionConnection;
  /**  Search for InventoryQuantity entities */
  inventoryQuantities?: InventoryQuantityConnection;
  /**  Find a InventoryQuantity entity */
  inventoryQuantity?: InventoryQuantity;
  /**  Retrieve the aggregate qty of Inventory Quantity */
  inventoryQuantityAggregate?: InventoryQuantityAggregateOutput;
  /**  Find a Invoice entity */
  invoice?: Invoice;
  /**  Find a InvoiceItem entity */
  invoiceItem?: InvoiceItem;
  /**  Search for InvoiceItem entities */
  invoiceItems?: InvoiceItemConnection;
  /**  Search for Invoice entities */
  invoices?: InvoiceConnection;
  /**  Find a Location entity */
  location?: Location;
  /**  Find a Location entity */
  locationById?: Location;
  /**  Search for Location entities */
  locations?: LocationConnection;
  /**  Find a Manifest entity */
  manifest?: Manifest;
  /**  Search for Manifest entities */
  manifests?: ManifestConnection;
  /**  Find a User entity */
  me?: User;
  /**  Find a Network entity */
  network?: Network;
  /**  Find a Network entity */
  networkById?: Network;
  /**  Search for Network entities */
  networks?: NetworkConnection;
  /**  Search for OpeningSchedule entities */
  openingSchedules?: OpeningScheduleConnection;
  /**  Find a Order entity */
  order?: Order;
  /**  Find a Order entity */
  orderById?: Order;
  /**  Find a OrderItem entity */
  orderItemById?: OrderItem;
  /**  Search for OrderItem entities */
  orderItems?: OrderItemConnection;
  /**  Search for Order entities */
  orders?: OrderConnection;
  /**  Find a Payment entity */
  payment?: Payment;
  /**  Search for Payment entities */
  payments?: PaymentConnection;
  /**  Find a PaymentServiceProvider entity */
  paymentServiceProvider?: PaymentServiceProvider;
  /**  Search for PaymentServiceProvider entities */
  paymentServiceProviders?: PaymentServiceProviderConnection;
  /**  Search for PaymentTransaction entities */
  paymentTransactions?: PaymentTransactionConnection;
  /**  Find a Permission entity */
  permission?: Permission;
  /**  Search for Permission entities */
  permissions?: PermissionConnection;
  /**  Search for Price entities */
  prices?: PriceConnection;
  /**  Find a ProductCatalogue entity */
  productCatalogue?: ProductCatalogue;
  /**  Search for ProductCatalogue entities */
  productCatalogues?: ProductCatalogueConnection;
  /**  Find a Retailer entity */
  retailerById?: Retailer;
  /**  Search for Retailer entities */
  retailers?: RetailerConnection;
  /**  Find a ReturnFulfilment entity */
  returnFulfilment?: ReturnFulfilment;
  /**  Find a ReturnFulfilmentItem entity */
  returnFulfilmentItem?: ReturnFulfilmentItem;
  /**  Search for ReturnFulfilmentItem entities */
  returnFulfilmentItems?: ReturnFulfilmentItemConnection;
  /**  Search for ReturnFulfilment entities */
  returnFulfilments?: ReturnFulfilmentConnection;
  /**  Find a ReturnOrder entity */
  returnOrder?: ReturnOrder;
  /**  Find a ReturnOrderItem entity */
  returnOrderItem?: ReturnOrderItem;
  /**  Search for ReturnOrderItem entities */
  returnOrderItems?: ReturnOrderItemConnection;
  /**  Search for ReturnOrder entities */
  returnOrders?: ReturnOrderConnection;
  /**  Search for ReturnVerification entities */
  returnVerifications?: ReturnVerificationConnection;
  /**  Find a Role entity */
  role?: Role;
  /**  Search for Role entities */
  roles?: RoleConnection;
  /**  This query searches the virtual inventory to return locations and available-to-sell stock for the requested products and their given quantities. */
  searchVirtualInventory?: VirtualInventoryConnection;
  /**  Find a Setting entity */
  setting?: Setting;
  /**  Search for Setting entities */
  settings?: SettingConnection;
  /**  Find a StandardProduct entity */
  standardProduct?: StandardProduct;
  /**  Search for StandardProduct entities */
  standardProducts?: StandardProductConnection;
  /**  Find a StorageArea entity */
  storageAreaById?: StorageArea;
  /**  Search for StorageArea entities */
  storageAreas?: StorageAreaConnection;
  /**  Find a StoreAddress entity */
  storeAddressById?: StoreAddress;
  /**  Search for StoreAddress entities */
  storeAddresses?: StoreAddressConnection;
  /**  Find a User entity */
  user?: User;
  /**  Find a User entity */
  userById?: User;
  /**  Search for User entities */
  users?: UserConnection;
  /**  Find a VariantProduct entity */
  variantProduct?: VariantProduct;
  /**  Search for VariantProduct entities */
  variantProducts?: VariantProductConnection;
  /**  Find a VirtualCatalogue entity */
  virtualCatalogue?: VirtualCatalogue;
  /**  Search for VirtualCatalogue entities */
  virtualCatalogues?: VirtualCatalogueConnection;
  /**  Find a VirtualPosition entity */
  virtualPosition?: VirtualPosition;
  /**  Search for VirtualPosition entities */
  virtualPositions?: VirtualPositionConnection;
  /**
   *  _Disclaimer:  This query is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
   *  Find a `VirtualView` entity
   */
  virtualView?: VirtualView;
  /**
   *  _Disclaimer:  This query is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
   *  This query searches a Virtual View to find locations that contain the required stock of products and provide that data as available
   * inventory levels. The query looks into the buffered inventory of the locations. The maximum number of locations returned by this query is 100.
   */
  virtualViewInventoryLevels?: VirtualViewInventoryLevelsOutput;
  /**  Find a Wave entity */
  waveById?: Wave;
  /**  Search for WaveItem entities */
  waveItems?: WaveItemConnection;
  /**  Search for Wave entities */
  waves?: WaveConnection;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryArticleByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryArticleItemsArgs = {
  after?: string;
  barcode?: string[];
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  quantity?: number[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryArticlesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  description?: string[];
  first?: number;
  height?: number[];
  last?: number;
  length?: number[];
  name?: string[];
  quantity?: number[];
  ref?: string[];
  retailerId?: number[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  weight?: number[];
  width?: number[];
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryArticlesByLocationArgs = {
  after?: string;
  before?: string;
  carrierName?: string;
  consignmentStatus?: string[];
  createdOn?: DateRange;
  customerEmail?: string;
  customerFirstName?: string;
  customerLastName?: string;
  customerPhone?: string;
  first?: number;
  fromLocation?: LocationKey[];
  last?: number;
  orderRef?: string[];
  orderType?: string[];
  retailerId?: number[];
  status?: string[];
  toLocation?: LocationKey[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryBillingAccountArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryBillingAccountsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  customer?: CustomerLinkInput;
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  retailer?: RetailerLinkInput;
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflow?: WorkflowLinkInput;
  workflowRef?: string[];
  workflowVersion?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierAttributesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  updatedOn?: DateRange;
  value?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierConsignmentArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierConsignmentArticleByIdArgs = {
  article?: ArticleId;
  carrierConsignment?: CarrierConsignmentKey;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierConsignmentArticlesArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierConsignmentsArgs = {
  after?: string;
  before?: string;
  consignmentReference?: string[];
  createdOn?: DateRange;
  first?: number;
  labelUrl?: string[];
  last?: number;
  orderSummaryUrl?: string[];
  ref?: string[];
  status?: string[];
  trackingLabel?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarrierDetailsesArgs = {
  after?: string;
  agentId?: string[];
  before?: string;
  carrierId?: string[];
  createdOn?: DateRange;
  first?: number;
  last?: number;
  retailerId?: string[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCarriersArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCategoriesArgs = {
  after?: string;
  before?: string;
  catalogue?: ProductCatalogueKey;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  summary?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCategoryArgs = {
  catalogue: ProductCatalogueKey;
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCommentByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCommentsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  entityId?: string[];
  entityType?: string[];
  first?: number;
  last?: number;
  text?: string[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryConsignmentArticleByIdArgs = {
  article?: ArticleId;
  consignment?: ConsignmentId;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryConsignmentArticlesArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryConsignmentByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryConsignmentsArgs = {
  after?: string;
  before?: string;
  consignmentReference?: string[];
  createdOn?: DateRange;
  first?: number;
  labelUrl?: string[];
  last?: number;
  orderSummaryUrl?: string[];
  ref?: string[];
  status?: string[];
  trackingLabel?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryControlArgs = {
  controlGroup: ControlGroupKey;
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryControlGroupArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryControlGroupsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  description?: string[];
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  retailerRefs?: Array<string>[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryControlsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  description?: string[];
  executionOrder?: number[];
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCreditMemoArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCreditMemoesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  currency?: CurrencyLinkInput;
  first?: number;
  issueDate?: DateRange;
  last?: number;
  order?: OrderLinkInput;
  ref?: string[];
  returnOrder?: ReturnOrderLinkInput;
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflow?: WorkflowLinkInput;
  workflowRef?: string[];
  workflowVersion?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCreditMemoItemArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCreditMemoItemsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  description?: string[];
  first?: number;
  last?: number;
  orderItem?: OrderItemLinkInput;
  product?: ProductLinkInput;
  ref?: string[];
  returnOrderItem?: ReturnOrderItemLinkInput;
  type?: string[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCurrenciesArgs = {
  after?: string;
  alphabeticCode?: string[];
  before?: string;
  first?: number;
  isISO4217?: boolean[];
  last?: number;
  minorUnits?: number[];
  name?: string[];
  numericCode?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCurrencyArgs = {
  alphabeticCode: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCustomerArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCustomerAddressByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCustomerAddressesArgs = {
  after?: string;
  before?: string;
  city?: string[];
  companyName?: string[];
  country?: string[];
  createdOn?: DateRange;
  email?: string[];
  first?: number;
  last?: number;
  latitude?: number[];
  longitude?: number[];
  name?: string[];
  postcode?: string[];
  ref?: string[];
  region?: string[];
  state?: string[];
  street?: string[];
  street2?: string[];
  timeZone?: string[];
  type?: string[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCustomerByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryCustomersArgs = {
  after?: string;
  before?: string;
  country?: string[];
  createdOn?: DateRange;
  department?: string[];
  first?: number;
  firstName?: string[];
  last?: number;
  lastName?: string[];
  primaryEmail?: string[];
  primaryPhone?: string[];
  promotionOptIn?: boolean[];
  ref?: string[];
  status?: string[];
  timezone?: string[];
  title?: string[];
  updatedOn?: DateRange;
  username?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryDecisionTableArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFinancialTransactionsArgs = {
  after?: string;
  before?: string;
  cardType?: string[];
  createdOn?: DateRange;
  currency?: string[];
  externalTransactionCode?: string[];
  externalTransactionId?: string[];
  first?: number;
  last?: number;
  paymentMethod?: string[];
  paymentProviderName?: string[];
  ref?: string[];
  status?: string[];
  total?: number[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentChoiceArgs = {
  id?: string;
  ref?: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentChoiceByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentChoicesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  currency?: string[];
  deliverAfter?: DateRange;
  deliverBefore?: DateRange;
  deliveryContact?: string[];
  deliveryEmail?: string[];
  deliveryFirstName?: string[];
  deliveryInstruction?: string[];
  deliveryLastName?: string[];
  deliveryType?: string[];
  dispatchOn?: DateRange;
  first?: number;
  fulfilmentPrice?: number[];
  fulfilmentTaxPrice?: number[];
  fulfilmentType?: string[];
  last?: number;
  pickupLocationRef?: string[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentItemsArgs = {
  after?: string;
  before?: string;
  filledQuantity?: number[];
  first?: number;
  last?: number;
  ref?: string[];
  rejectedQuantity?: number[];
  requestedQuantity?: number[];
  status?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentOptionByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentOptionsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  locationRef?: string[];
  orderType?: string[];
  ref?: string[];
  retailerId?: number[];
  status?: string[];
  trackingCode?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentPlanByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentPlansArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  eta?: string[];
  first?: number;
  last?: number;
  ref?: string[];
  retailerId?: number[];
  splitCount?: number[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryFulfilmentsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  deliveryType?: string[];
  eta?: string[];
  expiryTime?: DateRange;
  first?: number;
  fromLocation?: LocationLinkInput;
  fulfilmentChoiceRef?: string[];
  last?: number;
  ref?: string[];
  retailerId?: number[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryGroupProductArgs = {
  catalogue: ProductCatalogueKey;
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryGroupProductsArgs = {
  after?: string;
  before?: string;
  catalogue?: ProductCatalogueKey;
  category?: CategoryKey;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  summary?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryCatalogueArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryCataloguesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  description?: string[];
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  retailerRefs?: Array<string>[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryPositionArgs = {
  catalogue: InventoryCatalogueKey;
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryPositionAggregateArgs = {
  catalogue: InventoryCatalogueKey;
  networkRef?: string;
  productRef: string;
  status?: string[];
  type?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryPositionsArgs = {
  after?: string;
  before?: string;
  catalogue?: InventoryCatalogueKey;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  locationRef?: string[];
  onHand?: number[];
  productRef?: string[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryQuantitiesArgs = {
  after?: string;
  before?: string;
  catalogue?: InventoryCatalogueKey;
  condition?: string[];
  createdOn?: DateRange;
  expectedOn?: DateRange;
  first?: number;
  last?: number;
  quantity?: number[];
  ref?: string[];
  status?: string[];
  storageAreaRef?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryQuantityArgs = {
  catalogue: InventoryCatalogueKey;
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInventoryQuantityAggregateArgs = {
  expectedOn?: DateRange;
  position: InventoryPositionKey;
  status?: string[];
  type?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInvoiceArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInvoiceItemArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInvoiceItemsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  description?: string[];
  first?: number;
  last?: number;
  product?: ProductLinkInput;
  ref?: string[];
  type?: string[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryInvoicesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  currency?: CurrencyLinkInput;
  dueDate?: DateRange;
  first?: number;
  fulfilment?: FulfilmentLinkInput;
  issueDate?: DateRange;
  last?: number;
  order?: OrderLinkInput;
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflow?: WorkflowLinkInput;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryLocationArgs = {
  id?: string;
  ref?: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryLocationByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryLocationsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  defaultCarrier?: string[];
  defaultCarrierName?: string[];
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  supportPhoneNumber?: string[];
  type?: string[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryManifestArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryManifestsArgs = {
  after?: string;
  before?: string;
  carrierManifestLink?: string[];
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryNetworkArgs = {
  id?: string;
  ref?: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryNetworkByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryNetworksArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryOpeningSchedulesArgs = {
  after?: string;
  allHours?: boolean[];
  before?: string;
  createdOn?: DateRange;
  first?: number;
  friEnd?: number[];
  friStart?: number[];
  last?: number;
  monEnd?: number[];
  monStart?: number[];
  satEnd?: number[];
  satStart?: number[];
  sunEnd?: number[];
  sunStart?: number[];
  thuEnd?: number[];
  thuStart?: number[];
  tueEnd?: number[];
  tueStart?: number[];
  updatedOn?: DateRange;
  wedEnd?: number[];
  wedStart?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryOrderArgs = {
  id?: string;
  ref?: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryOrderByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryOrderItemByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryOrderItemsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  currency?: string[];
  first?: number;
  last?: number;
  paidPrice?: number[];
  price?: number[];
  quantity?: number[];
  ref?: string[];
  status?: string[];
  taxPrice?: number[];
  taxType?: string[];
  totalPrice?: number[];
  totalTaxPrice?: number[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryOrdersArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  customerLink?: CustomerLinkInput;
  first?: number;
  last?: number;
  payment?: PaymentLinkInput;
  ref?: string[];
  status?: string[];
  totalPrice?: number[];
  totalTaxPrice?: number[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPaymentArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPaymentsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  ref?: string[];
  retailer?: RetailerLinkInput;
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflow?: WorkflowLinkInput;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPaymentServiceProviderArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPaymentServiceProvidersArgs = {
  after?: string;
  before?: string;
  clientId?: string[];
  clientSecret?: string[];
  createdOn?: DateRange;
  first?: number;
  host?: string[];
  last?: number;
  name?: string[];
  port?: number[];
  ref?: string[];
  retailer?: RetailerLinkInput;
  serviceAuthToken?: string[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPaymentTransactionsArgs = {
  after?: string;
  authorizationKey?: string[];
  before?: string;
  cardType?: string[];
  createdOn?: DateRange;
  currency?: CurrencyLinkInput;
  first?: number;
  last?: number;
  paymentMethod?: string[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflow?: WorkflowLinkInput;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPermissionArgs = {
  name: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPermissionsArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  name?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryPricesArgs = {
  after?: string;
  before?: string;
  currency?: string[];
  first?: number;
  last?: number;
  type?: string[];
  value?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryProductCatalogueArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryProductCataloguesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  description?: string[];
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  retailerRefs?: Array<string>[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryRetailerByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryRetailersArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  primaryEmail?: string[];
  ref?: string[];
  status?: string[];
  summary?: string[];
  supportContactName?: string[];
  supportEmail?: string[];
  supportPhone?: string[];
  tradingName?: string[];
  updatedOn?: DateRange;
  websiteUrl?: string[];
  websiteUrlName?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnFulfilmentArgs = {
  ref: string;
  returnOrder: ReturnOrderKey;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnFulfilmentItemArgs = {
  ref: string;
  returnFulfilment: ReturnFulfilmentKey;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnFulfilmentItemsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  product?: ProductLinkInput;
  ref?: string[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnFulfilmentsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  destinationLocation?: LocationLinkInput;
  first?: number;
  last?: number;
  lodgedLocation?: LocationLinkInput;
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflow?: WorkflowLinkInput;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnOrderArgs = {
  ref: string;
  retailer: RetailerId;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnOrderItemArgs = {
  ref: string;
  returnOrder: ReturnOrderKey;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnOrderItemsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  orderItem?: OrderItemLinkInput;
  product?: ProductLinkInput;
  ref?: string[];
  returnConditionComment?: string[];
  returnReasonComment?: string[];
  status?: string[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnOrdersArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  creditMemo?: CreditMemoLinkInput;
  currency?: CurrencyLinkInput;
  customer?: CustomerLinkInput;
  destinationLocation?: LocationLinkInput;
  exchangeOrder?: OrderLinkInput;
  first?: number;
  last?: number;
  lodgedLocation?: LocationLinkInput;
  order?: OrderLinkInput;
  ref?: string[];
  retailer?: RetailerLinkInput;
  returnAuthorisationKey?: string[];
  returnAuthorisationKeyExpiry?: DateRange;
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflow?: WorkflowLinkInput;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryReturnVerificationsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  ref?: string[];
  type?: string[];
  updatedOn?: DateRange;
  verificationDetails?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryRoleArgs = {
  name: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryRolesArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  name?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QuerySearchVirtualInventoryArgs = {
  excludedLocationRefs?: string[];
  first?: number;
  orderByProximity?: GeoCoordinateInput;
  productQuantities: ProductQuantityInput[];
  virtualCatalogue: VirtualCatalogueKey;
  virtualPosition?: VirtualPositionInput;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QuerySettingArgs = {
  id?: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QuerySettingsArgs = {
  after?: string;
  before?: string;
  context?: string[];
  contextId?: number[];
  first?: number;
  last?: number;
  name?: string[];
  value?: string[];
  valueType?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryStandardProductArgs = {
  catalogue: ProductCatalogueKey;
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryStandardProductsArgs = {
  after?: string;
  before?: string;
  catalogue?: ProductCatalogueKey;
  category?: CategoryKey;
  createdOn?: DateRange;
  first?: number;
  gtin?: string[];
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  summary?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryStorageAreaByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryStorageAreasArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryStoreAddressByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryStoreAddressesArgs = {
  after?: string;
  before?: string;
  city?: string[];
  companyName?: string[];
  country?: string[];
  createdOn?: DateRange;
  directions?: string[];
  email?: string[];
  first?: number;
  last?: number;
  latitude?: number[];
  longitude?: number[];
  name?: string[];
  postcode?: string[];
  ref?: string[];
  region?: string[];
  state?: string[];
  street?: string[];
  street2?: string[];
  timeZone?: string[];
  type?: string[];
  updatedOn?: DateRange;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryUserArgs = {
  id?: string;
  username?: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryUserByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryUsersArgs = {
  after?: string;
  before?: string;
  country?: string[];
  createdOn?: DateRange;
  department?: string[];
  first?: number;
  firstName?: string[];
  last?: number;
  lastName?: string[];
  primaryEmail?: string[];
  primaryPhone?: string[];
  promotionOptIn?: boolean[];
  ref?: string[];
  status?: string[];
  timezone?: string[];
  title?: string[];
  type?: string[];
  updatedOn?: DateRange;
  username?: string[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVariantProductArgs = {
  catalogue: ProductCatalogueKey;
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVariantProductsArgs = {
  after?: string;
  before?: string;
  catalogue?: ProductCatalogueKey;
  category?: CategoryKey;
  createdOn?: DateRange;
  first?: number;
  gtin?: string[];
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  summary?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVirtualCatalogueArgs = {
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVirtualCataloguesArgs = {
  after?: string;
  before?: string;
  controlGroupRef?: string[];
  createdOn?: DateRange;
  description?: string[];
  first?: number;
  inventoryCatalogueRef?: string[];
  last?: number;
  name?: string[];
  networkIds?: Array<string>[];
  productCatalogueRef?: string[];
  ref?: string[];
  retailerRefs?: Array<string>[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVirtualPositionArgs = {
  catalogue: VirtualCatalogueKey;
  ref: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVirtualPositionsArgs = {
  after?: string;
  before?: string;
  catalogue?: VirtualCatalogueKey;
  createdOn?: DateRange;
  first?: number;
  groupRef?: string[];
  last?: number;
  productRef?: string[];
  quantity?: number[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVirtualViewArgs = {
  input: VirtualViewInput;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryVirtualViewInventoryLevelsArgs = {
  first?: number;
  input: VirtualViewInventoryLevelsInput;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryWaveByIdArgs = {
  id: string;
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryWaveItemsArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  quantity?: number[];
};


/**  Query type defines the GraphQL operations that fetch data from the server */
export type QueryWavesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  processingLocation?: LocationLinkInput;
  ref?: string[];
  retailerId?: number[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**  An Article can be created when a fulfilment is fulfilled, or when a dispatch occurs. The Article represents the physical parcel that contains the customer order items. The Article is the entity received by the customer. */
export type Article = Node & Orchestrateable & {
  __typename?: 'Article';
  /**  Attributes of article */
  attributes?: Attribute[];
  /**  Relationships between carrierConsignment and article */
  carrierConsignmentArticles?: CarrierConsignmentArticleConnection;
  /**  Relationships between consignment and article */
  consignmentArticles?: ConsignmentArticleConnection;
  /**  Time of creation */
  createdOn?: string;
  /**  Description */
  description?: string;
  /**  Fulfilments associated with this article */
  fulfilments?: FulfilmentConnection;
  /**  Height */
  height: number;
  /**  ID of the object */
  id: string;
  /**  Items within this article */
  items?: ArticleItemConnection;
  /**  Length */
  length: number;
  /**  Name */
  name?: string;
  /**  Quantity */
  quantity?: number;
  /**  The unique article reference provided by the retailer */
  ref?: string;
  /**  The current status of the `Article`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  The storage areas of the article */
  storageArea?: StorageArea;
  /**  Type of the `Article`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  Weight */
  weight: number;
  /**  Width */
  width: number;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


/**  An Article can be created when a fulfilment is fulfilled, or when a dispatch occurs. The Article represents the physical parcel that contains the customer order items. The Article is the entity received by the customer. */
export type ArticleCarrierConsignmentArticlesArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
};


/**  An Article can be created when a fulfilment is fulfilled, or when a dispatch occurs. The Article represents the physical parcel that contains the customer order items. The Article is the entity received by the customer. */
export type ArticleConsignmentArticlesArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
};


/**  An Article can be created when a fulfilment is fulfilled, or when a dispatch occurs. The Article represents the physical parcel that contains the customer order items. The Article is the entity received by the customer. */
export type ArticleFulfilmentsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  deliveryType?: string[];
  eta?: string[];
  expiryTime?: DateRange;
  first?: number;
  fromLocation?: LocationLinkInput;
  fulfilmentChoiceRef?: string[];
  last?: number;
  ref?: string[];
  retailerId?: number[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  An Article can be created when a fulfilment is fulfilled, or when a dispatch occurs. The Article represents the physical parcel that contains the customer order items. The Article is the entity received by the customer. */
export type ArticleItemsArgs = {
  after?: string;
  barcode?: string[];
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  quantity?: number[];
  updatedOn?: DateRange;
};

/**  Represents an object with `ID`. */
export type Node = {
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  Time of last update */
  updatedOn?: string;
};

/**  Represents an object that can be orchestrated via a workflow */
export type Orchestrateable = {
  status?: string;
  type: string;
  workflowRef: string;
  workflowVersion: number;
};

/**
 *  An `attribute` is a trio of *name*, *type* and *value*. Attributes are useful for storing additional information into objects. <br/>
 *  <br/><br/>**USAGE**<br/>
 *  Attributes should be unique by `name`. If an attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else they will be inserted.
 */
export type Attribute = {
  __typename?: 'Attribute';
  /**  Name of the `attribute` */
  name: string;
  /**  Type of the attribute's `value`. This is a free string and can be used by the client to interpret and cast the `value` into the appropriate type. */
  type: string;
  /**  Value of the `attribute` */
  value: any;
};

/**  A list of results that matched against a CarrierConsignmentArticle search query */
export type CarrierConsignmentArticleConnection = {
  __typename?: 'CarrierConsignmentArticleConnection';
  /**  A list of edges that links to CarrierConsignmentArticle type node */
  edges?: CarrierConsignmentArticleEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a CarrierConsignmentArticle connection to the CarrierConsignmentArticle type */
export type CarrierConsignmentArticleEdge = {
  __typename?: 'CarrierConsignmentArticleEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the CarrierConsignmentArticle edge */
  node?: CarrierConsignmentArticle;
};

/**  The relationship between carrierConsignment and article */
export type CarrierConsignmentArticle = {
  __typename?: 'CarrierConsignmentArticle';
  /**  Article */
  article?: Article;
  /**  Consignment */
  carrierConsignment?: CarrierConsignment;
};

/**  A `Consignment` is the object representing the booking of an article for delivery. */
export type CarrierConsignment = Extendable & Node & Referenceable & {
  __typename?: 'CarrierConsignment';
  /**  A list of attributes associated with this Consignment. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Attribute[];
  /**  Carrier used for the consignment */
  carrier?: Carrier;
  /**  Relationships between consignment and article */
  carrierConsignmentArticles?: CarrierConsignmentArticleConnection;
  /**  The external consignment reference assigned by the carrier */
  consignmentReference?: string;
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  The URL used to retrieve the shipping label */
  labelUrl?: string;
  /**  Manifests that contain the consignment */
  manifests?: ManifestConnection;
  /**  A url to represent the order summary. Usually the manifest url from the service provider. */
  orderSummaryUrl?: string;
  /**  External reference of the `Consignment`. Must be unique. */
  ref: string;
  /**  Retailer who is booking the consignment */
  retailer?: Retailer;
  /**  The status of the consignment */
  status?: string;
  /**  Tracking label of the consignment */
  trackingLabel?: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification */
  workflowRef: string;
  /**   The version of the workflow */
  workflowVersion: number;
};


/**  A `Consignment` is the object representing the booking of an article for delivery. */
export type CarrierConsignmentCarrierConsignmentArticlesArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
};


/**  A `Consignment` is the object representing the booking of an article for delivery. */
export type CarrierConsignmentManifestsArgs = {
  after?: string;
  before?: string;
  carrierManifestLink?: string[];
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**  Represents an object with `attribute`s */
export type Extendable = {
  /**  Array of attributes */
  attributes?: Attribute[];
};

/**  Represents an object with an external reference */
export type Referenceable = {
  /**  The reference key */
  ref: string;
};

/**  The carrier information */
export type Carrier = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'Carrier';
  /**  A list of attributes associated with this Carrier. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Attribute[];
  /**  A connection to associated Consignments */
  carrierConsignments?: CarrierConsignmentConnection;
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  A list of manifests associated with this Carrier. */
  manifests?: Manifest[];
  /**  The carrier name */
  name: string;
  /**  The reference identifier used to identify an entity */
  ref: string;
  /**  The retailer */
  retailer?: Retailer;
  /**  The current status of the `Carrier`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**
   *  Type of the `Carrier`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  The type field can be used to differentiate between Inventory Position workflows
   */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**
   *  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/>
   *  The reference used for workflow identification
   */
  workflowRef: string;
  /**
   *  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/>
   *   The version of the workflow
   */
  workflowVersion: number;
};


/**  The carrier information */
export type CarrierCarrierConsignmentsArgs = {
  after?: string;
  before?: string;
  consignmentReference?: string[];
  createdOn?: DateRange;
  first?: number;
  labelUrl?: string[];
  last?: number;
  orderSummaryUrl?: string[];
  ref?: string[];
  status?: string[];
  trackingLabel?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
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
  from?: string;
  /**  `DateTime` in a valid ISO8601 format for identifying records _before_ or _at_ the given timestamp. If this field is not passed in the request, the response will contain all records after the `from` date. */
  to?: string;
};

/**  A list of results that matched against a CarrierConsignment search query */
export type CarrierConsignmentConnection = {
  __typename?: 'CarrierConsignmentConnection';
  /**  A list of edges that links to CarrierConsignment type node */
  edges?: CarrierConsignmentEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a CarrierConsignment connection to the CarrierConsignment type */
export type CarrierConsignmentEdge = {
  __typename?: 'CarrierConsignmentEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the CarrierConsignment edge */
  node?: CarrierConsignment;
};

/**  Information to aid in pagination */
export type PageInfo = {
  __typename?: 'PageInfo';
  /**  true if there are one or more pages of items beyond the current page */
  hasNextPage?: boolean;
  /**  true if there are one or more pages of items before the current page */
  hasPreviousPage?: boolean;
};

export type Manifest = Extendable & Node & Referenceable & {
  __typename?: 'Manifest';
  /**  A list of attributes associated with the `Manifest`. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Attribute[];
  /**  The `Carrier` the `Manifest` is for */
  carrier: Carrier;
  /**  A list of the `CarrierConsignment`s contained by the manifest */
  carrierConsignments?: CarrierConsignmentConnection;
  /**  The link where the carrier's manifest is stored. Not all the carriers generates one, so this field is optional. */
  carrierManifestLink?: string;
  /**  The time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  The `Location` the `Manifest` is associated with */
  location?: Location;
  /**  The name of the `Manifest` */
  name?: string;
  /**  External reference for the `Manifest`. Must be unique. */
  ref: string;
  /**  The status of the `Manifest` */
  status?: string;
  /**  The type of `Manifest` */
  type: string;
  /**  The time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification */
  workflowRef: string;
  /**  The version of the workflow */
  workflowVersion: number;
};


export type ManifestCarrierConsignmentsArgs = {
  after?: string;
  before?: string;
  consignmentReference?: string[];
  createdOn?: DateRange;
  first?: number;
  labelUrl?: string[];
  last?: number;
  orderSummaryUrl?: string[];
  ref?: string[];
  status?: string[];
  trackingLabel?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**
 *  A Location is any place where an order can be fulfilled and/or collected by the customer.
 *  Locations can include a store, warehouse, drop ship vendor, lockers or a third party collection point such as ParcelPoint.
 */
export type Location = Node & {
  __typename?: 'Location';
  /**  Attributes */
  attributes?: Attribute[];
  /**  Time of creation */
  createdOn?: string;
  /**  Default carrier */
  defaultCarrier?: string;
  /**  Default carrier of the location */
  defaultCarrierName?: string;
  /**  ID of the object */
  id: string;
  /**  Manifests for this location */
  manifests?: ManifestConnection;
  /**  Name of location */
  name?: string;
  /**  Networks the location is assigned to */
  networks?: NetworkConnection;
  /**  Opening Schedule */
  openingSchedule?: OpeningSchedule;
  /**  Store location of the the location */
  primaryAddress?: Address;
  /**  The location (i.e. store) id provided by the retailer */
  ref?: string;
  /**  Retailer */
  retailer?: Retailer;
  /**  The location status. Possible values are 'ACTIVE', 'INACTIVE'. */
  status?: string;
  /**  Storage areas at the location */
  storageAreas?: StorageAreaConnection;
  /**  The location contact number */
  supportPhoneNumber?: string;
  /**  Type */
  type?: string;
  /**  Time of last update */
  updatedOn?: string;
  /**
   *  The reference used for workflow identification
   * @deprecated No longer supported
   */
  workflowRef?: string;
  /**
   *  The version of the workflow
   * @deprecated No longer supported
   */
  workflowVersion?: number;
};


/**
 *  A Location is any place where an order can be fulfilled and/or collected by the customer.
 *  Locations can include a store, warehouse, drop ship vendor, lockers or a third party collection point such as ParcelPoint.
 */
export type LocationManifestsArgs = {
  after?: string;
  before?: string;
  carrierManifestLink?: string[];
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**
 *  A Location is any place where an order can be fulfilled and/or collected by the customer.
 *  Locations can include a store, warehouse, drop ship vendor, lockers or a third party collection point such as ParcelPoint.
 */
export type LocationNetworksArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
};


/**
 *  A Location is any place where an order can be fulfilled and/or collected by the customer.
 *  Locations can include a store, warehouse, drop ship vendor, lockers or a third party collection point such as ParcelPoint.
 */
export type LocationStorageAreasArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
};

/**  A list of results that matched against a Manifest search query */
export type ManifestConnection = {
  __typename?: 'ManifestConnection';
  /**  A list of edges that links to Manifest type node */
  edges?: ManifestEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Manifest connection to the Manifest type */
export type ManifestEdge = {
  __typename?: 'ManifestEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Manifest edge */
  node?: Manifest;
};

/**  A list of results that matched against a Network search query */
export type NetworkConnection = {
  __typename?: 'NetworkConnection';
  /**  A list of edges that links to Network type node */
  edges?: NetworkEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Network connection to the Network type */
export type NetworkEdge = {
  __typename?: 'NetworkEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Network edge */
  node?: Network;
};

/**  A network is a collection of physical fulfilment or collection locations such as stores, warehouses, distribution centres. */
export type Network = Node & {
  __typename?: 'Network';
  /**  Network attributes */
  attributes?: Attribute[];
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  Locations in the network */
  locations?: LocationConnection;
  /**  Reference to the network. This is the name of the network you passed in while creating the network. Recommended to be unique. */
  ref?: string;
  /**  A list of retailers associated with this network */
  retailers?: RetailerConnection;
  /**  Status of the network */
  status?: string;
  /**  The type of network */
  type?: string;
  /**  Time of last update */
  updatedOn?: string;
};


/**  A network is a collection of physical fulfilment or collection locations such as stores, warehouses, distribution centres. */
export type NetworkLocationsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  defaultCarrier?: string[];
  defaultCarrierName?: string[];
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  supportPhoneNumber?: string[];
  type?: string[];
  updatedOn?: DateRange;
};


/**  A network is a collection of physical fulfilment or collection locations such as stores, warehouses, distribution centres. */
export type NetworkRetailersArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  primaryEmail?: string[];
  ref?: string[];
  status?: string[];
  summary?: string[];
  supportContactName?: string[];
  supportEmail?: string[];
  supportPhone?: string[];
  tradingName?: string[];
  updatedOn?: DateRange;
  websiteUrl?: string[];
  websiteUrlName?: string[];
};

/**  A list of results that matched against a Location search query */
export type LocationConnection = {
  __typename?: 'LocationConnection';
  /**  A list of edges that links to Location type node */
  edges?: LocationEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Location connection to the Location type */
export type LocationEdge = {
  __typename?: 'LocationEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Location edge */
  node?: Location;
};

/**  A list of results that matched against a Retailer search query */
export type RetailerConnection = {
  __typename?: 'RetailerConnection';
  /**  A list of edges that links to Retailer type node */
  edges?: RetailerEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Retailer connection to the Retailer type */
export type RetailerEdge = {
  __typename?: 'RetailerEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Retailer edge */
  node?: Retailer;
};

/**  A retailer is a business or person that sells goods to consumers */
export type Retailer = Node & Referenceable & {
  __typename?: 'Retailer';
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  A list of retailer's network (stores, warehouses, distribution centers) */
  networks?: NetworkConnection;
  /**  Primary email of the retailer */
  primaryEmail?: string;
  /**  Reference for the retailer */
  ref: string;
  /**  Status of the retailer */
  status?: string;
  /**  Short description of the retailer */
  summary?: string;
  /**  Customer support contact name */
  supportContactName?: string;
  /**  Customer support email used in customer notifications */
  supportEmail?: string;
  /**  Customer support phone number used in customer notifications */
  supportPhone?: string;
  /**  The retailer's trading name used in customer notifications */
  tradingName?: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  Retailer's website URL used in customer notifications */
  websiteUrl?: string;
  /**  Friendly text to be shown for URL links in customer notifications */
  websiteUrlName?: string;
};


/**  A retailer is a business or person that sells goods to consumers */
export type RetailerNetworksArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
};

/**  Opening hours for a location */
export type OpeningSchedule = {
  __typename?: 'OpeningSchedule';
  /**  Is the location open 24hrs */
  allHours: boolean;
  /**  Time of creation */
  createdOn?: string;
  /**  Closing time on Friday (HHmm) */
  friEnd: number;
  /**  Opening time on Friday (HHmm) */
  friStart: number;
  /**  ID of the object */
  id: string;
  /**  Closing time on Monday (HHmm) */
  monEnd: number;
  /**  Opening time on Monday (HHmm). */
  monStart: number;
  /**  Closing time on Saturday (HHmm) */
  satEnd: number;
  /**  Opening time on Saturday (HHmm) */
  satStart: number;
  /**  Closing time on Sunday (HHmm) */
  sunEnd: number;
  /**  Opening time on Sunday (HHmm) */
  sunStart: number;
  /**  Closing time on Thursday (HHmm) */
  thuEnd: number;
  /**  Opening time on Thursday (HHmm) */
  thuStart: number;
  /**  Closing time on Tuesday (HHmm) */
  tueEnd: number;
  /**  Opening time on Tuesday (HHmm) */
  tueStart: number;
  /**  Time of last update */
  updatedOn?: string;
  /**  Closing time on Wednesday (HHmm) */
  wedEnd: number;
  /**  Opening time on Wednesday (HHmm) */
  wedStart: number;
};

export type Address = {
  /**  City */
  city?: string;
  /**  Company name */
  companyName?: string;
  /**  Country */
  country?: string;
  /**  Time of creation */
  createdOn?: string;
  /**  Email */
  email?: string;
  /**  ID of the object */
  id: string;
  /**  Latitude */
  latitude?: number;
  /**  Longitude */
  longitude?: number;
  /**  Name */
  name?: string;
  /**  Postcode */
  postcode?: string;
  /**  Location reference */
  ref?: string;
  /**  Region */
  region?: string;
  /**  State */
  state?: string;
  /**  Street */
  street?: string;
  /**  Street 2 */
  street2?: string;
  /**  Timezone */
  timeZone?: string;
  /**  Type of Address, to support legacy address, the value can be AGENT and ORDER */
  type?: string;
  /**  Time of last update */
  updatedOn?: string;
};

/**  A list of results that matched against a StorageArea search query */
export type StorageAreaConnection = {
  __typename?: 'StorageAreaConnection';
  /**  A list of edges that links to StorageArea type node */
  edges?: StorageAreaEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a StorageArea connection to the StorageArea type */
export type StorageAreaEdge = {
  __typename?: 'StorageAreaEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the StorageArea edge */
  node?: StorageArea;
};

/**  The location storage areas */
export type StorageArea = {
  __typename?: 'StorageArea';
  /**  Articles in the storage area */
  articles?: ArticleConnection;
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  Location */
  location?: Location;
  /**  Name */
  name?: string;
  /**  Status */
  status?: string;
  /**  Type */
  type?: string;
  /**  Time of last update */
  updatedOn?: string;
};


/**  The location storage areas */
export type StorageAreaArticlesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  description?: string[];
  first?: number;
  height?: number[];
  last?: number;
  length?: number[];
  name?: string[];
  quantity?: number[];
  ref?: string[];
  retailerId?: number[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  weight?: number[];
  width?: number[];
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**  A list of results that matched against a Article search query */
export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /**  A list of edges that links to Article type node */
  edges?: ArticleEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Article connection to the Article type */
export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Article edge */
  node?: Article;
};

/**  A list of results that matched against a ConsignmentArticle search query */
export type ConsignmentArticleConnection = {
  __typename?: 'ConsignmentArticleConnection';
  /**  A list of edges that links to ConsignmentArticle type node */
  edges?: ConsignmentArticleEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a ConsignmentArticle connection to the ConsignmentArticle type */
export type ConsignmentArticleEdge = {
  __typename?: 'ConsignmentArticleEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the ConsignmentArticle edge */
  node?: ConsignmentArticle;
};

/**  The relationship between consignment and article */
export type ConsignmentArticle = {
  __typename?: 'ConsignmentArticle';
  /**  Article */
  article?: Article;
  /**  Consignment */
  consignment?: Consignment;
};

/**  A `Consignment` is the object representing the booking of an article for delivery. */
export type Consignment = Node & {
  __typename?: 'Consignment';
  /**  Carrier used for the consignment */
  carrier?: Carrier;
  /**  Relationships between consignment and article */
  consignmentArticles?: ConsignmentArticleConnection;
  /**  The external consignment reference assigned by the carrier */
  consignmentReference: string;
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  The URL used to retrieve the shipping label */
  labelUrl?: string;
  /**  A url to represent the order summary. Usually the manifest url from the service provider. */
  orderSummaryUrl?: string;
  /**  External reference of the object. Recommended to be unique. */
  ref?: string;
  /**  Retailer who is booking the consignment */
  retailer?: Retailer;
  /**  The status of the consignment */
  status?: string;
  /**  Tracking label of the consignment */
  trackingLabel?: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification */
  workflowRef: string;
  /**   The version of the workflow */
  workflowVersion: number;
};


/**  A `Consignment` is the object representing the booking of an article for delivery. */
export type ConsignmentConsignmentArticlesArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
};

export type LocationLinkInput = {
  /**  Max character limit: 8. */
  ref: string;
};

/**  A list of results that matched against a Fulfilment search query */
export type FulfilmentConnection = {
  __typename?: 'FulfilmentConnection';
  /**  A list of edges that links to Fulfilment type node */
  edges?: FulfilmentEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Fulfilment connection to the Fulfilment type */
export type FulfilmentEdge = {
  __typename?: 'FulfilmentEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Fulfilment edge */
  node?: Fulfilment;
};

/**
 *  A `Fulfilment` represents one or more items in an order that need to be picked & packed for the customer. <br/>
 *  A fulfilment is assigned to a location based on the retailer's fulfilment rules and available inventory.
 *  A fulfilment will have an origin (from) and destination (to) associated with it.
 */
export type Fulfilment = Node & Orchestrateable & {
  __typename?: 'Fulfilment';
  /**  Connection representing a list of `Article`s */
  articles?: ArticleConnection;
  /**  Attributes of fulfilment */
  attributes?: Attribute[];
  /**  Time of creation */
  createdOn?: string;
  /**  Type of delivery. Supported values are _STANDARD_, _OVERNIGHT_ and _EXPRESS_. */
  deliveryType?: string;
  /**  The estimated time of completing the fulfilment. */
  eta?: string;
  /**  Expiry time for the fulfilment */
  expiryTime?: string;
  /**  `Address` of the fulfilment location */
  fromAddress?: Address;
  /**  The `Location` responsible for processing outbound `Fulfilment`s */
  fromLocation?: LocationLink;
  /**  Represents the `FulfilmentChoice` corresponding to this object */
  fulfilmentChoiceRef?: string;
  /**  ID of the object */
  id: string;
  /**  Connection representing a list of `FulfilmentItem`s */
  items?: FulfilmentItemConnection;
  /**  The associated `Order` */
  order?: Order;
  /**  External reference of the object. Recommended to be unique. */
  ref?: string;
  /**  The current status of the `Fulfilment`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  `Address` of the delivery location */
  toAddress?: Address;
  /**
   *  Type of the `Fulfilment`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the Fulfilment. Supports all values.
   */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The associated `Customer` */
  user?: Customer;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


/**
 *  A `Fulfilment` represents one or more items in an order that need to be picked & packed for the customer. <br/>
 *  A fulfilment is assigned to a location based on the retailer's fulfilment rules and available inventory.
 *  A fulfilment will have an origin (from) and destination (to) associated with it.
 */
export type FulfilmentArticlesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  description?: string[];
  first?: number;
  height?: number[];
  last?: number;
  length?: number[];
  name?: string[];
  quantity?: number[];
  ref?: string[];
  retailerId?: number[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  weight?: number[];
  width?: number[];
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**
 *  A `Fulfilment` represents one or more items in an order that need to be picked & packed for the customer. <br/>
 *  A fulfilment is assigned to a location based on the retailer's fulfilment rules and available inventory.
 *  A fulfilment will have an origin (from) and destination (to) associated with it.
 */
export type FulfilmentItemsArgs = {
  after?: string;
  before?: string;
  filledQuantity?: number[];
  first?: number;
  last?: number;
  ref?: string[];
  rejectedQuantity?: number[];
  requestedQuantity?: number[];
  status?: string[];
};

export type LocationLink = {
  __typename?: 'LocationLink';
  ref?: string;
};

/**  A list of results that matched against a FulfilmentItem search query */
export type FulfilmentItemConnection = {
  __typename?: 'FulfilmentItemConnection';
  /**  A list of edges that links to FulfilmentItem type node */
  edges?: FulfilmentItemEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a FulfilmentItem connection to the FulfilmentItem type */
export type FulfilmentItemEdge = {
  __typename?: 'FulfilmentItemEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the FulfilmentItem edge */
  node?: FulfilmentItem;
};

/**  Represents fulfilment details corresponding to an `OrderItem`. */
export type FulfilmentItem = {
  __typename?: 'FulfilmentItem';
  /**  Number of `OrderItem`s confirmed */
  filledQuantity: number;
  /**  The associated `Fulfilment` */
  fulfilment?: Fulfilment;
  /**  ID of the object */
  id: string;
  /**  The associated `OrderItem` */
  orderItem?: OrderItem;
  /**  External reference of the object. Recommended to be unique. */
  ref?: string;
  /**  Number of `OrderItem`s rejected */
  rejectedQuantity: number;
  /**  Number of `OrderItem`s assigned to the fulfilment */
  requestedQuantity?: number;
  /**  Status */
  status: string;
};

/**  An `OrderItem` generally represents a SKU purchased by the customer. There can be one or more `OrderItem`s within an `Order` */
export type OrderItem = Node & {
  __typename?: 'OrderItem';
  /**  List of `OrderItem` `attribute`s. */
  attributes?: Attribute[];
  /**  Time of creation */
  createdOn?: string;
  /**  Currency. Should ideally be a 3 letter ISO currency code. For instance _AUD_. */
  currency?: string;
  /**  Represents the `FulfilmentChoice` corresponding to this object */
  fulfilmentChoice?: FulfilmentChoice;
  /**  ID of the object */
  id: string;
  /**  The associated `Order` */
  order?: Order;
  /**  Price paid. Excludes tax. */
  paidPrice?: number;
  /**  Price */
  price?: number;
  /**  Represents the `Product` corresponding to this object */
  product: Product;
  /**  Quantity ordered */
  quantity: number;
  /**  External reference of the object. Recommended to be unique. */
  ref?: string;
  /**  Status of the OrderItem. Currently supported values are limited to _CREATED_, _NEW_, _COMPLETE_. */
  status: string;
  /**  Tax price */
  taxPrice?: number;
  /**  Tax type. Supported values are _GST_, _VAT_, _EXCLTAX_ */
  taxType?: string;
  /**  Total price */
  totalPrice?: number;
  /**  Total tax price */
  totalTaxPrice?: number;
  /**  Time of last update */
  updatedOn?: string;
};

/**  A `Fulfilment choice` represents a set of order items with the same delivery method, delivery date and delivery address. <br/>The fulfilment choice specified when booking the order */
export type FulfilmentChoice = Node & Orchestrateable & {
  __typename?: 'FulfilmentChoice';
  /**  List of Attribute containing meta data information for an entity. */
  attributes?: Attribute[];
  /**  Time of creation. */
  createdOn?: string;
  /**  The type of currency, 3 letter ISO currency code. */
  currency?: string;
  /**  Time of delivery selected by the customer at the time of order creation, specifies Deliver On date/time the customer will receive the order (package). */
  deliverAfter?: string;
  /**  Time of delivery selected by the customer at the time of order creation, specifies Deliver Till date/time the customer will receive the order (package). */
  deliverBefore?: string;
  /**  Delivery address. Required if it is a home delivery. */
  deliveryAddress?: Address;
  /**  Mobile number of delivery recipient. */
  deliveryContact?: string;
  /**  Email address to which e-delivery is made. */
  deliveryEmail?: string;
  /**  First Name of delivery recipient. */
  deliveryFirstName?: string;
  /**  Instruction provided by the customer (250 character limit). */
  deliveryInstruction?: string;
  /**  Last Name of delivery recipient. */
  deliveryLastName?: string;
  /**  The type of delivery determined by retailers' shipping options. Example values are STANDARD, EXPRESS, OVERNIGHT, 3HOURS */
  deliveryType: string;
  /**  Time that indicates date of dispatch */
  dispatchOn?: string;
  /**  FulfilmentPrice refers to shipping and C&C fees. */
  fulfilmentPrice?: number;
  /**  Fulfilments associated with the fulfilmentChoice. */
  fulfilments?: FulfilmentConnection;
  /**  This refers to the tax cost associated with the fulfilment price. */
  fulfilmentTaxPrice?: number;
  /**  Indicates the type of fulfilment. */
  fulfilmentType?: string;
  /**  ID of the object */
  id: string;
  /**  Order items associated with the fulfilmentChoice. */
  items?: OrderItemConnection;
  /**  Pickup location. Required if it is a click & collect. */
  pickupLocationRef?: string;
  /**  External reference of the object. Recommended to be unique. */
  ref?: string;
  /**
   *  The current status of the `FulfilmentChoice`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  The current status of the Fulfilment choice.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see Orchestration.
   */
  status?: string;
  /**
   *  Type of the `FulfilmentChoice`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the Fulfilment choice. Supports all values.
   */
  type: string;
  /**  Time of last update. */
  updatedOn?: string;
  /**
   *  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/>
   *  The workflow's reference
   */
  workflowRef: string;
  /**
   *  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/>
   *  The version of the workflow
   */
  workflowVersion: number;
};


/**  A `Fulfilment choice` represents a set of order items with the same delivery method, delivery date and delivery address. <br/>The fulfilment choice specified when booking the order */
export type FulfilmentChoiceFulfilmentsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  deliveryType?: string[];
  eta?: string[];
  expiryTime?: DateRange;
  first?: number;
  fromLocation?: LocationLinkInput;
  fulfilmentChoiceRef?: string[];
  last?: number;
  ref?: string[];
  retailerId?: number[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  A `Fulfilment choice` represents a set of order items with the same delivery method, delivery date and delivery address. <br/>The fulfilment choice specified when booking the order */
export type FulfilmentChoiceItemsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  currency?: string[];
  first?: number;
  last?: number;
  paidPrice?: number[];
  price?: number[];
  quantity?: number[];
  ref?: string[];
  status?: string[];
  taxPrice?: number[];
  taxType?: string[];
  totalPrice?: number[];
  totalTaxPrice?: number[];
  updatedOn?: DateRange;
};

/**  A list of results that matched against a OrderItem search query */
export type OrderItemConnection = {
  __typename?: 'OrderItemConnection';
  /**  A list of edges that links to OrderItem type node */
  edges?: OrderItemEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a OrderItem connection to the OrderItem type */
export type OrderItemEdge = {
  __typename?: 'OrderItemEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the OrderItem edge */
  node?: OrderItem;
};

/**  A customer's order. */
export type Order = Node & Orchestrateable & {
  __typename?: 'Order';
  /**  List of order `attribute`s */
  attributes?: Attribute[];
  /**  Time of creation */
  createdOn?: string;
  /**  `Customer` of the order */
  customer?: Customer;
  /**  Contains the reference of the customer. It can be used to fetch the `Customer` object. */
  customerLink?: CustomerLink;
  /**  Connection representing a list of `FinancialTransaction`s */
  financialTransactions?: FinancialTransactionConnection;
  /**  The `FulfilmentChoice` specified when booking the order */
  fulfilmentChoice?: FulfilmentChoice;
  /**  The `FulfilmentChoices` specified when booking the order */
  fulfilmentChoices?: FulfilmentChoiceConnection;
  /**  Connection representing a list of `Fulfilment`s */
  fulfilments?: FulfilmentConnection;
  /**  ID of the object */
  id: string;
  /**  Connection representing a list of `OrderItem`s */
  items?: OrderItemConnection;
  /**  `Payment` for the order */
  payment?: PaymentLink;
  /**  External reference of the object. Must be unique. */
  ref?: string;
  /**  `Retailer` of the order */
  retailer?: Retailer;
  /**
   *  The current status of the `Order`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  The current status of the Order.
   */
  status?: string;
  /**  Total price */
  totalPrice?: number;
  /**  Total tax price */
  totalTaxPrice?: number;
  /**
   *  Type of the `Order`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the Order, typically used by the Orchestration Engine to determine the workflow
   *  that should be applied. Unless stated otherwise, no values are enforced by the platform. Currently supports all values.
   */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**
   *  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/>
   *  The workflow's reference
   */
  workflowRef: string;
  /**
   *  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/>
   *  The version of the workflow
   */
  workflowVersion: number;
};


/**  A customer's order. */
export type OrderFinancialTransactionsArgs = {
  after?: string;
  before?: string;
  cardType?: string[];
  createdOn?: DateRange;
  currency?: string[];
  externalTransactionCode?: string[];
  externalTransactionId?: string[];
  first?: number;
  last?: number;
  paymentMethod?: string[];
  paymentProviderName?: string[];
  ref?: string[];
  status?: string[];
  total?: number[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  A customer's order. */
export type OrderFulfilmentChoicesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  currency?: string[];
  deliverAfter?: DateRange;
  deliverBefore?: DateRange;
  deliveryContact?: string[];
  deliveryEmail?: string[];
  deliveryFirstName?: string[];
  deliveryInstruction?: string[];
  deliveryLastName?: string[];
  deliveryType?: string[];
  dispatchOn?: DateRange;
  first?: number;
  fulfilmentPrice?: number[];
  fulfilmentTaxPrice?: number[];
  fulfilmentType?: string[];
  last?: number;
  pickupLocationRef?: string[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  A customer's order. */
export type OrderFulfilmentsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  deliveryType?: string[];
  eta?: string[];
  expiryTime?: DateRange;
  first?: number;
  fromLocation?: LocationLinkInput;
  fulfilmentChoiceRef?: string[];
  last?: number;
  ref?: string[];
  retailerId?: number[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  A customer's order. */
export type OrderItemsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  currency?: string[];
  first?: number;
  last?: number;
  paidPrice?: number[];
  price?: number[];
  quantity?: number[];
  ref?: string[];
  status?: string[];
  taxPrice?: number[];
  taxType?: string[];
  totalPrice?: number[];
  totalTaxPrice?: number[];
  updatedOn?: DateRange;
};

/**  Represents the customer who places an order */
export type Customer = Node & {
  __typename?: 'Customer';
  /**  Attributes */
  attributes?: Attribute[];
  /**  The country the customer is operating from */
  country?: string;
  /**  Time of creation */
  createdOn?: string;
  /**  The department/team that the customer belongs to */
  department?: string;
  /**  The customer's first name */
  firstName?: string;
  /**  ID of the object */
  id: string;
  /**  The customer's last name */
  lastName?: string;
  /**  Email */
  primaryEmail?: string;
  /**  Phone number */
  primaryPhone?: string;
  /**  Whether the customer has opted to receive promotions */
  promotionOptIn?: boolean;
  /**  Username of the customer */
  ref?: string;
  /**  Retailer used by the customer */
  retailer?: Retailer;
  /**  Status */
  status?: string;
  /**  Timezones */
  timezone?: string;
  /**  The customer's title */
  title?: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  Username */
  username?: string;
};

export type CustomerLink = {
  __typename?: 'CustomerLink';
  ref?: string;
};

/**  A list of results that matched against a FinancialTransaction search query */
export type FinancialTransactionConnection = {
  __typename?: 'FinancialTransactionConnection';
  /**  A list of edges that links to FinancialTransaction type node */
  edges?: FinancialTransactionEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a FinancialTransaction connection to the FinancialTransaction type */
export type FinancialTransactionEdge = {
  __typename?: 'FinancialTransactionEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the FinancialTransaction edge */
  node?: FinancialTransaction;
};

/**  An order transaction defines the payment or refund details associated with an order. */
export type FinancialTransaction = Node & Orchestrateable & {
  __typename?: 'FinancialTransaction';
  /**  The card type used for the payment. Possible values are 'MASTERCARD', 'VISA', 'AMEX', 'DINERS', 'SPAN', 'DISCOVER', 'UNIONPAY', 'JCB', 'MAESTRO', 'INTERAC'. */
  cardType?: string;
  /**  Time of creation */
  createdOn?: string;
  /**  Currency used for the transaction. */
  currency: string;
  /**  The unique transaction code or request code provided by the payment gateway */
  externalTransactionCode?: string;
  /**  The unique transaction ID or request ID provided by the payment gateway */
  externalTransactionId?: string;
  /**  ID of the object */
  id: string;
  /**  Order associated with the transaction */
  order?: Order;
  /**
   *  The way in which payment was made. Platform provides support for the following payment methods - 'CREDITCARD', 'PAYPAL', 'GIFTVOUCHER', 'CASH', 'AFTERPAY'. However, these
   *  can be overridden/configured per client as settings
   */
  paymentMethod?: string;
  /**  The name of the payment gateway. Platform provided values are 'CYBERSOURCE', 'GIVEX', 'PAYPAL', 'BRAINTREE', 'AFTERPAY'. However, these can be overridden/configured per client as settings using 'PAYMENT.PROVIDER' */
  paymentProviderName?: string;
  /**  The unique transaction reference provided by the Retailer to the payment gateway */
  ref?: string;
  /**  The current status of the `FinancialTransaction`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  The total transaction amount */
  total: number;
  /**  Type of the `FinancialTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};

/**  A list of results that matched against a FulfilmentChoice search query */
export type FulfilmentChoiceConnection = {
  __typename?: 'FulfilmentChoiceConnection';
  /**  A list of edges that links to FulfilmentChoice type node */
  edges?: FulfilmentChoiceEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a FulfilmentChoice connection to the FulfilmentChoice type */
export type FulfilmentChoiceEdge = {
  __typename?: 'FulfilmentChoiceEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the FulfilmentChoice edge */
  node?: FulfilmentChoice;
};

export type PaymentLink = {
  __typename?: 'PaymentLink';
  ref?: string;
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
  name: string;
  /**  A list of prices for the product */
  prices?: Price[];
  /**  A short description of the product (max 255 chars) */
  summary?: string;
  /**  Tax information for the product */
  tax?: TaxType;
};

/**  The `Price` type is a structure to hold a Price value for Products. It is considered more like a complex value type, rather than an object. All fields are required, and the `type` and `currency` fields make up the unique key for the `value`. */
export type Price = {
  __typename?: 'Price';
  /**  The currency of the Price, for example 'USD', 'GBP', 'AUD', etc. */
  currency: string;
  /**  The type field is used to identify different types of prices, for example 'RRP', 'SALE', etc. No Price type values are enforced by the platform. */
  type: string;
  /**  The price value itself */
  value: number;
};

/**  The `TaxType` type is a structure to hold Tax information for Products. It is considered more like a complex value type, rather than an object. All fields are required, and the `country` and `group` fields make up the unique key identifying the `tariff`. */
export type TaxType = {
  __typename?: 'TaxType';
  /**  The country in which this Tax Type applies */
  country: string;
  /**  A group field which can be used to further identify the Tax Tariff applicable */
  group: string;
  /**  The tariff of the Tax Type */
  tariff?: string;
};

/**  A list of results that matched against a ArticleItem search query */
export type ArticleItemConnection = {
  __typename?: 'ArticleItemConnection';
  /**  A list of edges that links to ArticleItem type node */
  edges?: ArticleItemEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a ArticleItem connection to the ArticleItem type */
export type ArticleItemEdge = {
  __typename?: 'ArticleItemEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the ArticleItem edge */
  node?: ArticleItem;
};

/**  The item within an article */
export type ArticleItem = Node & {
  __typename?: 'ArticleItem';
  /**  Article associated with this item */
  article?: Article;
  /**  Barcode of article item */
  barcode?: string;
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  The associated `OrderItem` */
  orderItem?: OrderItem;
  /**  Quantity of article item */
  quantity: number;
  /**  Time of last update */
  updatedOn?: string;
};

/**  Input type to uniquely identify a `Location` object. We use all the fields present in the request to look for this object. */
export type LocationKey = {
  /**  ID of the object */
  id?: string;
  /**
   *  The client's reference identifier for the object. <br/>
   *  Max character limit: 100.
   */
  ref?: string;
};

export type BillingAccount = Extendable & Node & Referenceable & {
  __typename?: 'BillingAccount';
  /**  Address associated to the `BillingAccount`. */
  address?: StreetAddress;
  /**  A list of attributes associated with the `BillingAccount`. This can be used to extend the existing data structure with additional data. */
  attributes?: Attribute[];
  /**  Date and time of creation. */
  createdOn?: string;
  /**  Credit Memos associated to the `BillingAccount`. */
  creditMemos?: CreditMemoConnection;
  /**  Customer associated to the `BillingAccount`. */
  customer?: CustomerLink;
  /**  ID of the object. */
  id: string;
  /**  Invoices associated to the `BillingAccount`. */
  invoices?: InvoiceConnection;
  /**  Name of the `BillingAccount`. */
  name?: string;
  /**  Payments associated to the `BillingAccount`. */
  payments?: PaymentConnection;
  /**  External reference to the `BillingAccount`. Must be unique. */
  ref: string;
  /**  Retailer associated to the `BillingAccount`. */
  retailer?: RetailerLink;
  /**  Status of the `BillingAccount`. */
  status?: string;
  /**  Type of the `BillingAccount`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  type?: string;
  /**  Date and time of last update. */
  updatedOn?: string;
  /**  The reference to the `workflow` associated. */
  workflow?: WorkflowLink;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef?: string;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion?: string;
};


export type BillingAccountCreditMemosArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  currency?: CurrencyLinkInput;
  first?: number;
  issueDate?: DateRange;
  last?: number;
  order?: OrderLinkInput;
  ref?: string[];
  returnOrder?: ReturnOrderLinkInput;
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflow?: WorkflowLinkInput;
  workflowRef?: string[];
  workflowVersion?: string[];
};


export type BillingAccountInvoicesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  currency?: CurrencyLinkInput;
  dueDate?: DateRange;
  first?: number;
  fulfilment?: FulfilmentLinkInput;
  issueDate?: DateRange;
  last?: number;
  order?: OrderLinkInput;
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflow?: WorkflowLinkInput;
  workflowRef?: string[];
  workflowVersion?: number[];
};


export type BillingAccountPaymentsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  ref?: string[];
  retailer?: RetailerLinkInput;
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflow?: WorkflowLinkInput;
  workflowRef?: string[];
  workflowVersion?: number[];
};

export type StreetAddress = {
  __typename?: 'StreetAddress';
  /**  City */
  city?: string;
  /**  Company name */
  companyName?: string;
  /**  Country */
  country?: string;
  /**  Latitude */
  latitude?: number;
  /**  Longitude */
  longitude?: number;
  /**  Name */
  name?: string;
  /**  Postcode */
  postcode?: string;
  /**  Region */
  region?: string;
  /**  State */
  state?: string;
  /**  Street */
  street?: string;
  /**  Timezone */
  timeZone?: string;
};

export type CurrencyLinkInput = {
  /**  Max character limit: 20. */
  alphabeticCode: string;
};

export type OrderLinkInput = {
  ref: string;
  retailer: RetailerId;
};

export type RetailerId = {
  /**  ID of the object */
  id: string;
};

export type ReturnOrderLinkInput = {
  /**  Max character limit: 100. */
  ref: string;
  retailer: RetailerLinkInput;
};

export type RetailerLinkInput = {
  id: string;
};

export type WorkflowLinkInput = {
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  ref: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  version: number;
};

/**  A list of results that matched against a CreditMemo search query */
export type CreditMemoConnection = {
  __typename?: 'CreditMemoConnection';
  /**  A list of edges that links to CreditMemo type node */
  edges?: CreditMemoEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a CreditMemo connection to the CreditMemo type */
export type CreditMemoEdge = {
  __typename?: 'CreditMemoEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the CreditMemo edge */
  node?: CreditMemo;
};

export type CreditMemo = Extendable & Node & Referenceable & {
  __typename?: 'CreditMemo';
  /**  A list of attributes associated with the `CreditMemo`. This can be used to extend the existing data structure with additional data. */
  attributes?: Attribute[];
  /**  `BillingAccount` associated with the `CreditMemo`. */
  billingAccount?: BillingAccount;
  /**  Date and time of creation. */
  createdOn?: string;
  /**  Reference to the currency type. Generally, the standard ISO-4217 is used. */
  currency?: CurrencyLink;
  /**  Default tax type */
  defaultTaxType?: TaxType;
  /**  ID of the object. */
  id: string;
  /**  `Invoice` associated with this `CreditMemo`. */
  invoice?: Invoice;
  /**  Issue date */
  issueDate?: string;
  /**  The `CreditMemoItem`s associated with this `CreditMemo`. */
  items?: CreditMemoItemConnection;
  /**  Reference to an `Order` associated with the `CreditMemo`. */
  order?: OrderLink;
  /**  External reference to the `CreditMemo`. Must be unique. */
  ref: string;
  /**  Reference to a `ReturnOrder` associated with the `CreditMemo`. */
  returnOrder?: ReturnOrderLink;
  /**  Status of the `CreditMemo`. */
  status?: string;
  /**  Sub-total amount */
  subTotalAmount?: AmountType;
  /**  Total amount */
  totalAmount?: AmountType;
  /**  Total balance */
  totalBalance?: AmountType;
  /**  Total tax */
  totalTax?: AmountType;
  /**  Type of the `CreditMemo`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  type?: string;
  /**  Date and time of last update. */
  updatedOn?: string;
  /**  The reference to the `workflow` associated. */
  workflow?: WorkflowLink;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef?: string;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion?: string;
};


export type CreditMemoItemsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  description?: string[];
  first?: number;
  last?: number;
  orderItem?: OrderItemLinkInput;
  product?: ProductLinkInput;
  ref?: string[];
  returnOrderItem?: ReturnOrderItemLinkInput;
  type?: string[];
  updatedOn?: DateRange;
};

export type CurrencyLink = {
  __typename?: 'CurrencyLink';
  alphabeticCode?: string;
};

export type Invoice = Extendable & Node & Referenceable & {
  __typename?: 'Invoice';
  /**  A list of attributes associated with the `Invoice`. This can be used to extend the existing data structure with additional data. */
  attributes?: Attribute[];
  /**  The `BillingAccount` associated with the `Invoice`. */
  billingAccount?: BillingAccount;
  /**  Date and time of creation. */
  createdOn?: string;
  /**  A list of associated credit memos that have been used to adjust this invoice in favour of the billing account */
  creditMemos?: CreditMemo[];
  /**  Reference to the currency type. Generally, the standard ISO-4217 is used. */
  currency?: CurrencyLink;
  /**  The default Tax Type for this invoice. Individual invoice items can override. */
  defaultTaxType?: TaxType;
  /**  The date on which this invoice is due for completion. */
  dueDate?: string;
  /**  Reference to the `Fulfilment` associated with this `Invoice`. */
  fulfilment?: FulfilmentLink;
  /**  ID of the object */
  id: string;
  /**  The date on which this invoice was formally issued. */
  issueDate?: string;
  /**  The `InvoiceItem`s associated with this `Invoice`. */
  items?: InvoiceItemConnection;
  /**  Reference to the `Order` associated with this `Invoice`. */
  order?: OrderLink;
  /**  External reference to the `Invoice`. Must be unique. */
  ref: string;
  /**  Status of the `Invoice`. */
  status?: string;
  /**  The total amount of this invoice excluding tax. */
  subTotalAmount?: AmountType;
  /**  The total amount of this invoice including tax */
  totalAmount?: AmountType;
  /**  The total amount of this invoice yet to be paid. (This caters for multi-part payments and payment milestones) */
  totalBalance?: AmountType;
  /**  The total amount of tax for this invoice */
  totalTax?: AmountType;
  /**  Type of the `Invoice`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  type?: string;
  /**  Date and time of last update. */
  updatedOn?: string;
  /**  The reference to the `workflow` associated. */
  workflow?: WorkflowLink;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef?: string;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion?: number;
};


export type InvoiceItemsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  description?: string[];
  first?: number;
  last?: number;
  product?: ProductLinkInput;
  ref?: string[];
  type?: string[];
  updatedOn?: DateRange;
};

export type FulfilmentLink = {
  __typename?: 'FulfilmentLink';
  ref?: string;
};

export type ProductLinkInput = {
  catalogue: ProductCatalogueLinkInput;
  /**  Max character limit: 100. */
  ref: string;
};

export type ProductCatalogueLinkInput = {
  /**  Max character limit: 100. */
  ref: string;
};

/**  A list of results that matched against a InvoiceItem search query */
export type InvoiceItemConnection = {
  __typename?: 'InvoiceItemConnection';
  /**  A list of edges that links to InvoiceItem type node */
  edges?: InvoiceItemEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a InvoiceItem connection to the InvoiceItem type */
export type InvoiceItemEdge = {
  __typename?: 'InvoiceItemEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the InvoiceItem edge */
  node?: InvoiceItem;
};

export type InvoiceItem = Node & Referenceable & {
  __typename?: 'InvoiceItem';
  /**  The item amount for this item excluding tax */
  amount?: AmountType;
  /**  Date and time of creation */
  createdOn?: string;
  /**  A description of the source item. In the case of product source items this can be the name. */
  description?: string;
  /**  ID of the object */
  id: string;
  /**  The `Invoice` this object is associated with */
  invoice?: Invoice;
  /**  Associated product for this invoice item. */
  product?: ProductLink;
  /**  External reference to the `InvoiceItem`. Must be unique. */
  ref: string;
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount?: AmountType;
  /**  Type of the `InvoiceItem`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  type?: string;
  /**  The unit price of the source item. */
  unitAmount?: AmountType;
  /**  `The total quantity of the source item. Should default to 0 */
  unitQuantity?: QuantityType;
  /**  The tax type of this item. Should only be provided if different to the default invoice tax type. */
  unitTaxType?: TaxType;
  /**  Date and time of last update */
  updatedOn?: string;
};

export type AmountType = {
  __typename?: 'AmountType';
  amount?: number;
  scale?: number;
  unscaledValue?: number;
};

export type ProductLink = {
  __typename?: 'ProductLink';
  catalogue?: CatalogueLink;
  ref?: string;
};

export type CatalogueLink = {
  __typename?: 'CatalogueLink';
  ref?: string;
};

/**  The `QuantityType` type, holds separately the amount (quantity) and the units associated. */
export type QuantityType = {
  __typename?: 'QuantityType';
  /**  The quantity itself. */
  quantity?: number;
  /**  The unit associated. */
  unit?: string;
};

export type OrderLink = {
  __typename?: 'OrderLink';
  ref?: string;
  retailer?: RetailerLink;
};

export type RetailerLink = {
  __typename?: 'RetailerLink';
  id?: string;
};

export type WorkflowLink = {
  __typename?: 'WorkflowLink';
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  ref?: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  version?: number;
};

export type OrderItemLinkInput = {
  order: OrderLinkInput;
  ref: string;
};

export type ReturnOrderItemLinkInput = {
  /**  Max character limit: 100. */
  ref: string;
  returnOrder?: ReturnOrderLinkInput;
};

/**  A list of results that matched against a CreditMemoItem search query */
export type CreditMemoItemConnection = {
  __typename?: 'CreditMemoItemConnection';
  /**  A list of edges that links to CreditMemoItem type node */
  edges?: CreditMemoItemEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a CreditMemoItem connection to the CreditMemoItem type */
export type CreditMemoItemEdge = {
  __typename?: 'CreditMemoItemEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the CreditMemoItem edge */
  node?: CreditMemoItem;
};

export type CreditMemoItem = Node & Referenceable & {
  __typename?: 'CreditMemoItem';
  /**  The item amount for this item excluding tax. This is a calculated value based on business rules that does not necessarily have to take into account the unit quantity or amounts. */
  amount?: AmountType;
  /**  Date and time of creation. */
  createdOn?: string;
  /**  `CreditMemo` associated with the `CreditMemoItem`. */
  creditMemo?: CreditMemo;
  /**  Credit reason code of the `CreditMemoItem`. */
  creditReasonCode?: SettingValueType;
  /** # Description of the `CreditMemoItem`. */
  description?: string;
  /**  ID of the object */
  id: string;
  /**  Reference to an `OrderItem` associated with the `CreditMemoItem`. */
  orderItem?: OrderItemLink;
  /**  Reference to a `Product` associated with the `CreditMemoItem`. */
  product?: ProductLink;
  /**  External reference to the `CreditMemoItem`. Must be unique. */
  ref: string;
  /**  Reference to a `ReturnOrderItem` associated with the `CreditMemoItem`. */
  returnOrderItem?: ReturnOrderItemLink;
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount?: AmountType;
  /**  Type of the `CreditMemoItem`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  type?: string;
  /**  The unit sale price at time of sale or exchange */
  unitAmount?: AmountType;
  /**  The unit cost price at time of sale or exchange. */
  unitCostAmount?: AmountType;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity?: QuantityType;
  /**  The tax type of this item. Should only be provided if different to the default credit memo tax type. */
  unitTaxType?: TaxType;
  /**  Date and time of last update. */
  updatedOn?: string;
};

export type SettingValueType = {
  __typename?: 'SettingValueType';
  label?: string;
  value?: string;
};

export type OrderItemLink = {
  __typename?: 'OrderItemLink';
  order?: OrderLink;
  ref?: string;
};

export type ReturnOrderItemLink = {
  __typename?: 'ReturnOrderItemLink';
  ref?: string;
  returnOrder?: ReturnOrderLink;
};

export type ReturnOrderLink = {
  __typename?: 'ReturnOrderLink';
  ref?: string;
  retailer?: RetailerLink;
};

export type FulfilmentLinkInput = {
  ref: string;
};

/**  A list of results that matched against a Invoice search query */
export type InvoiceConnection = {
  __typename?: 'InvoiceConnection';
  /**  A list of edges that links to Invoice type node */
  edges?: InvoiceEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Invoice connection to the Invoice type */
export type InvoiceEdge = {
  __typename?: 'InvoiceEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Invoice edge */
  node?: Invoice;
};

/**  A list of results that matched against a Payment search query */
export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  /**  A list of edges that links to Payment type node */
  edges?: PaymentEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Payment connection to the Payment type */
export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Payment edge */
  node?: Payment;
};

/**  The Payment information */
export type Payment = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'Payment';
  /**  The amount of the `Payment`. Usually for a Payment this will equal to the `Order`s' total amount that this Payment was created against. */
  amount: AmountType;
  /**  A list of attributes associated with the `Payment`. This can be used to extend the existing data structure with additional data. */
  attributes?: Attribute[];
  /**  Billing Account associated to the `Payment`. */
  billingAccount?: BillingAccount;
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  Orders associated with the `Payment`. */
  orders?: OrderConnection;
  /**  Payment Transactions associated with the `Payment`. */
  paymentTransactions?: PaymentTransactionConnection;
  /**  External reference of the object. Must be unique. */
  ref: string;
  /**  Retailer associated to the `Payment`. */
  retailer?: RetailerLink;
  /**
   *  The current status of the `Payment`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Status of the `Payment`
   */
  status: string;
  /**
   *  Type of the `Payment`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the `Payment`, typically used by the Orchestration Engine to determine the workflow that should be applied. For Payment a sample value for this is `DEFAULT`.
   */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference to the `workflow` associated. */
  workflow?: WorkflowLink;
  /**
   *  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/>
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef: string;
  /**
   *  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/>
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion: number;
};


/**  The Payment information */
export type PaymentOrdersArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  customerLink?: CustomerLinkInput;
  first?: number;
  last?: number;
  payment?: PaymentLinkInput;
  ref?: string[];
  status?: string[];
  totalPrice?: number[];
  totalTaxPrice?: number[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  The Payment information */
export type PaymentPaymentTransactionsArgs = {
  after?: string;
  authorizationKey?: string[];
  before?: string;
  cardType?: string[];
  createdOn?: DateRange;
  currency?: CurrencyLinkInput;
  first?: number;
  last?: number;
  paymentMethod?: string[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflow?: WorkflowLinkInput;
  workflowRef?: string[];
  workflowVersion?: number[];
};

export type CustomerLinkInput = {
  ref: string;
};

export type PaymentLinkInput = {
  /**  Max character limit: 100. */
  ref: string;
};

/**  A list of results that matched against a Order search query */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /**  A list of edges that links to Order type node */
  edges?: OrderEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Order connection to the Order type */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Order edge */
  node?: Order;
};

/**  A list of results that matched against a PaymentTransaction search query */
export type PaymentTransactionConnection = {
  __typename?: 'PaymentTransactionConnection';
  /**  A list of edges that links to PaymentTransaction type node */
  edges?: PaymentTransactionEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a PaymentTransaction connection to the PaymentTransaction type */
export type PaymentTransactionEdge = {
  __typename?: 'PaymentTransactionEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the PaymentTransaction edge */
  node?: PaymentTransaction;
};

/**  The Payment Transaction information */
export type PaymentTransaction = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'PaymentTransaction';
  /**  The amount of the `PaymentTransaction`. */
  amount: AmountType;
  /**  A list of attributes associated with the `PaymentServiceProvider`. This can be used to extend the existing data structure with additional data. */
  attributes?: Attribute[];
  /**  The key received when executing a pre authorisation transaction. Typically used to perform a subsequent payment capture. */
  authorizationKey?: string;
  /**  Card type. Some sample values are 'MASTERCARD', 'VISA', 'AMEX', 'DINERS', 'SPAN', 'DISCOVER', 'UNIONPAY', 'JCB', 'MAESTRO', 'INTERAC' */
  cardType?: string;
  /**  Time of creation */
  createdOn?: string;
  /**  Reference to the currency type. Generally, the standard ISO-4217 is used. */
  currency?: CurrencyLink;
  /**  ID of the object */
  id: string;
  /**  Reference to the parent Payment. */
  payment?: Payment;
  /**  Payment method. */
  paymentMethod: string;
  /**  Associated Payment Service Provider. */
  paymentServiceProvider?: PaymentServiceProvider;
  /**  External reference of the object. Must be unique. */
  ref: string;
  /**
   *  The current status of the `PaymentTransaction`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Status of the `PaymentTransaction`.
   */
  status: string;
  /**
   *  Type of the `PaymentTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the `PaymentTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Common types that are used are: CAPTURE
   * REFUND, AUTHORIZATION
   */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference to the `workflow` associated. */
  workflow?: WorkflowLink;
  /**
   *  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/>
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef: string;
  /**
   *  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/>
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion: number;
};

/**  The Payment Service Provider information */
export type PaymentServiceProvider = Extendable & Referenceable & {
  __typename?: 'PaymentServiceProvider';
  /**  A list of attributes associated with the `PaymentServiceProvider`. This can be used to extend the existing data structure with additional data. */
  attributes?: Attribute[];
  /**  Client ID of the `PaymentServiceProvider` */
  clientId: string;
  /**  Client Secret of the `PaymentServiceProvider` */
  clientSecret: string;
  /**  Time of creation */
  createdOn?: string;
  /**  Host of the `PaymentServiceProvider`. Sample value: 'api.sandbox.paypal.com'. */
  host: string;
  /**  ID of the object */
  id: string;
  /**  name of the `PaymentServiceProvider` */
  name?: string;
  /**  Port of the `PaymentServiceProvider` */
  port: number;
  /**  External reference of the object. Must be unique. */
  ref: string;
  /**  Retailer associated to the `PaymentServiceProvider`. */
  retailer: RetailerLink;
  /**  Auth Token of the `PaymentServiceProvider` */
  serviceAuthToken: string;
  /**  Time of last update */
  updatedOn?: string;
};

/**  A list of results that matched against a BillingAccount search query */
export type BillingAccountConnection = {
  __typename?: 'BillingAccountConnection';
  /**  A list of edges that links to BillingAccount type node */
  edges?: BillingAccountEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a BillingAccount connection to the BillingAccount type */
export type BillingAccountEdge = {
  __typename?: 'BillingAccountEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the BillingAccount edge */
  node?: BillingAccount;
};

/**  A list of results that matched against a CarrierAttribute search query */
export type CarrierAttributeConnection = {
  __typename?: 'CarrierAttributeConnection';
  /**  A list of edges that links to CarrierAttribute type node */
  edges?: CarrierAttributeEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a CarrierAttribute connection to the CarrierAttribute type */
export type CarrierAttributeEdge = {
  __typename?: 'CarrierAttributeEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the CarrierAttribute edge */
  node?: CarrierAttribute;
};

/**  The attribute of carrier */
export type CarrierAttribute = {
  __typename?: 'CarrierAttribute';
  /**  Carrier details */
  carrierDetails?: CarrierDetails;
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  name: string;
  /**  Time of last update */
  updatedOn?: string;
  value: string;
};

/**  The details of carrier */
export type CarrierDetails = {
  __typename?: 'CarrierDetails';
  /**  Location ID of carrier details */
  agentId?: string;
  attributes?: CarrierAttributeConnection;
  /**  Carrier ID of carrier details */
  carrierId?: string;
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  Retailer ID of carrier details */
  retailerId?: string;
  /**  Time of last update */
  updatedOn?: string;
};


/**  The details of carrier */
export type CarrierDetailsAttributesArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  updatedOn?: DateRange;
  value?: string[];
};

export type ArticleId = {
  /**  ID of the object */
  id: string;
};

/**  The `CarrierConsignmentKey` input is the external_reference, for identifying a specific ConsignmentNoteEntity. */
export type CarrierConsignmentKey = {
  /**  External reference of the `Consignment`. Must be unique. */
  ref: string;
};

/**  A list of results that matched against a CarrierDetails search query */
export type CarrierDetailsConnection = {
  __typename?: 'CarrierDetailsConnection';
  /**  A list of edges that links to CarrierDetails type node */
  edges?: CarrierDetailsEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a CarrierDetails connection to the CarrierDetails type */
export type CarrierDetailsEdge = {
  __typename?: 'CarrierDetailsEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the CarrierDetails edge */
  node?: CarrierDetails;
};

/**  A list of results that matched against a Carrier search query */
export type CarrierConnection = {
  __typename?: 'CarrierConnection';
  /**  A list of edges that links to Carrier type node */
  edges?: CarrierEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Carrier connection to the Carrier type */
export type CarrierEdge = {
  __typename?: 'CarrierEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Carrier edge */
  node?: Carrier;
};

/**  The `ProductCatalogueKey` input is the parameter for identifying a specific Product Catalogue. */
export type ProductCatalogueKey = {
  /**
   *  Product Catalogue reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: string;
};

/**  A list of results that matched against a Category search query */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /**  A list of edges that links to Category type node */
  edges?: CategoryEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Category connection to the Category type */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Category edge */
  node?: Category;
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
  attributes?: Attribute[];
  /**  The Product Catalogue in which this Category is managed */
  catalogue: ProductCatalogue;
  /**  A connection to the immediate child Categories (NOTE: This currently does not traverse the entire tree) */
  childCategories?: CategoryConnection;
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: string;
  /**  The name of the Category */
  name: string;
  /**  This Category's immediate parent Category */
  parentCategory?: Category;
  /**  The unique reference identifier for the Category */
  ref: string;
  /**  The current status of the `Category`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  A short description of the Category */
  summary?: string;
  /**  Type of the `Category`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


/**
 *  A `Category` can be associated with Product Catalogues and Products. It has a tree-like structure, where each Category may contain a parent category, and / or one or more child categories. This new Category structure allows support for more advanced category hierarchies. The `ref` field will be the unique identifier for this Category within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `Category` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type CategoryChildCategoriesArgs = {
  after?: string;
  before?: string;
  catalogue?: ProductCatalogueKey;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  summary?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
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
  attributes?: Attribute[];
  /**  A connection to associated Categories */
  categories?: CategoryConnection;
  /**  Time of creation */
  createdOn?: string;
  /**  A short description of the Product Catalogue */
  description?: string;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: string;
  /**  The name of the Product Catalogue */
  name: string;
  /**  The unique reference identifier for the Product Catalogue */
  ref: string;
  /**  A list of Retailer references associated with this Product Catalogue */
  retailerRefs?: string[];
  /**  The current status of the `ProductCatalogue`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  Type of the `ProductCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


/**
 *  The `ProductCatalogue` is a structure that supports a grouping of product and category data. The `ref` field will be the unique identifier for this catalogue. <br /><br />
 *  The `ProductCatalogue` is an orchestrateable entity, and the parent type for all `Product` and `Category` orchestration events. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type ProductCatalogueCategoriesArgs = {
  after?: string;
  before?: string;
  catalogue?: ProductCatalogueKey;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  summary?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**
 *  Represents a text based comment. A `comment` can be added against an existing entity object. <br /> <br />
 *  **Usage**<br /><br/>
 *  Use the combination of an entity's `entityType` and `entityId` values to associate a comment against that entity.
 */
export type Comment = Node & {
  __typename?: 'Comment';
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the entity */
  entityId: string;
  /**  Type of the entity. For example `ORDER`, `FULFILMENT`, `ORDERITEM`, `PRODUCTCATALOGUE` etc. */
  entityType: string;
  /**  ID of the object */
  id: string;
  /**  Comment text */
  text: string;
  /**  Time of last update */
  updatedOn?: string;
};

/**  A list of results that matched against a Comment search query */
export type CommentConnection = {
  __typename?: 'CommentConnection';
  /**  A list of edges that links to Comment type node */
  edges?: CommentEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Comment connection to the Comment type */
export type CommentEdge = {
  __typename?: 'CommentEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Comment edge */
  node?: Comment;
};

/**  The `ConsignmentId` input is the generated id. */
export type ConsignmentId = {
  /**  ID of the object */
  id: string;
};

/**  A list of results that matched against a Consignment search query */
export type ConsignmentConnection = {
  __typename?: 'ConsignmentConnection';
  /**  A list of edges that links to Consignment type node */
  edges?: ConsignmentEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Consignment connection to the Consignment type */
export type ConsignmentEdge = {
  __typename?: 'ConsignmentEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Consignment edge */
  node?: Consignment;
};

/**  The `ControlGroupKey` input is the parameter for identifying a specific Catalogue Control Group */
export type ControlGroupKey = {
  /**
   *  Control Group reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: string;
};

export type Control = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'Control';
  /**  List of Attribute containing meta data information for an entity */
  attributes?: Attribute[];
  /**  Control Group */
  controlGroup?: ControlGroup;
  /**  Time of creation */
  createdOn?: string;
  /**  Description */
  description?: string;
  /**  Order that this control is applied */
  executionOrder?: number;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: string;
  /**  Name */
  name?: string;
  /**  The reference identifier used to identify an entity */
  ref: string;
  /**  The current status of the `Control`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  Type of the `Control`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  values */
  values?: Attribute[];
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};

export type ControlGroup = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'ControlGroup';
  /**  List of Attribute containing meta data information for an entity */
  attributes?: Attribute[];
  /**  Controls */
  controls?: ControlConnection;
  /**  Time of creation */
  createdOn?: string;
  /**  Description */
  description?: string;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: string;
  /**  Name */
  name?: string;
  /**  The reference identifier used to identify an entity */
  ref: string;
  /**  Retailer refs */
  retailerRefs?: string[];
  /**  The current status of the `ControlGroup`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  Type of the `ControlGroup`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


export type ControlGroupControlsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  description?: string[];
  executionOrder?: number[];
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**  A list of results that matched against a Control search query */
export type ControlConnection = {
  __typename?: 'ControlConnection';
  /**  A list of edges that links to Control type node */
  edges?: ControlEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Control connection to the Control type */
export type ControlEdge = {
  __typename?: 'ControlEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Control edge */
  node?: Control;
};

/**  A list of results that matched against a ControlGroup search query */
export type ControlGroupConnection = {
  __typename?: 'ControlGroupConnection';
  /**  A list of edges that links to ControlGroup type node */
  edges?: ControlGroupEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a ControlGroup connection to the ControlGroup type */
export type ControlGroupEdge = {
  __typename?: 'ControlGroupEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the ControlGroup edge */
  node?: ControlGroup;
};

/**  A list of results that matched against a Currency search query */
export type CurrencyConnection = {
  __typename?: 'CurrencyConnection';
  /**  A list of edges that links to Currency type node */
  edges?: CurrencyEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Currency connection to the Currency type */
export type CurrencyEdge = {
  __typename?: 'CurrencyEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Currency edge */
  node?: Currency;
};

export type Currency = {
  __typename?: 'Currency';
  /**
   *  External reference to the `Currency`. Must be unique.
   *  For the standard currency types, this field is the three-letters-code used internationally (ISO-4217). eg: AUD, EUR, USD.
   */
  alphabeticCode?: string;
  /**  ID of the object */
  id: string;
  /**  Currencies which are defined as part of the ISO-4217 standard cannot be deleted or modified. */
  isISO4217?: boolean;
  /**  The number of minor units that make up a major unit of the `Currency` */
  minorUnits?: number;
  /**  The name of the `Currency`. */
  name?: string;
  /**  The numeric code of the `Currency`. */
  numericCode?: string;
};

/**
 *  CustomerAddress connects to an order either though the FulfilmentChoice (the CC
 *  location chosen by the customer) or the Fulfilments (from and to locations)
 */
export type CustomerAddress = Address & {
  __typename?: 'CustomerAddress';
  /**  City */
  city?: string;
  /**  Company name */
  companyName?: string;
  /**  Country */
  country?: string;
  /**  Time of creation */
  createdOn?: string;
  /**  Email */
  email?: string;
  /**  ID of the object */
  id: string;
  /**  Latitude */
  latitude?: number;
  /**  Longitude */
  longitude?: number;
  /**  Name */
  name?: string;
  /**  Postcode */
  postcode?: string;
  /**  Location reference */
  ref?: string;
  /**  Region */
  region?: string;
  /**  State */
  state?: string;
  /**  Street */
  street?: string;
  /**  Street 2 */
  street2?: string;
  /**  Timezone */
  timeZone?: string;
  /**  Type of Address, to support legacy address, the value can be AGENT and ORDER */
  type?: string;
  /**  Time of last update */
  updatedOn?: string;
};

/**  A list of results that matched against a CustomerAddress search query */
export type CustomerAddressConnection = {
  __typename?: 'CustomerAddressConnection';
  /**  A list of edges that links to CustomerAddress type node */
  edges?: CustomerAddressEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a CustomerAddress connection to the CustomerAddress type */
export type CustomerAddressEdge = {
  __typename?: 'CustomerAddressEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the CustomerAddress edge */
  node?: CustomerAddress;
};

/**  A list of results that matched against a Customer search query */
export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  /**  A list of edges that links to Customer type node */
  edges?: CustomerEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Customer connection to the Customer type */
export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Customer edge */
  node?: Customer;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A DecisionTable is a structure that defines which actions to perform for a given set of conditions.
 */
export type DecisionTable = {
  __typename?: 'DecisionTable';
  /**  Description of the decision table */
  description?: string;
  /**  Id of the object */
  id: string;
  /**  Name of the table */
  name: string;
  /**  A connection of `Rule`s. A decision rule is a set of conditions with corresponding actions that must be performed if the conditions evaluate to true. */
  rules?: DecisionRuleConnection;
};


/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A DecisionTable is a structure that defines which actions to perform for a given set of conditions.
 */
export type DecisionTableRulesArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
};

/**  A list of results that matched against a DecisionRule search query */
export type DecisionRuleConnection = {
  __typename?: 'DecisionRuleConnection';
  /**  A list of edges that link to DecisionRule type node */
  edges?: DecisionRuleEdge[];
  /**  An object containing information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a DecisionRule connection to the DecisionRule type */
export type DecisionRuleEdge = {
  __typename?: 'DecisionRuleEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the DecisionRule edge */
  node?: DecisionRule;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A DecisionRule is a set of conditions along with actions that must be performed if the conditions evaluate to true.
 */
export type DecisionRule = {
  __typename?: 'DecisionRule';
  /**  A short description of the rule. Helpful to understand the behaviour when the rule itself is complicated. */
  description?: string;
  /**  Id of the object */
  id: string;
  /**  A set of conditions that ALL need to be true for the input to evaluate to true. */
  inputs: DecisionRuleInput[];
  /**  A set of actions to be taken when the input evaluates to true. <br/> Note: Currently we support only one action. The type is list for future support. */
  outputs: DecisionRuleOutput[];
  /**  The priority decides which rule to execute in case of conflict between multiple rules. The rule with the highest priority (represented by lowest number) will be selected. If no priority is provided, each rule will get a priority of 100 by default. */
  priority?: number;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Represents the input conditions for a `DecisionRule`.
 */
export type DecisionRuleInput = {
  __typename?: 'DecisionRuleInput';
  /**  Id of the object */
  id: string;
  /**  This represents the right hand side of the condition equation. It includes the input values. */
  inputEntries?: DecisionRuleInputEntries;
  /**  The left hand side of a condition equation. At the moment, the actions are executed only when the `inputExpression` evaluates to true. So, it should be designed such that the true value should lead to the execution of the action. */
  inputExpression?: DecisionRuleInputExpression;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  This represents the values that the input expression will be compared to. Think of these as the right hand side of the condition equation.
 */
export type DecisionRuleInputEntries = {
  __typename?: 'DecisionRuleInputEntries';
  /**  Values that the input expression will be compared to. This field should be used when values of the corresponding fields are strings. For example, value of Product.Ref will be string or a value that can be parsed or converted into a string. */
  stringEntries?: string[];
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  The input expression. At the moment, output actions are executed when DecisionRuleInputExpression evaluates to true. So, this should be designed such that it evaluates to true for the corresponding action to be performed.
 *  Note: A rule can have multiple input expressions chained together with logical operators. Currently the api uses the "AND" operator to chain multiple input expressions within a rule.
 */
export type DecisionRuleInputExpression = {
  __typename?: 'DecisionRuleInputExpression';
  /**  The `fieldName` for this input expression */
  fieldName?: DecisionRuleInputFieldName;
  /**  The comparison operator */
  operator?: DecisionRuleComparisionOperator;
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
  id: string;
  /**  This represents the values that the output expression will be compared to. */
  outputEntries?: DecisionRuleOutputEntries;
  /**  The output expression. At the moment, we execute actions/outputs when DecisionRuleInputExpression evaluates to true. So, this should be designed such that this will always be executed when the input evaluates to true. Also note that even though we don't support logical expressions as outputs at the moment, the schema type is designed this way to be future proof. */
  outputExpression?: DecisionRuleOutputExpression;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  This represents the values of the output expressions.
 */
export type DecisionRuleOutputEntries = {
  __typename?: 'DecisionRuleOutputEntries';
  /**  Values that the output expression will be compared to. To be used when the values are a single Int. For example, for the Output "Apply a quantity buffer of 10, this is the `10` part.” */
  intEntry?: number;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  The output expression. At the moment, we execute actions/outputs when DecisionRuleInputExpression evaluates to true. So, this should be designed such that this will always be executed when the input evaluates to true. Also note that at the moment, we don't support logical expressions as outputs. The schema naming is designed this way to be future proof.
 */
export type DecisionRuleOutputExpression = {
  __typename?: 'DecisionRuleOutputExpression';
  /**  The action to be executed */
  action?: DecisionRuleOutputAction;
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

/**
 *  `FulfilmentOption` provides a singular and accurate view of what products are available to purchase, order, pick-up or reserve. This information can be used
 *  to provide personalised fulfilment options to the customers directly from the product details pages, cart pages or checkout pages.
 */
export type FulfilmentOption = Node & Orchestrateable & {
  __typename?: 'FulfilmentOption';
  /**  A type for passing address. Can be used as an input in creating Fulfilment Plans. */
  address?: FulfilmentOptionAddress;
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Attribute[];
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**
   *  The reference identifier for a location. May be used in orchestration rules to drive custom business logic. For example, you can have a rule to return plans only from this
   *   location or a rule to return plans from all locations but excluding this one.
   */
  locationRef?: string;
  /**  Type of order. For example _click & collect (CC)_ or _home delivery (HD)_ */
  orderType?: string;
  /**  A list of `FulfilmentPlan` objects. */
  plans?: FulfilmentPlanConnection;
  /**  Products being queried for availability */
  products?: FulfilmentOptionProduct[];
  /**  External reference. Recommended to be unique. */
  ref?: string;
  /**  ID of the `Retailer`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  retailerId: number;
  /**  The current status of the `FulfilmentOption`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  A unique identifier for the clients to group related Fulfilment Plans. */
  trackingCode?: string;
  /**  Type of the `FulfilmentOption`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


/**
 *  `FulfilmentOption` provides a singular and accurate view of what products are available to purchase, order, pick-up or reserve. This information can be used
 *  to provide personalised fulfilment options to the customers directly from the product details pages, cart pages or checkout pages.
 */
export type FulfilmentOptionPlansArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  eta?: string[];
  first?: number;
  last?: number;
  ref?: string[];
  retailerId?: number[];
  splitCount?: number[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**  Address type to be used in `FulfilmentOption` */
export type FulfilmentOptionAddress = {
  __typename?: 'FulfilmentOptionAddress';
  /**  Address Line */
  addressLine1?: string;
  /**  Address Line */
  addressLine2?: string;
  /**  City or Town */
  city?: string;
  /**  Company Name */
  companyName?: string;
  /**  Country */
  country?: string;
  /**  Geographical coordinate that specifies the north–south position of a point on the Earth's surface */
  latitude?: number;
  /**  Geographical coordinate that specifies the east–west position of a point on the Earth's surface */
  longitude?: number;
  /**  Name */
  name?: string;
  /**  Postcode or Zipcode */
  postcode?: string;
  /**  State or County */
  state?: string;
};

/**  A list of results that matched against a FulfilmentPlan search query */
export type FulfilmentPlanConnection = {
  __typename?: 'FulfilmentPlanConnection';
  /**  A list of edges that links to FulfilmentPlan type node */
  edges?: FulfilmentPlanEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a FulfilmentPlan connection to the FulfilmentPlan type */
export type FulfilmentPlanEdge = {
  __typename?: 'FulfilmentPlanEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the FulfilmentPlan edge */
  node?: FulfilmentPlan;
};

/**  Fulfilment Plans represents fulfilment strategy for requested products based on client specific logic that lives in their orchestration rules. */
export type FulfilmentPlan = Node & Orchestrateable & {
  __typename?: 'FulfilmentPlan';
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Attribute[];
  /**  Time of creation */
  createdOn?: string;
  /**  ETA of the `FulfilmentPlan`. Although this can be set explicitly, we recommend that this be determined and set in the workflow. */
  eta?: string;
  /**  Exceptions can be used to augment the existing object with any useful information in case of exceptions. */
  exceptions?: FulfilmentPlanException[];
  /**  Represents the associated `FulfilmentOption` object */
  fulfilmentOption?: FulfilmentOption;
  /**  Represents fulfilments under this Fulfilment Plan */
  fulfilments?: FulfilmentPlanFulfilment[];
  /**  ID of the object */
  id: string;
  /**  External reference. Recommended to be unique. */
  ref?: string;
  /**  ID of the retailer */
  retailerId?: number;
  /**  Order split limits */
  splitCount?: number;
  /**  The current status of the `FulfilmentPlan`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  Type of the `FulfilmentPlan`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};

/**  Exception type can be used to augment objects with useful information in case of exceptions. */
export type FulfilmentPlanException = {
  __typename?: 'FulfilmentPlanException';
  /**  Attributes may contain useful information about the exception */
  attributes?: Attribute[];
  /**  The exception code */
  code?: string;
  /**  The english like description of the exception */
  message?: string;
};

/**  Represents fulfilment information for a `FulfilmentPlan` */
export type FulfilmentPlanFulfilment = {
  __typename?: 'FulfilmentPlanFulfilment';
  /**  ETA of the `FulfilmentPlan` as configured in the workflow */
  eta?: string;
  /**  Type of fulfilment. */
  fulfilmentType?: string;
  /**  List of products with their requested and available quantities */
  items?: FulfilmentPlanFulfilmentItem[];
  /**  Reference to identify the fulfilment location for this fulfilment. */
  locationRef?: string;
};

/**  Represents products with their requested and available quantities */
export type FulfilmentPlanFulfilmentItem = {
  __typename?: 'FulfilmentPlanFulfilmentItem';
  /**  Quantity of the product available as per the plan */
  availableQuantity: number;
  /**  A reference to identify the Catalogue */
  catalogueRef?: string;
  /**  External reference of the product. */
  productRef: string;
  /**  Requested quantity of the product. */
  requestedQuantity: number;
};

/**  Type to represent products being queried for availability in a Fulfilment Option request */
export type FulfilmentOptionProduct = {
  __typename?: 'FulfilmentOptionProduct';
  /**  A reference to identify the Catalogue */
  catalogueRef?: string;
  /**  A reference to identify a Product */
  productRef: string;
  /**  The requested quantity for the product */
  requestedQuantity: number;
};

/**  A list of results that matched against a FulfilmentOption search query */
export type FulfilmentOptionConnection = {
  __typename?: 'FulfilmentOptionConnection';
  /**  A list of edges that links to FulfilmentOption type node */
  edges?: FulfilmentOptionEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a FulfilmentOption connection to the FulfilmentOption type */
export type FulfilmentOptionEdge = {
  __typename?: 'FulfilmentOptionEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the FulfilmentOption edge */
  node?: FulfilmentOption;
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
  attributes?: Attribute[];
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogue;
  /**  A connection to the associated Categories of this Product */
  categories?: CategoryConnection;
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: string;
  /**  The name of the Product */
  name: string;
  /**  A list of Prices for this Product */
  prices?: Price[];
  /**  The unique reference identifier for the Product */
  ref: string;
  /**  The current status of the `GroupProduct`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  A short description of the Product (max 255 chars) */
  summary?: string;
  /**  The tax information for this Product */
  tax?: TaxType;
  /**  Type of the `GroupProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


/**
 *  A `GroupProduct` is an implementation of Product that signifies a grouping of some sort, such as a bundle or kit. The `ref` field will be the unique identifier for this Product within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `GroupProduct` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type GroupProductCategoriesArgs = {
  after?: string;
  before?: string;
  catalogue?: ProductCatalogueKey;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  summary?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**  The `CategoryKey` input is the parameter for identifying a specific Category. */
export type CategoryKey = {
  /**  The Product Catalogue in which this Category resides */
  catalogue: ProductCatalogueKey;
  /**
   *  Category reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: string;
};

/**  A list of results that matched against a GroupProduct search query */
export type GroupProductConnection = {
  __typename?: 'GroupProductConnection';
  /**  A list of edges that links to GroupProduct type node */
  edges?: GroupProductEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a GroupProduct connection to the GroupProduct type */
export type GroupProductEdge = {
  __typename?: 'GroupProductEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the GroupProduct edge */
  node?: GroupProduct;
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
  attributes?: Attribute[];
  /**  Time of creation */
  createdOn?: string;
  /**  A short description of the Inventory Catalogue */
  description?: string;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: string;
  /**  A connection to associated Inventory Positions */
  inventoryPositions?: InventoryPositionConnection;
  /**  The name of the Inventory Catalogue */
  name: string;
  /**  The unique reference identifier for the Inventory Catalogue */
  ref: string;
  /**  A list of Retailer references associated with this Inventory Catalogue */
  retailerRefs?: string[];
  /**  The current status of the `InventoryCatalogue`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  Type of the `InventoryCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


/**
 *  The `InventoryCatalogue` is a structure that supports a grouping of inventory position data. The `ref` field will be the unique identifier for this catalogue. <br /><br />
 *  The `InventoryCatalogue` is an orchestrateable entity, and the parent type for all `InventoryPosition` and `InventoryQuantity` orchestration events. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type InventoryCatalogueInventoryPositionsArgs = {
  after?: string;
  before?: string;
  catalogue?: InventoryCatalogueKey;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  locationRef?: string[];
  onHand?: number[];
  productRef?: string[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**  The `InventoryCatalogueKey` input is the parameter for identifying a specific Inventory Catalogue. */
export type InventoryCatalogueKey = {
  /**
   *  Inventory Catalogue reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: string;
};

/**  A list of results that matched against a InventoryPosition search query */
export type InventoryPositionConnection = {
  __typename?: 'InventoryPositionConnection';
  /**  A list of edges that links to InventoryPosition type node */
  edges?: InventoryPositionEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a InventoryPosition connection to the InventoryPosition type */
export type InventoryPositionEdge = {
  __typename?: 'InventoryPositionEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the InventoryPosition edge */
  node?: InventoryPosition;
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
  attributes?: Attribute[];
  /**  The Inventory Catalogue in which this Position is managed */
  catalogue?: InventoryCatalogue;
  /**  Time of creation */
  createdOn?: string;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: string;
  /**  A reference identifying the Location where this inventory exists. This is a loosely coupled association. */
  locationRef?: string;
  /**  The calculated on hand quantity based on the associated quantities, and rules in the orchestration workflow */
  onHand?: number;
  /**  A reference identifying a Product. The referenced product may or may not exist within one or more Product Catalogues. This is a loosely coupled association, since Product and Inventory are separate domains. */
  productRef: string;
  /**  A connection to the Inventory Quantities associated with this Position */
  quantities?: InventoryQuantityConnection;
  /**  The unique reference identifier for the Inventory Position */
  ref: string;
  /**  The current status of the `InventoryPosition`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  Type of the `InventoryPosition`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


/**
 *  An `InventoryPosition` provides an "on hand" calculation of available inventory, based on it's associated Inventory Quantities and Location. The `ref` field will be the unique identifier for this position within the specified Inventory Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `InventoryPosition` is an orchestrateable entity. Events for these should specify a parent entity of Inventory Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type InventoryPositionQuantitiesArgs = {
  after?: string;
  before?: string;
  catalogue?: InventoryCatalogueKey;
  condition?: string[];
  createdOn?: DateRange;
  expectedOn?: DateRange;
  first?: number;
  last?: number;
  quantity?: number[];
  ref?: string[];
  status?: string[];
  storageAreaRef?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**  A list of results that matched against a InventoryQuantity search query */
export type InventoryQuantityConnection = {
  __typename?: 'InventoryQuantityConnection';
  /**  A list of edges that links to InventoryQuantity type node */
  edges?: InventoryQuantityEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a InventoryQuantity connection to the InventoryQuantity type */
export type InventoryQuantityEdge = {
  __typename?: 'InventoryQuantityEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the InventoryQuantity edge */
  node?: InventoryQuantity;
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
  attributes?: Attribute[];
  /**  The Inventory Catalogue in which this Quantity is managed */
  catalogue?: InventoryCatalogue;
  /**  The condition of the Inventory Quantity value. The platform does not enforce any values here. Examples could include `NEW`, `USED`, or `DAMAGED` */
  condition?: string;
  /**  Time of creation */
  createdOn?: string;
  /**  The date and time the quantity is expected to arrive */
  expectedOn?: string;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: string;
  /**  The associated parent Inventory Position of which this Quantity applies */
  position?: InventoryPosition;
  /**  The actual amount of this specific Quantity record */
  quantity?: number;
  /**  The unique reference identifier for the Inventory Quantity */
  ref: string;
  /**  The current status of the `InventoryQuantity`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  A reference to the Storage Area where this inventory is kept */
  storageAreaRef?: string;
  /**
   *  Type of the `InventoryQuantity`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  The type field can be used to differentiate between Inventory Quantity workflows. Example types include `LAST_ON_HAND`, `RESERVED`, `EXPECTED`, and `ADJUSTMENT`.
   */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};

/**  A list of results that matched against a InventoryCatalogue search query */
export type InventoryCatalogueConnection = {
  __typename?: 'InventoryCatalogueConnection';
  /**  A list of edges that links to InventoryCatalogue type node */
  edges?: InventoryCatalogueEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a InventoryCatalogue connection to the InventoryCatalogue type */
export type InventoryCatalogueEdge = {
  __typename?: 'InventoryCatalogueEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the InventoryCatalogue edge */
  node?: InventoryCatalogue;
};

/**  Output type for aggregate inventory positions */
export type InventoryPositionAggregateOutput = {
  __typename?: 'InventoryPositionAggregateOutput';
  /**  the count of data entries */
  count?: number;
  /**  the sum of inventory entries */
  sum?: number;
};

/**  The `InventoryPositionKey` input is the parameter for identifying a specific Inventory Position. */
export type InventoryPositionKey = {
  /**  The Inventory Catalogue in which this Position resides */
  catalogue: InventoryCatalogueKey;
  /**
   *  Inventory Position reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: string;
};

/**  Output type for inventory position aggregate */
export type InventoryQuantityAggregateOutput = {
  __typename?: 'InventoryQuantityAggregateOutput';
  /**  the count of inventory position entries */
  count?: number;
  /**  the sum of inventory position entries */
  sum?: number;
};

/**  Represents a `User` */
export type User = Node & {
  __typename?: 'User';
  /**  Active apps for the Fluent Account to which the User belongs */
  apps?: App[];
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Attribute[];
  /**  Country */
  country?: string;
  /**  Time of creation */
  createdOn?: string;
  /**  Department */
  department?: string;
  /**  User's first name */
  firstName?: string;
  /**  ID of the object */
  id: string;
  /**  User language (leave null to allow users to self-select their language preference) */
  language?: SettingValueType;
  /**  User's last name */
  lastName?: string;
  /**  User's primary email */
  primaryEmail?: string;
  /**  User's location context */
  primaryLocation?: Location;
  /**  User's primary phone number */
  primaryPhone?: string;
  /**  User's retailer context */
  primaryRetailer?: Retailer;
  /**  Determines if the user has opted to receive promotions */
  promotionOptIn?: boolean;
  /**  External reference of the object. Recommended to be unique. */
  ref: string;
  /**  Roles assigned to the user */
  roles?: UserRole[];
  /**  Status */
  status?: string;
  /**  Timezone */
  timezone?: string;
  /**  The user's title. For example _Mr._, _Miss_, _Dr._, _Ms._ etc */
  title?: string;
  /**  Type of the user */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  Unique name for the user used for identification and logging purposes. */
  username: string;
};

/**  Represents packaged set of functionality within the Fluent Platform */
export type App = {
  __typename?: 'App';
  /**  The `App` creation time */
  createdOn?: string;
  /**  UUID */
  id: string;
  /**  The name of the `App` */
  name: string;
  /**  The `App` type enum. Accepted Values: REFERENCE, CUSTOM */
  type: AppType;
  /**  The `App` modification time */
  updatedOn?: string;
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
  major: number;
  /**  Minor version */
  minor: number;
  /**  Patch version */
  patch: number;
};

/**
 *  An object to represent a user's role with the contexts.
 *  <br/>Note: A role is always assigned to a user with a certain context.
 */
export type UserRole = {
  __typename?: 'UserRole';
  /**  A list of `RoleContext` objects. It represents the boundaries of the user's role validity. */
  contexts: RoleContext[];
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
  contextId: string;
  /**  Represents the type of context. For more information on contexts and how they relate to user and roles, please visit <a href="https://lingo.fluentretail.com/display/LIN/Flex+Academy+Users" target="_blank">User's section on Lingo</a>. */
  contextType: string;
};

/**
 *  Represents a `Role`. A `Role` is a singular entity that represents one or more `Permissions`. It could correlate for a job type for example, Fulfilment Manager. Roles make it
 *  easier for clients to manage access to various functions within the system.
 */
export type Role = {
  __typename?: 'Role';
  /**  ID of the object */
  id: string;
  /**  Name of the role. Must be unique. */
  name: string;
  /**  A list of permissions within the role */
  permissions?: Permission[];
};

/**  A `permission` represents a single access right. It implies the authorization to carry out a certain function within the system. */
export type Permission = {
  __typename?: 'Permission';
  /**  Name of the permission. Must be unique. */
  name: string;
};

/**  A list of results that matched against a OpeningSchedule search query */
export type OpeningScheduleConnection = {
  __typename?: 'OpeningScheduleConnection';
  /**  A list of edges that links to OpeningSchedule type node */
  edges?: OpeningScheduleEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a OpeningSchedule connection to the OpeningSchedule type */
export type OpeningScheduleEdge = {
  __typename?: 'OpeningScheduleEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the OpeningSchedule edge */
  node?: OpeningSchedule;
};

/**  A list of results that matched against a PaymentServiceProvider search query */
export type PaymentServiceProviderConnection = {
  __typename?: 'PaymentServiceProviderConnection';
  /**  A list of edges that links to PaymentServiceProvider type node */
  edges?: PaymentServiceProviderEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a PaymentServiceProvider connection to the PaymentServiceProvider type */
export type PaymentServiceProviderEdge = {
  __typename?: 'PaymentServiceProviderEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the PaymentServiceProvider edge */
  node?: PaymentServiceProvider;
};

/**  A list of results that matched against a Permission search query */
export type PermissionConnection = {
  __typename?: 'PermissionConnection';
  /**  A list of edges that links to Permission type node */
  edges?: PermissionEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Permission connection to the Permission type */
export type PermissionEdge = {
  __typename?: 'PermissionEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Permission edge */
  node?: Permission;
};

/**  A list of results that matched against a Price search query */
export type PriceConnection = {
  __typename?: 'PriceConnection';
  /**  A list of edges that links to Price type node */
  edges?: PriceEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Price connection to the Price type */
export type PriceEdge = {
  __typename?: 'PriceEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Price edge */
  node?: Price;
};

/**  A list of results that matched against a ProductCatalogue search query */
export type ProductCatalogueConnection = {
  __typename?: 'ProductCatalogueConnection';
  /**  A list of edges that links to ProductCatalogue type node */
  edges?: ProductCatalogueEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a ProductCatalogue connection to the ProductCatalogue type */
export type ProductCatalogueEdge = {
  __typename?: 'ProductCatalogueEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the ProductCatalogue edge */
  node?: ProductCatalogue;
};

/**  Input type to uniquely identify a `ReturnOrder` object. We use all the fields present in the request to look for this object. */
export type ReturnOrderKey = {
  /**  The client's reference identifier for the object */
  ref: string;
  /**  The associated retailer for this return order */
  retailer: RetailerId;
};

export type ReturnFulfilment = Node & Referenceable & {
  __typename?: 'ReturnFulfilment';
  /**  List of attributes associated with the return fulfilment */
  attributes?: Attribute[];
  /**  Date and time of creation */
  createdOn?: string;
  /**  The destination of the return order items. */
  destinationLocation?: LocationLink;
  /**  ID of the object */
  id: string;
  /**  The lodged location in cases where the return order was directly returned to a store or DC. */
  lodgedLocation?: LocationLink;
  /**  The pickup address in the cases of return orders that are being picked up by a carrier. */
  pickupAddress?: StreetAddress;
  /**  External reference for `Return Fulfilment`. Must be unique. */
  ref: string;
  /**  List of return fulfilment item associated with the return fulfilment */
  returnFulfilmentItems?: ReturnFulfilmentItemConnection;
  /**  Return order associated with the return fulfilment */
  returnOrder?: ReturnOrder;
  /**  Status of the `Return Fulfilment` */
  status: string;
  /**  Type of the return fulfilment */
  type: string;
  /**  Date and time of last update */
  updatedOn?: string;
  /**  Workflow associated with the return fulfilment */
  workflow?: WorkflowLink;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef?: string;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion?: number;
};


export type ReturnFulfilmentReturnFulfilmentItemsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  product?: ProductLinkInput;
  ref?: string[];
  updatedOn?: DateRange;
};

/**  A list of results that matched against a ReturnFulfilmentItem search query */
export type ReturnFulfilmentItemConnection = {
  __typename?: 'ReturnFulfilmentItemConnection';
  /**  A list of edges that links to ReturnFulfilmentItem type node */
  edges?: ReturnFulfilmentItemEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a ReturnFulfilmentItem connection to the ReturnFulfilmentItem type */
export type ReturnFulfilmentItemEdge = {
  __typename?: 'ReturnFulfilmentItemEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the ReturnFulfilmentItem edge */
  node?: ReturnFulfilmentItem;
};

export type ReturnFulfilmentItem = Node & Referenceable & {
  __typename?: 'ReturnFulfilmentItem';
  /**  List of attributes */
  attributes?: Attribute[];
  /**  Date and time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /** Product associated with the fulfilment item */
  product?: ProductLink;
  /**  External reference for `Return Order`. Must be unique. */
  ref: string;
  /**  Fulfilment this item associated with */
  returnOrderFulfilment?: ReturnFulfilment;
  /** Return order item associated with the fulfilment item */
  returnOrderItem?: ReturnOrderItem;
  /**  Quantity of return fulfilment item */
  unitQuantity?: QuantityType;
  /**  Date and time of last update */
  updatedOn?: string;
};

export type ReturnOrderItem = Node & Referenceable & {
  __typename?: 'ReturnOrderItem';
  /**  List of attributes associated with the return order */
  attributes?: Attribute[];
  /**  Date and time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  Item TaxAmount */
  itemAmount?: AmountType;
  /**  Item Amount */
  itemTaxAmount?: AmountType;
  /**  Associated order item of the return order */
  orderItem?: OrderItemLink;
  /**  Associated product with the return order */
  product?: ProductLink;
  /**  External reference for `Return Order`. Must be unique. */
  ref: string;
  /**  The condition in which the return item was received. */
  returnCondition?: SettingValueType;
  /**  An optional comment. Required if the condition code required further information such as 'Other'. */
  returnConditionComment?: string;
  /**  The actual payment action taken for this return item. */
  returnDispositionAction?: SettingValueType;
  /**  Return order associated with the order item */
  returnOrder?: ReturnOrder;
  /**  The actual payment action taken for this return item. */
  returnPaymentAction?: SettingValueType;
  /**  The reason for returning this return order item. */
  returnReason?: SettingValueType;
  /**  An optional comment. Required if the reason code required further information such as 'Other'. */
  returnReasonComment?: string;
  /**  Status of the return order */
  status: string;
  /**  Unit Amount */
  unitAmount?: AmountType;
  /**  Unit Quantity */
  unitQuantity?: QuantityType;
  /**  Unit TaxType */
  unitTaxType?: TaxType;
  /**  Date and time of last update */
  updatedOn?: string;
};

export type ReturnOrder = Node & Referenceable & {
  __typename?: 'ReturnOrder';
  /**  List of attributes. */
  attributes?: Attribute[];
  /**  Date and time of creation */
  createdOn?: string;
  /**  The associated credit memo for this return order. */
  creditMemo?: CreditMemoLink;
  /**  Reference to the currency type. Generally, the standard ISO-4217 is used. */
  currency?: CurrencyLink;
  /**  The associated customer for this return order. */
  customer?: CustomerLink;
  /**  The default Tax Type for this return order. Individual return order items can override. */
  defaultTaxType?: TaxType;
  /**  The destination of the return order items. */
  destinationLocation?: LocationLink;
  /**  The associated exchange order managed the exchange item. */
  exchangeOrder?: OrderLink;
  /**  ID of the object */
  id: string;
  /**  The lodged location in cases where the return order was directly returned to a store or DC. */
  lodgedLocation?: LocationLink;
  /**  The associated order for this return order. */
  order?: OrderLink;
  /**  The pickup address in the cases of return orders that are being picked up by a carrier. */
  pickupAddress?: StreetAddress;
  /**  External reference for `ReturnOrder`. Must be unique. */
  ref: string;
  /**  The associated retailer for this return order */
  retailer?: RetailerLink;
  /**  The authorised disposition for this return order. This can be different to the return disposition action which reflects the actual action once an item has been inspected. */
  returnAuthorisationDisposition?: SettingValueType;
  /**  The generated key representing an authorised return order which the customer can use to progress through the return order process. */
  returnAuthorisationKey?: string;
  /**  The time at which the return authorisation expires. */
  returnAuthorisationKeyExpiry?: string;
  /**  The list of associated return fulfilments. */
  returnOrderFulfilments?: ReturnFulfilmentConnection;
  /**  The list of associated return order items. */
  returnOrderItems?: ReturnOrderItemConnection;
  /**  A list of return verifications for this return order. */
  returnVerifications?: ReturnVerificationConnection;
  /**  Status of the `Return Order` */
  status: string;
  /**  The total amount of this return order excluding tax. */
  subTotalAmount?: AmountType;
  /**  The total amount of this return order including tax */
  totalAmount?: AmountType;
  /**  The total amount of tax for this return order. */
  totalTax?: AmountType;
  /**  Type of the return order */
  type: string;
  /**  Date and time of last update */
  updatedOn?: string;
  /**  Workflow version of the return order */
  workflow?: WorkflowLink;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The reference of the workflow.
   * @deprecated No longer supported
   */
  workflowRef?: string;
  /**
   *  DEPRECATED, please use the field `workflow` instead - The version of the workflow.
   * @deprecated No longer supported
   */
  workflowVersion?: number;
};


export type ReturnOrderReturnOrderFulfilmentsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  destinationLocation?: LocationLinkInput;
  first?: number;
  last?: number;
  lodgedLocation?: LocationLinkInput;
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflow?: WorkflowLinkInput;
  workflowRef?: string[];
  workflowVersion?: number[];
};


export type ReturnOrderReturnOrderItemsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  orderItem?: OrderItemLinkInput;
  product?: ProductLinkInput;
  ref?: string[];
  returnConditionComment?: string[];
  returnReasonComment?: string[];
  status?: string[];
  updatedOn?: DateRange;
};


export type ReturnOrderReturnVerificationsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  ref?: string[];
  type?: string[];
  updatedOn?: DateRange;
  verificationDetails?: string[];
};

export type CreditMemoLink = {
  __typename?: 'CreditMemoLink';
  ref?: string;
};

/**  A list of results that matched against a ReturnFulfilment search query */
export type ReturnFulfilmentConnection = {
  __typename?: 'ReturnFulfilmentConnection';
  /**  A list of edges that links to ReturnFulfilment type node */
  edges?: ReturnFulfilmentEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a ReturnFulfilment connection to the ReturnFulfilment type */
export type ReturnFulfilmentEdge = {
  __typename?: 'ReturnFulfilmentEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the ReturnFulfilment edge */
  node?: ReturnFulfilment;
};

/**  A list of results that matched against a ReturnOrderItem search query */
export type ReturnOrderItemConnection = {
  __typename?: 'ReturnOrderItemConnection';
  /**  A list of edges that links to ReturnOrderItem type node */
  edges?: ReturnOrderItemEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a ReturnOrderItem connection to the ReturnOrderItem type */
export type ReturnOrderItemEdge = {
  __typename?: 'ReturnOrderItemEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the ReturnOrderItem edge */
  node?: ReturnOrderItem;
};

/**  A list of results that matched against a ReturnVerification search query */
export type ReturnVerificationConnection = {
  __typename?: 'ReturnVerificationConnection';
  /**  A list of edges that links to ReturnVerification type node */
  edges?: ReturnVerificationEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a ReturnVerification connection to the ReturnVerification type */
export type ReturnVerificationEdge = {
  __typename?: 'ReturnVerificationEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the ReturnVerification edge */
  node?: ReturnVerification;
};

export type ReturnVerification = Node & Referenceable & {
  __typename?: 'ReturnVerification';
  /**  Date and time of creation */
  createdOn?: string;
  /**  ID of the object */
  id: string;
  /**  External reference for `Return Order`. Must be unique. */
  ref: string;
  /** return order */
  returnOrder?: ReturnOrder;
  type: string;
  /**  Date and time of last update */
  updatedOn?: string;
  /** verification details */
  verificationDetails?: string;
};

/**  Input type to uniquely identify a `ReturnFulfilment` object. We use all the fields present in the request to look for this object. */
export type ReturnFulfilmentKey = {
  /**  The client's reference identifier for the object */
  ref: string;
  /**  Return order associated with the return fulfilment */
  returnOrder: ReturnOrderKey;
};

export type CreditMemoLinkInput = {
  /**  Max character limit: 100. */
  ref: string;
};

/**  A list of results that matched against a ReturnOrder search query */
export type ReturnOrderConnection = {
  __typename?: 'ReturnOrderConnection';
  /**  A list of edges that links to ReturnOrder type node */
  edges?: ReturnOrderEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a ReturnOrder connection to the ReturnOrder type */
export type ReturnOrderEdge = {
  __typename?: 'ReturnOrderEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the ReturnOrder edge */
  node?: ReturnOrder;
};

/**  A list of results that matched against a Role search query */
export type RoleConnection = {
  __typename?: 'RoleConnection';
  /**  A list of edges that links to Role type node */
  edges?: RoleEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Role connection to the Role type */
export type RoleEdge = {
  __typename?: 'RoleEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Role edge */
  node?: Role;
};

/**  Information required to identify a geographical location. For instance Sydney has latitude, longitude values of _-33.868820_ and _151.209296_ respectively. */
export type GeoCoordinateInput = {
  /**  Geographical coordinate that specifies the north–south position of a point on the Earth's surface */
  latitude: number;
  /**  Geographical coordinate that specifies the east–west position of a point on the Earth's surface */
  longitude: number;
};

/**  Type to encapsulate a product and its requested quantity */
export type ProductQuantityInput = {
  /**  Reference identifier for the `Product` */
  productRef: string;
  /**  Requested quantity of the associated `Product` */
  quantity: number;
};

/**  The `VirtualCatalogueKey` input is the parameter for identifying a specific Virtual Catalogue */
export type VirtualCatalogueKey = {
  /**
   *  Virtual Catalogue reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: string;
};

/**  Input type used to identify a specific Virtual Position */
export type VirtualPositionInput = {
  /**  Represents the current status of the Virtual Position entity */
  status?: string;
};

/**  A list of results that matched against a VirtualInventory search query */
export type VirtualInventoryConnection = {
  __typename?: 'VirtualInventoryConnection';
  /**  A list of edges that links to VirtualInventory type node */
  edges?: VirtualInventoryEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a VirtualInventory connection to the VirtualInventory type */
export type VirtualInventoryEdge = {
  __typename?: 'VirtualInventoryEdge';
  /**  A cursor for use in pagination (not yet implemented) */
  cursor?: string;
  /**  The item at the end of the VirtualInventory edge */
  node?: VirtualInventory;
};

/**  Response type for the `searchVirtualInventory` query. The response may be empty if no stock is found for the request products in any of the configured locations. */
export type VirtualInventory = {
  __typename?: 'VirtualInventory';
  /**  `Location` of the stock */
  location?: Location;
  /**  An array of `VirtualPositions`. This will contain all necessary information pertaining to products and corresponding available-to-sell stock. */
  virtualPositions?: VirtualPosition[];
};

export type VirtualPosition = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'VirtualPosition';
  /**  List of Attribute containing meta data information for an entity */
  attributes?: Attribute[];
  /**  Catalogue */
  catalogue?: VirtualCatalogue;
  /**  Time of creation */
  createdOn?: string;
  /**  Group - reference to Location or Category */
  groupRef?: string;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: string;
  /**  Product reference */
  productRef?: string;
  /**  On hand quantity */
  quantity?: number;
  /**  The reference identifier used to identify an entity */
  ref: string;
  /**  The current status of the `VirtualPosition`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  Type of the `VirtualPosition`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};

export type VirtualCatalogue = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'VirtualCatalogue';
  /**  List of Attribute containing meta data information for an entity */
  attributes?: Attribute[];
  /**  Control group Ref */
  controlGroupRef?: string;
  /**  Time of creation */
  createdOn?: string;
  /**  Description */
  description?: string;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: string;
  /**  Inventory Catalogue used for this virtual catalogue */
  inventoryCatalogueRef?: string;
  /**  Name of the inventory catalogue */
  name: string;
  /**  Networks used for this catalogue */
  networkIds?: string[];
  /**  Product Catalogue used for this virtual catalogue */
  productCatalogueRef?: string;
  /**  The reference identifier used to identify an entity */
  ref: string;
  /**  Retailer refs */
  retailerRefs?: string[];
  /**  The current status of the `VirtualCatalogue`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  Type of the `VirtualCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  Virtual positions */
  virtualPositions?: VirtualPositionConnection;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


export type VirtualCatalogueVirtualPositionsArgs = {
  after?: string;
  before?: string;
  catalogue?: VirtualCatalogueKey;
  createdOn?: DateRange;
  first?: number;
  groupRef?: string[];
  last?: number;
  productRef?: string[];
  quantity?: number[];
  ref?: string[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**  A list of results that matched against a VirtualPosition search query */
export type VirtualPositionConnection = {
  __typename?: 'VirtualPositionConnection';
  /**  A list of edges that links to VirtualPosition type node */
  edges?: VirtualPositionEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a VirtualPosition connection to the VirtualPosition type */
export type VirtualPositionEdge = {
  __typename?: 'VirtualPositionEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the VirtualPosition edge */
  node?: VirtualPosition;
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
  context: string;
  /**  `ID` of the context. For instance, use a retailer's ID when using _RETAILER_ context. */
  contextId: number;
  /**  ID of the object */
  id: string;
  /**  Value of the setting. Use this if the value is a JSON. */
  lobValue?: any;
  /**  Name of the setting. */
  name?: string;
  /**  Value of the setting. Use this if the value is NOT a JSON. */
  value?: string;
  /**  Data type of the setting's value. Supported types are _LOB_, _STRING_, _INTEGER_, _BOOLEAN_ and _JSON_. */
  valueType?: string;
};

/**  A list of results that matched against a Setting search query */
export type SettingConnection = {
  __typename?: 'SettingConnection';
  /**  A list of edges that links to Setting type node */
  edges?: SettingEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Setting connection to the Setting type */
export type SettingEdge = {
  __typename?: 'SettingEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Setting edge */
  node?: Setting;
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
  attributes?: Attribute[];
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogue;
  /**  A connection to the associated Categories of this Product */
  categories?: CategoryConnection;
  /**  Time of creation */
  createdOn?: string;
  /**  The Global Trade Item Number (GTIN) for this Product */
  gtin: string;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: string;
  /**  The name of the Product */
  name: string;
  /**  A list of Prices for this Product */
  prices?: Price[];
  /**  The unique reference identifier for the Product */
  ref: string;
  /**  The current status of the `StandardProduct`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  A short description of the Product (max 255 chars) */
  summary?: string;
  /**  The tax information for this Product */
  tax?: TaxType;
  /**  Type of the `StandardProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  A connection to the associated Variant Products for this Product. This is useful if you use the Standard Product as a base record for all Variants, which helps ensure a consistent relationship between them */
  variants?: VariantProductConnection;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


/**
 *  A `StandardProduct` is a basic implementation of Product. The `ref` field will be the unique identifier for this Product within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `StandardProduct` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type StandardProductCategoriesArgs = {
  after?: string;
  before?: string;
  catalogue?: ProductCatalogueKey;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  summary?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**
 *  A `StandardProduct` is a basic implementation of Product. The `ref` field will be the unique identifier for this Product within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `StandardProduct` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type StandardProductVariantsArgs = {
  after?: string;
  before?: string;
  catalogue?: ProductCatalogueKey;
  createdOn?: DateRange;
  first?: number;
  gtin?: string[];
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  summary?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**  A list of results that matched against a VariantProduct search query */
export type VariantProductConnection = {
  __typename?: 'VariantProductConnection';
  /**  A list of edges that links to VariantProduct type node */
  edges?: VariantProductEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a VariantProduct connection to the VariantProduct type */
export type VariantProductEdge = {
  __typename?: 'VariantProductEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the VariantProduct edge */
  node?: VariantProduct;
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
  attributes?: Attribute[];
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogue;
  /**  A connection to the associated Categories of this Product */
  categories?: CategoryConnection;
  /**  Time of creation */
  createdOn?: string;
  /**  The Global Trade Item Number (GTIN) for this Product */
  gtin: string;
  /**  ID of the object. For internal use, should not be used externally or by any business logic */
  id: string;
  /**  The name of the Product */
  name: string;
  /**  A list of Prices for this Product */
  prices?: Price[];
  /**  The associated Standard Product for this Variant Product */
  product: StandardProduct;
  /**  The unique reference identifier for the Product */
  ref: string;
  /**  The current status of the `VariantProduct`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  A short description of the Product (max 255 chars) */
  summary?: string;
  /**  The tax information for this Product */
  tax?: TaxType;
  /**  Type of the `VariantProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


/**
 *  A `VariantProduct` is a variant based implementation of Product. A variation could be based on one or more attributes such as color, size, volume, etc. The `ref` field will be the unique identifier for this Product within the specified Product Catalogue, as identified by the `catalogue` field. <br /><br />
 *  The `VariantProduct` is an orchestrateable entity. Events for these should specify a parent entity of Product Catalogue. <br /><br />
 *  **Backward Compatibility Note** <br /><br />
 *  With the introduction of <a href="https://lingo.fluentretail.com/display/LIN/Global+Inventory" target="_blank">Global Inventory</a>, we have introduced new data structures to support this functionality. Existing orchestration enabled clients will have access to their existing product based data via the `COMPATIBILITY:<retailerId>` catalogue. <br /><br />
 *  For more information, please refer to the <a href="https://lingo.fluentretail.com/display/LIN/Compatibility" target="_blank">Backward Compatibility Guide on Lingo</a>
 */
export type VariantProductCategoriesArgs = {
  after?: string;
  before?: string;
  catalogue?: ProductCatalogueKey;
  createdOn?: DateRange;
  first?: number;
  last?: number;
  name?: string[];
  ref?: string[];
  status?: string[];
  summary?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};

/**  A list of results that matched against a StandardProduct search query */
export type StandardProductConnection = {
  __typename?: 'StandardProductConnection';
  /**  A list of edges that links to StandardProduct type node */
  edges?: StandardProductEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a StandardProduct connection to the StandardProduct type */
export type StandardProductEdge = {
  __typename?: 'StandardProductEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the StandardProduct edge */
  node?: StandardProduct;
};

/**  Store location information */
export type StoreAddress = Address & {
  __typename?: 'StoreAddress';
  /**  City */
  city?: string;
  /**  Company name */
  companyName?: string;
  /**  Country */
  country?: string;
  /**  Time of creation */
  createdOn?: string;
  /**  Directions to store location (may be used for landmarks) */
  directions?: string;
  /**  Email */
  email?: string;
  /**  ID of the object */
  id: string;
  /**  Latitude */
  latitude?: number;
  /**  Location */
  location?: Location;
  /**  Longitude */
  longitude?: number;
  /**  Name */
  name?: string;
  /**  Postcode */
  postcode?: string;
  /**  Location reference */
  ref?: string;
  /**  Region */
  region?: string;
  /**  State */
  state?: string;
  /**  Street */
  street?: string;
  /**  Street 2 */
  street2?: string;
  /**  Timezone */
  timeZone?: string;
  /**  Type of Address, to support legacy address, the value can be AGENT and ORDER */
  type?: string;
  /**  Time of last update */
  updatedOn?: string;
};

/**  A list of results that matched against a StoreAddress search query */
export type StoreAddressConnection = {
  __typename?: 'StoreAddressConnection';
  /**  A list of edges that links to StoreAddress type node */
  edges?: StoreAddressEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a StoreAddress connection to the StoreAddress type */
export type StoreAddressEdge = {
  __typename?: 'StoreAddressEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the StoreAddress edge */
  node?: StoreAddress;
};

/**  A list of results that matched against a User search query */
export type UserConnection = {
  __typename?: 'UserConnection';
  /**  A list of edges that links to User type node */
  edges?: UserEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a User connection to the User type */
export type UserEdge = {
  __typename?: 'UserEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the User edge */
  node?: User;
};

/**  A list of results that matched against a VirtualCatalogue search query */
export type VirtualCatalogueConnection = {
  __typename?: 'VirtualCatalogueConnection';
  /**  A list of edges that links to VirtualCatalogue type node */
  edges?: VirtualCatalogueEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a VirtualCatalogue connection to the VirtualCatalogue type */
export type VirtualCatalogueEdge = {
  __typename?: 'VirtualCatalogueEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the VirtualCatalogue edge */
  node?: VirtualCatalogue;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type for `virtualView` query.
 */
export type VirtualViewInput = {
  /**  Unique reference of the Virtual View */
  ref: string;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A `VirtualView` object provides on-hand and buffered view of the inventory. The buffers are calculated based on a specific set of inventory controls which are associated with the Virtual View at the time of creation.
 */
export type VirtualView = Node & Referenceable & {
  __typename?: 'VirtualView';
  /**  Time of creation */
  createdOn?: string;
  /**  Description */
  description?: string;
  /**  ID of the object. */
  id: string;
  /**  `InventoryCatalogue` associated with the Virtual View. */
  inventoryCatalogueRef: string;
  /**  The identifier for the DecisionTable that contains the inventory controls for this VirtualView. */
  inventoryControlsId: string;
  /**  Name of the VirtualView. */
  name: string;
  /**  `Network` associated with the Virtual View. */
  networkRef: string;
  /**  `ProductCatalogue` associated with the Virtual View. */
  productCatalogueRef: string;
  /**  A unique reference. Note: Virtual View refs do not support the hash (#) character. */
  ref: string;
  /**  Represents the current status of the Virtual View. Please see user guide to learn about the status lifecycle of a Virtual View. */
  status?: VirtualViewStatus;
  /**  Time of last update */
  updatedOn?: string;
  /**  A list of `VirtualProducts` within this Virtual View. A Virtual View returns `VirtualProducts` only when it is in the 'ACTIVE' status. */
  virtualProducts?: VirtualProductConnection;
};


/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A `VirtualView` object provides on-hand and buffered view of the inventory. The buffers are calculated based on a specific set of inventory controls which are associated with the Virtual View at the time of creation.
 */
export type VirtualViewVirtualProductsArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  ref?: string[];
  type?: ProductType[];
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
  edges?: VirtualProductEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a VirtualProduct connection to the VirtualProduct type */
export type VirtualProductEdge = {
  __typename?: 'VirtualProductEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the VirtualProduct edge */
  node?: VirtualProduct;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A `VirtualProduct` object provides aggregated as well as location based `onHand` and `available` inventory for a given product.
 */
export type VirtualProduct = {
  __typename?: 'VirtualProduct';
  /**  Represents number of items in the inventory with the buffers applied */
  available: number;
  /**  Represents the total buffer calculated as per the inventory controls. Please note that buffers are always subtracted from the on-hand quantities. So a negative buffer will result in addition. */
  buffer: number;
  /**
   *  Global trade item number: Globally unique 14 digit number to uniquely identify an item. We allow 20 characters as support for legacy clients. If you are not a legacy client, we recommend not exceeding the standard 14 digits. </br>
   *  Max character limit: 20.
   */
  gtin?: string;
  /**  ID of the object */
  id: string;
  /**  Represents number of items in the inventory without the buffer applied */
  onHand: number;
  /**  Reference of the product */
  ref: string;
  /**  Type of the product */
  type?: ProductType;
  /**  A list of `VirtualInventoryPosition` for this product. */
  virtualInventoryPositions?: VirtualInventoryPositionConnection;
  /**  Child products of this VirtualProduct. This field is applicable for products that have children. For instance, if this product is a StandardProduct with variants, this field represents the variants. */
  virtualProducts?: VirtualProductConnection;
};


/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A `VirtualProduct` object provides aggregated as well as location based `onHand` and `available` inventory for a given product.
 */
export type VirtualProductVirtualInventoryPositionsArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  locationRef?: string[];
};


/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A `VirtualProduct` object provides aggregated as well as location based `onHand` and `available` inventory for a given product.
 */
export type VirtualProductVirtualProductsArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  ref?: string[];
  type?: ProductType[];
};

/**  A list of results that matched against a VirtualInventoryPosition search query */
export type VirtualInventoryPositionConnection = {
  __typename?: 'VirtualInventoryPositionConnection';
  /**  A list of edges that links to VirtualInventoryPosition type node */
  edges?: VirtualInventoryPositionEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a VirtualInventoryPosition connection to the VirtualInventoryPosition type */
export type VirtualInventoryPositionEdge = {
  __typename?: 'VirtualInventoryPositionEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the VirtualInventoryPosition edge */
  node?: VirtualInventoryPosition;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  A `VirtualInventoryPosition` object provides the `onHand` and `available` inventory for the corresponding `VirtualProduct` at a specific location.
 */
export type VirtualInventoryPosition = {
  __typename?: 'VirtualInventoryPosition';
  /**  Represents number of items in the inventory with the buffer applied */
  available: number;
  /**  Represents the buffer, calculated as per the inventory controls. Please note that buffers are always subtracted from the on-hand quantities. So a negative buffer will result in addition. */
  buffer: number;
  /**  Reference for the location */
  locationRef: string;
  /**  Represents number of items in the inventory without the buffer applied */
  onHand: number;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 * Input type for the `virtualViewInventoryLevels` query.
 */
export type VirtualViewInventoryLevelsInput = {
  /**  A list of locations within the Virtual View's network. The search will be confined to these locations. */
  includedLocationRefs?: string[];
  /**
   *  GeoCoordinates to order results by. Closest locations are returned first. If this parameter is not passed, results will be in no specific order.
   *  Please note that we use the great-circle distance for this sorting and these distances are calculated based on an implementation of the Haversine formula.
   */
  orderByProximity?: GeoCoordinateInput;
  /**  An object containing requested products along with the quantities required. */
  productQuantities: ProductQuantityInput[];
  /**  Reference of the Virtual View that will be searched. */
  virtualViewRef: string;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Response type for the `VirtualViewInventoryLevels` query.
 */
export type VirtualViewInventoryLevelsOutput = {
  __typename?: 'VirtualViewInventoryLevelsOutput';
  /**  List of `VirtualViewInventoryLevels` objects. The number of objects in this array is currently capped at 100. This limit is subject to incremental change. */
  virtualViewInventoryLevels?: VirtualViewInventoryLevels[];
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Pair of location with products in this location.
 */
export type VirtualViewInventoryLevels = {
  __typename?: 'VirtualViewInventoryLevels';
  /**  Location that can fulfil the requested stock */
  locationRef: string;
  /**  Products along with their inventory levels */
  productInventoryLevels: VirtualViewProductInventoryLevels[];
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  An object containing a product’s inventory levels as requested via the `virtualViewInventoryLevels` query.
 */
export type VirtualViewProductInventoryLevels = {
  __typename?: 'VirtualViewProductInventoryLevels';
  /**  Represents a count of this product with the buffers applied */
  available: number;
  /**  Represents the total buffer applied to this product as per the inventory controls. Please note that buffers are always subtracted from the on-hand quantities. So a negative buffer will result in addition. */
  buffer: number;
  /**  Represents a count of this product without the buffer applied */
  onHand: number;
  /**  Reference of the product */
  productRef: string;
};

/**  `Wave` represents the pick and pack process that gets carried out in a store or a warehouse. */
export type Wave = Extendable & Node & Orchestrateable & Referenceable & {
  __typename?: 'Wave';
  /**  `User` who the wave is assigned to */
  allocatedTo?: User;
  /**  A list of attributes associated with this `Wave`. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: Attribute[];
  /**  Time of creation */
  createdOn?: string;
  /**  Fulfilments associated with this `Wave` */
  fulfilments?: FulfilmentConnection;
  /**  ID of the `Wave` */
  id: string;
  /**  Items associated with this `Wave` */
  items: WaveItemConnection;
  /**  Location of the `Wave` operation */
  location: Location;
  /**  Name of the `Wave` */
  name?: string;
  /**  The `Location` where the `Wave` is processed */
  processingLocation?: LocationLink;
  /**  External reference of the `Wave`. Must be unique. */
  ref: string;
  /**  The associated retailer */
  retailer: Retailer;
  /**  The current status of the `Wave`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  Type of the `Wave`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
  /**  Time of last update */
  updatedOn?: string;
  /**  The reference used for workflow identification. This is defined by a combination of the entity name and the type, in the format [EntityName]::[Type]. For example, an Order of type CC will have the workflowRef "ORDER::CC".<br/> */
  workflowRef: string;
  /**  The version of the workflow assigned to the entity and used for workflow identification. It comprises a major version and minor version number.<br/> */
  workflowVersion: number;
};


/**  `Wave` represents the pick and pack process that gets carried out in a store or a warehouse. */
export type WaveFulfilmentsArgs = {
  after?: string;
  before?: string;
  createdOn?: DateRange;
  deliveryType?: string[];
  eta?: string[];
  expiryTime?: DateRange;
  first?: number;
  fromLocation?: LocationLinkInput;
  fulfilmentChoiceRef?: string[];
  last?: number;
  ref?: string[];
  retailerId?: number[];
  status?: string[];
  type?: string[];
  updatedOn?: DateRange;
  workflowRef?: string[];
  workflowVersion?: number[];
};


/**  `Wave` represents the pick and pack process that gets carried out in a store or a warehouse. */
export type WaveItemsArgs = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  quantity?: number[];
};

/**  A list of results that matched against a WaveItem search query */
export type WaveItemConnection = {
  __typename?: 'WaveItemConnection';
  /**  A list of edges that links to WaveItem type node */
  edges?: WaveItemEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a WaveItem connection to the WaveItem type */
export type WaveItemEdge = {
  __typename?: 'WaveItemEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the WaveItem edge */
  node?: WaveItem;
};

/**  `WaveItem` represents an item of the `Wave`. */
export type WaveItem = {
  __typename?: 'WaveItem';
  /**  Represents the `Product` corresponding to this `WaveItem` */
  product: Product;
  /**  Aggregated quantity of a product in the `Wave` */
  quantity: number;
};

/**  A list of results that matched against a Wave search query */
export type WaveConnection = {
  __typename?: 'WaveConnection';
  /**  A list of edges that links to Wave type node */
  edges?: WaveEdge[];
  /**  Information to aid in pagination */
  pageInfo?: PageInfo;
};

/**  The edge in a Wave connection to the Wave type */
export type WaveEdge = {
  __typename?: 'WaveEdge';
  /**  A cursor for use in pagination */
  cursor?: string;
  /**  The item at the end of the Wave edge */
  node?: Wave;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  This mutation creates an `Article`, an orchestratable entity inside the Fluent ecosystem. If the `Article` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "ARTICLE-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "ARTICLE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createArticle?: Article;
  /** Creates a new 'Billing account' */
  createBillingAccount?: BillingAccount;
  /**  This mutation creates a `Carrier`, an orchestratable entity inside the Fluent ecosystem. If the `Carrier` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "CARRIER-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "CARRIER",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createCarrier?: Carrier;
  /**  Creates a `CarrierConsignment` */
  createCarrierConsignment?: CarrierConsignment;
  /**  This mutation creates a `Category`, an orchestratable entity inside the Fluent ecosystem. If the `Category` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "CATEGORY-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "CATEGORY",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createCategory?: Category;
  /**  Creates a `Comment` against a known entity */
  createComment?: Comment;
  createConsignment?: Consignment;
  /**  This mutation creates a `Control`, an orchestratable entity inside the Fluent ecosystem. If the `Control` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "CONTROL-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "CONTROL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createControl?: Control;
  /**  This mutation creates a `ControlGroup`, an orchestratable entity inside the Fluent ecosystem. If the `ControlGroup` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "CONTROLGROUP-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "CONTROLGROUP",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createControlGroup?: ControlGroup;
  /** Creates a 'Credit memo' */
  createCreditMemo?: CreditMemo;
  /** Creates a 'Credit memo item' */
  createCreditMemoItem?: CreditMemoItem;
  createCustomer?: Customer;
  createCustomerAddress?: CustomerAddress;
  /**
   *  _Disclaimer:  This mutation is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
   *  Mutation to create a decision rule and associate it with a decision table
   */
  createDecisionRule?: DecisionRule;
  /**  This mutation creates a `FinancialTransaction`, an orchestratable entity inside the Fluent ecosystem. If the `FinancialTransaction` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "FINANCIALTRANSACTION-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "FINANCIALTRANSACTION",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createFinancialTransaction?: FinancialTransaction;
  /**  This mutation creates a `Fulfilment`, an orchestratable entity inside the Fluent ecosystem. If the `Fulfilment` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "FULFILMENT-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "FULFILMENT",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createFulfilment?: Fulfilment;
  /**  This mutation creates a `FulfilmentChoice`, an orchestratable entity inside the Fluent ecosystem. If the `FulfilmentChoice` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "FULFILMENTCHOICE-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "FULFILMENTCHOICE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createFulfilmentChoice?: FulfilmentChoice;
  /**  This mutation creates a `FulfilmentOption`, an orchestratable entity inside the Fluent ecosystem. If the `FulfilmentOption` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "FULFILMENTOPTION-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "FULFILMENTOPTION",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createFulfilmentOption?: FulfilmentOption;
  /**  This mutation creates a `FulfilmentPlan`, an orchestratable entity inside the Fluent ecosystem. If the `FulfilmentPlan` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "FULFILMENTPLAN-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "FULFILMENTPLAN",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createFulfilmentPlan?: FulfilmentPlan;
  /**  This mutation creates a `GroupProduct`, an orchestratable entity inside the Fluent ecosystem. If the `GroupProduct` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "GROUPPRODUCT-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "GROUPPRODUCT",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createGroupProduct?: GroupProduct;
  /**  This mutation creates an `InventoryCatalogue`, an orchestratable entity inside the Fluent ecosystem. If the `InventoryCatalogue` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "INVENTORYCATALOGUE-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "INVENTORYCATALOGUE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createInventoryCatalogue?: InventoryCatalogue;
  /**  This mutation creates an `InventoryPosition`, an orchestratable entity inside the Fluent ecosystem. If the `InventoryPosition` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "INVENTORYPOSITION-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "INVENTORYPOSITION",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createInventoryPosition?: InventoryPosition;
  /**  This mutation creates an `InventoryQuantity`, an orchestratable entity inside the Fluent ecosystem. If the `InventoryQuantity` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "INVENTORYQUANTITY-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "INVENTORYQUANTITY",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createInventoryQuantity?: InventoryQuantity;
  /** Creates an 'Invoice' */
  createInvoice?: Invoice;
  /** Creates an 'Invoice item' */
  createInvoiceItem?: InvoiceItem;
  createLocation?: Location;
  /**  Creates a `Manifest` */
  createManifest?: Manifest;
  createNetwork?: Network;
  /**  This mutation creates an `Order`, an orchestratable entity inside the Fluent ecosystem. If the `Order` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "ORDER-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "ORDER",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createOrder?: Order;
  /**  This mutation creates an `Order`, an orchestratable entity inside the Fluent ecosystem. If the `Order` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "ORDER-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "ORDER",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createOrderAndCustomer?: Order;
  createOrderItem?: OrderItem;
  /**
   *  This mutation creates a `Payment`, an orchestratable entity inside the Fluent ecosystem. If the `Payment` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "PAYMENT-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "PAYMENT",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/>
   * Creates a new 'Payment'
   */
  createPayment?: Payment;
  /** Creates a new 'PaymentServiceProvider' */
  createPaymentServiceProvider?: PaymentServiceProvider;
  /**
   *  This mutation creates a `PaymentTransaction`, an orchestratable entity inside the Fluent ecosystem. If the `PaymentTransaction` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "PAYMENTTRANSACTION-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "PAYMENTTRANSACTION",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/>
   * Creates a new 'PaymentTransaction'
   */
  createPaymentTransaction?: PaymentTransaction;
  /**  This mutation creates a `ProductCatalogue`, an orchestratable entity inside the Fluent ecosystem. If the `ProductCatalogue` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "PRODUCTCATALOGUE-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "PRODUCTCATALOGUE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createProductCatalogue?: ProductCatalogue;
  createRetailer?: Retailer;
  /** Creates a 'Return fulfilment' */
  createReturnFulfilment?: ReturnFulfilment;
  /** Creates a 'Return fulfilment item' */
  createReturnFulfilmentItem?: ReturnFulfilmentItem;
  /** Creates a 'Return order' */
  createReturnOrder?: ReturnOrder;
  /** Creates a 'Return order item' */
  createReturnOrderItem?: ReturnOrderItem;
  /**  Creates a `Role` */
  createRole?: Role;
  /**  Creates a `Setting` */
  createSetting?: Setting;
  /**  This mutation creates a `StandardProduct`, an orchestratable entity inside the Fluent ecosystem. If the `StandardProduct` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "STANDARDPRODUCT-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "STANDARDPRODUCT",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createStandardProduct?: StandardProduct;
  createStorageArea?: StorageArea;
  createStoreAddress?: StoreAddress;
  /**  Creates a `User` */
  createUser?: User;
  /**  This mutation creates a `VariantProduct`, an orchestratable entity inside the Fluent ecosystem. If the `VariantProduct` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "VARIANTPRODUCT-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "VARIANTPRODUCT",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createVariantProduct?: VariantProduct;
  /**  This mutation creates a `VirtualCatalogue`, an orchestratable entity inside the Fluent ecosystem. If the `VirtualCatalogue` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "VIRTUALCATALOGUE-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "VIRTUALCATALOGUE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createVirtualCatalogue?: VirtualCatalogue;
  /**  This mutation creates a `VirtualPosition`, an orchestratable entity inside the Fluent ecosystem. If the `VirtualPosition` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "VIRTUALPOSITION-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "VIRTUALPOSITION",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createVirtualPosition?: VirtualPosition;
  /**
   *  _Disclaimer:  This mutation is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
   *  Creates a new `Virtual View`
   */
  createVirtualView?: CreateVirtualViewOutput;
  /**  This mutation creates a `Wave`, an orchestratable entity inside the Fluent ecosystem. If the `Wave` is successfully created, a CREATE event will be generate associated with the mutation.<br/>A sample of the event generated:<br/>{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"name": "CREATE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"type": "NORMAL",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityRef": "WAVE-001",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"entityType": "WAVE",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"retailerId": "1",<br/>&nbsp;&nbsp;&nbsp;&nbsp;"accountId": "ACCOUNT_ID"<br/>}<br/> */
  createWave?: Wave;
  /**  Removes one or more `Category`s from a `GroupProduct` */
  removeCategoriesFromGroupProduct?: RemoveCategoriesFromGroupProductOutput;
  /**  Removes one or more `Category`s from a `StandardProduct` */
  removeCategoriesFromStandardProduct?: RemoveCategoriesFromStandardProductOutput;
  /**  Removes one or more `Category`s from a `VariantProduct` */
  removeCategoriesFromVariantProduct?: RemoveCategoriesFromVariantProductOutput;
  /**
   *  _Disclaimer:  This mutation is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
   *  Mutation to remove a decision rule.
   */
  removeDecisionRule?: RemoveDecisionRuleOutput;
  /**  Removes one or more `Location`s from a `Network` */
  removeLocationsFromNetwork?: RemoveLocationsFromNetworkOutput;
  /**  Removes one or more `Network`s from a `Location` */
  removeNetworksFromLocation?: RemoveNetworksFromLocationOutput;
  /**  Removes one or more `Permission`s from a `Role` */
  removePermissionsFromRole?: RemovePermissionsFromRoleOutput;
  /**  Removes one or more `UserRole`s from an `User` */
  removeUserRolesFromUser?: RemoveUserRolesFromUserOutput;
  updateArticle?: Article;
  /** Updates a new 'Billing account' */
  updateBillingAccount?: BillingAccount;
  updateCarrier?: Carrier;
  /**  Updates a `CarrierConsignment` */
  updateCarrierConsignment?: CarrierConsignment;
  updateCategory?: Category;
  /**  Updates a `Comment` */
  updateComment?: Comment;
  updateConsignment?: Consignment;
  updateControl?: Control;
  updateControlGroup?: ControlGroup;
  /** Updates a 'Credit memo' */
  updateCreditMemo?: CreditMemo;
  updateCustomer?: Customer;
  updateCustomerAddress?: CustomerAddress;
  updateFulfilment?: Fulfilment;
  updateFulfilmentChoice?: FulfilmentChoice;
  updateFulfilmentOption?: FulfilmentOption;
  updateFulfilmentPlan?: FulfilmentPlan;
  updateGroupProduct?: GroupProduct;
  updateInventoryCatalogue?: InventoryCatalogue;
  updateInventoryPosition?: InventoryPosition;
  /**  Used to bulk update the statuses of a list of Inventory Positions */
  updateInventoryPositionsStatusByLocation?: UpdateStatusOutput;
  /**  Used to bulk update the statuses of a list of Inventory Quantities */
  updateInventoryQuantitiesStatus?: UpdateStatusOutput;
  updateInventoryQuantity?: InventoryQuantity;
  /** Updates an 'Invoice' */
  updateInvoice?: Invoice;
  updateLocation?: Location;
  updateLocationPrimaryAddress?: Location;
  /**  Updates a `Manifest` */
  updateManifest?: Manifest;
  updateNetwork?: Network;
  updateOpeningSchedule?: OpeningSchedule;
  updateOrder?: Order;
  /** Updates an existing 'Payment' */
  updatePayment?: Payment;
  /** Updates an existing 'PaymentServiceProvider' */
  updatePaymentServiceProvider?: PaymentServiceProvider;
  updateProductCatalogue?: ProductCatalogue;
  updateRetailer?: Retailer;
  /** Updates a 'Return fulfilment' */
  updateReturnFulfilment?: ReturnFulfilment;
  /** Updates a 'Return order' */
  updateReturnOrder?: ReturnOrder;
  /**  Updates a `Role` */
  updateRole?: Role;
  /**  Updates a `Setting` */
  updateSetting?: Setting;
  updateStandardProduct?: StandardProduct;
  updateStorageArea?: StorageArea;
  updateStoreAddress?: StoreAddress;
  /**  Updates a `User` */
  updateUser?: User;
  updateVariantProduct?: VariantProduct;
  updateVirtualCatalogue?: VirtualCatalogue;
  updateVirtualPosition?: VirtualPosition;
  /**  Used to bulk update the statuses of a list of Virtual Positions */
  updateVirtualPositionsStatusByGroup?: UpdateStatusOutput;
  updateWave?: Wave;
};


export type MutationCreateArticleArgs = {
  input?: CreateArticleInput;
};


export type MutationCreateBillingAccountArgs = {
  input?: CreateBillingAccountInput;
};


export type MutationCreateCarrierArgs = {
  input?: CreateCarrierInput;
};


export type MutationCreateCarrierConsignmentArgs = {
  input?: CreateCarrierConsignmentInput;
};


export type MutationCreateCategoryArgs = {
  input?: CreateCategoryInput;
};


export type MutationCreateCommentArgs = {
  input?: CreateCommentInput;
};


export type MutationCreateConsignmentArgs = {
  input?: CreateConsignmentInput;
};


export type MutationCreateControlArgs = {
  input?: CreateControlInput;
};


export type MutationCreateControlGroupArgs = {
  input?: CreateControlGroupInput;
};


export type MutationCreateCreditMemoArgs = {
  input?: CreateCreditMemoInput;
};


export type MutationCreateCreditMemoItemArgs = {
  input?: CreateCreditMemoItemInput;
};


export type MutationCreateCustomerArgs = {
  input?: CreateCustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input?: CreateCustomerAddressInput;
};


export type MutationCreateDecisionRuleArgs = {
  input: CreateDecisionRuleInput;
};


export type MutationCreateFinancialTransactionArgs = {
  input?: CreateFinancialTransactionInput;
};


export type MutationCreateFulfilmentArgs = {
  input?: CreateFulfilmentInput;
};


export type MutationCreateFulfilmentChoiceArgs = {
  input?: CreateFulfilmentChoiceInput;
};


export type MutationCreateFulfilmentOptionArgs = {
  executionMode?: ExecutionMode;
  input?: CreateFulfilmentOptionInput;
};


export type MutationCreateFulfilmentPlanArgs = {
  input?: CreateFulfilmentPlanInput;
};


export type MutationCreateGroupProductArgs = {
  input?: CreateGroupProductInput;
};


export type MutationCreateInventoryCatalogueArgs = {
  input?: CreateInventoryCatalogueInput;
};


export type MutationCreateInventoryPositionArgs = {
  input?: CreateInventoryPositionInput;
};


export type MutationCreateInventoryQuantityArgs = {
  input?: CreateInventoryQuantityInput;
};


export type MutationCreateInvoiceArgs = {
  input?: CreateInvoiceInput;
};


export type MutationCreateInvoiceItemArgs = {
  input?: CreateInvoiceItemInput;
};


export type MutationCreateLocationArgs = {
  input?: CreateLocationInput;
};


export type MutationCreateManifestArgs = {
  input?: CreateManifestInput;
};


export type MutationCreateNetworkArgs = {
  input?: CreateNetworkInput;
};


export type MutationCreateOrderArgs = {
  input?: CreateOrderInput;
};


export type MutationCreateOrderAndCustomerArgs = {
  input?: CreateOrderAndCustomerInput;
};


export type MutationCreateOrderItemArgs = {
  input?: CreateOrderItemInput;
};


export type MutationCreatePaymentArgs = {
  input?: CreatePaymentInput;
};


export type MutationCreatePaymentServiceProviderArgs = {
  input?: CreatePaymentServiceProviderInput;
};


export type MutationCreatePaymentTransactionArgs = {
  input?: CreatePaymentTransactionInput;
};


export type MutationCreateProductCatalogueArgs = {
  input?: CreateProductCatalogueInput;
};


export type MutationCreateRetailerArgs = {
  input?: CreateRetailerInput;
};


export type MutationCreateReturnFulfilmentArgs = {
  input?: CreateReturnFulfilmentInput;
};


export type MutationCreateReturnFulfilmentItemArgs = {
  input?: CreateReturnFulfilmentItemInput;
};


export type MutationCreateReturnOrderArgs = {
  input?: CreateReturnOrderInput;
};


export type MutationCreateReturnOrderItemArgs = {
  input?: CreateReturnOrderItemInput;
};


export type MutationCreateRoleArgs = {
  input?: CreateRoleInput;
};


export type MutationCreateSettingArgs = {
  input?: CreateSettingInput;
};


export type MutationCreateStandardProductArgs = {
  input?: CreateStandardProductInput;
};


export type MutationCreateStorageAreaArgs = {
  input?: CreateStorageAreaInput;
};


export type MutationCreateStoreAddressArgs = {
  input?: CreateStoreAddressInput;
};


export type MutationCreateUserArgs = {
  input?: CreateUserInput;
};


export type MutationCreateVariantProductArgs = {
  input?: CreateVariantProductInput;
};


export type MutationCreateVirtualCatalogueArgs = {
  input?: CreateVirtualCatalogueInput;
};


export type MutationCreateVirtualPositionArgs = {
  input?: CreateVirtualPositionInput;
};


export type MutationCreateVirtualViewArgs = {
  input?: CreateVirtualViewInput;
};


export type MutationCreateWaveArgs = {
  input?: CreateWaveInput;
};


export type MutationRemoveCategoriesFromGroupProductArgs = {
  input?: RemoveCategoriesFromGroupProductInput;
};


export type MutationRemoveCategoriesFromStandardProductArgs = {
  input?: RemoveCategoriesFromStandardProductInput;
};


export type MutationRemoveCategoriesFromVariantProductArgs = {
  input?: RemoveCategoriesFromVariantProductInput;
};


export type MutationRemoveDecisionRuleArgs = {
  input: RemoveDecisionRuleInput;
};


export type MutationRemoveLocationsFromNetworkArgs = {
  input?: RemoveLocationsFromNetworkInput;
};


export type MutationRemoveNetworksFromLocationArgs = {
  input?: RemoveNetworksFromLocationInput;
};


export type MutationRemovePermissionsFromRoleArgs = {
  input?: RemovePermissionsFromRoleInput;
};


export type MutationRemoveUserRolesFromUserArgs = {
  input?: RemoveUserRolesFromUserInput;
};


export type MutationUpdateArticleArgs = {
  input?: UpdateArticleInput;
};


export type MutationUpdateBillingAccountArgs = {
  input?: UpdateBillingAccountInput;
};


export type MutationUpdateCarrierArgs = {
  input?: UpdateCarrierInput;
};


export type MutationUpdateCarrierConsignmentArgs = {
  input?: UpdateCarrierConsignmentInput;
};


export type MutationUpdateCategoryArgs = {
  input?: UpdateCategoryInput;
};


export type MutationUpdateCommentArgs = {
  input?: UpdateCommentInput;
};


export type MutationUpdateConsignmentArgs = {
  input?: UpdateConsignmentInput;
};


export type MutationUpdateControlArgs = {
  input?: UpdateControlInput;
};


export type MutationUpdateControlGroupArgs = {
  input?: UpdateControlGroupInput;
};


export type MutationUpdateCreditMemoArgs = {
  input?: UpdateCreditMemoInput;
};


export type MutationUpdateCustomerArgs = {
  input?: UpdateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input?: UpdateCustomerAddressInput;
};


export type MutationUpdateFulfilmentArgs = {
  input?: UpdateFulfilmentInput;
};


export type MutationUpdateFulfilmentChoiceArgs = {
  input?: UpdateFulfilmentChoiceInput;
};


export type MutationUpdateFulfilmentOptionArgs = {
  input?: UpdateFulfilmentOptionInput;
};


export type MutationUpdateFulfilmentPlanArgs = {
  input?: UpdateFulfilmentPlanInput;
};


export type MutationUpdateGroupProductArgs = {
  input?: UpdateGroupProductInput;
};


export type MutationUpdateInventoryCatalogueArgs = {
  input?: UpdateInventoryCatalogueInput;
};


export type MutationUpdateInventoryPositionArgs = {
  input?: UpdateInventoryPositionInput;
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
  input?: UpdateInventoryQuantityInput;
};


export type MutationUpdateInvoiceArgs = {
  input?: UpdateInvoiceInput;
};


export type MutationUpdateLocationArgs = {
  input?: UpdateLocationInput;
};


export type MutationUpdateLocationPrimaryAddressArgs = {
  input?: UpdateLocationPrimaryAddressInput;
};


export type MutationUpdateManifestArgs = {
  input?: UpdateManifestInput;
};


export type MutationUpdateNetworkArgs = {
  input?: UpdateNetworkInput;
};


export type MutationUpdateOpeningScheduleArgs = {
  input?: UpdateOpeningScheduleInput;
};


export type MutationUpdateOrderArgs = {
  input?: UpdateOrderInput;
};


export type MutationUpdatePaymentArgs = {
  input?: UpdatePaymentInput;
};


export type MutationUpdatePaymentServiceProviderArgs = {
  input?: UpdatePaymentServiceProviderInput;
};


export type MutationUpdateProductCatalogueArgs = {
  input?: UpdateProductCatalogueInput;
};


export type MutationUpdateRetailerArgs = {
  input?: UpdateRetailerInput;
};


export type MutationUpdateReturnFulfilmentArgs = {
  input?: UpdateReturnFulfilmentInput;
};


export type MutationUpdateReturnOrderArgs = {
  input?: UpdateReturnOrderInput;
};


export type MutationUpdateRoleArgs = {
  input?: UpdateRoleInput;
};


export type MutationUpdateSettingArgs = {
  input?: UpdateSettingInput;
};


export type MutationUpdateStandardProductArgs = {
  input?: UpdateStandardProductInput;
};


export type MutationUpdateStorageAreaArgs = {
  input?: UpdateStorageAreaInput;
};


export type MutationUpdateStoreAddressArgs = {
  input?: UpdateStoreAddressInput;
};


export type MutationUpdateUserArgs = {
  input?: UpdateUserInput;
};


export type MutationUpdateVariantProductArgs = {
  input?: UpdateVariantProductInput;
};


export type MutationUpdateVirtualCatalogueArgs = {
  input?: UpdateVirtualCatalogueInput;
};


export type MutationUpdateVirtualPositionArgs = {
  input?: UpdateVirtualPositionInput;
};


export type MutationUpdateVirtualPositionsStatusByGroupArgs = {
  filter: VirtualPositionsGroupFilterInput;
  input: StatusInput;
};


export type MutationUpdateWaveArgs = {
  input?: UpdateWaveInput;
};

/** Article */
export type CreateArticleInput = {
  /**  Max character limit: 30. */
  articleNumber?: string;
  attributes?: AttributeInput[];
  /**  Max character limit: 50. */
  barcodeArticleNumber?: string;
  /**  Max character limit: 256. */
  description?: string;
  expiryDate?: string;
  fulfilments: FulfilmentId[];
  height: number;
  items?: CreateArticleItemWithArticleInput[];
  length: number;
  /**  Max character limit: 256. */
  name?: string;
  /**  Max character limit: 100. */
  purchaseValue?: string;
  quantity?: number;
  ref: string;
  storageArea?: StorageAreaId;
  /**
   *  Type of the `Article`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
  weight: number;
  width: number;
};

/**  Input type for `attribute`s. Attributes should be unique by `name`. If an attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else they will be inserted. */
export type AttributeInput = {
  name: string;
  type: string;
  value: any;
};

export type FulfilmentId = {
  /**  ID of the object */
  id: string;
};

/** ArticleItem */
export type CreateArticleItemWithArticleInput = {
  barcode?: string;
  orderItem?: OrderItemId;
  /**  Max quantity of an Article item allowed is "32767" */
  quantity: number;
};

export type OrderItemId = {
  /**  ID of the object */
  id: string;
};

export type StorageAreaId = {
  /**  ID of the object */
  id: string;
};

export type CreateBillingAccountInput = {
  /**  Address associated to the `BillingAccount`. */
  address?: StreetAddressInput;
  /**  A list of attributes associated with the `BillingAccount`. This can be used to extend the existing data structure with additional data. */
  attributes?: AttributeInput[];
  /**  Customer associated to the `BillingAccount`. */
  customer?: CustomerKey;
  /**
   *  Name of the `BillingAccount`. <br/>
   *  Max character limit: 100.
   */
  name: string;
  /**
   *  External reference to the `BillingAccount`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Retailer associated to the `BillingAccount`. */
  retailer: RetailerId;
  /**
   *  Type of the `BillingAccount`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 50.
   */
  type: string;
};

export type StreetAddressInput = {
  /**
   *  City. <br/>
   *  Max character limit: 45.
   */
  city?: string;
  /**
   *  Company Name. <br/>
   *  Max character limit: 45.
   */
  companyName?: string;
  /**
   *  Country. <br/>
   *  Max character limit: 100.
   */
  country?: string;
  /**  Latitude */
  latitude?: number;
  /**  Longitude */
  longitude?: number;
  /**  Name */
  name?: string;
  /**
   *  Postcode. <br/>
   *  Max character limit: 100.
   */
  postcode?: string;
  /**
   *  Region. <br/>
   *  Max character limit: 250.
   */
  region?: string;
  /**
   *  State. <br/>
   *  Max character limit: 200.
   */
  state?: string;
  /**
   *  Street. <br/>
   *  Max character limit: 100.
   */
  street?: string;
  /**
   *  Timezone. <br/>
   *  Max character limit: 32.
   */
  timeZone?: string;
};

/**  Input type to uniquely identify a `Customer` object. We use all the fields present in the request to look for this object. */
export type CustomerKey = {
  /**  The client's reference identifier for the object */
  ref: string;
};

/**  Input type to create a `Carrier` */
export type CreateCarrierInput = {
  /**  A list of attributes associated with this Carrier. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**
   *  Name of the carrier. <br/>
   *  Max character limit: 45.
   */
  name: string;
  /**
   *  The unique reference identifier for the `Carrier`. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  ID of the retailer */
  retailer: RetailerId;
  /**
   *  Type of the `Carrier`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
};

/**  Input for creating a `CarrierConsignment` object. */
export type CreateCarrierConsignmentInput = {
  /**  A list of attributes associated with this Consignment. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**  Carrier used for the consignment */
  carrier: CarrierId;
  /**  Input for creating `ConsignmentArticle`s for this consignment */
  carrierConsignmentArticles: CreateConsignmentArticleWithConsignmentInput[];
  /**
   *  The external consignment reference assigned by the carrier. <br/>
   *  Max character limit: 100.
   */
  consignmentReference?: string;
  /**  The URL used to retrieve the shipping label */
  labelUrl?: string;
  /**  A url to represent the order summary. Usually the manifest url from the service provider. */
  orderSummaryUrl?: string;
  /**  External reference of the object. Must be unique. */
  ref: string;
  /**  Retailer who is booking the consignment */
  retailer: RetailerId;
  /**
   *  Tracking label of the consignment. <br/>
   *  Max character limit: 100.
   */
  trackingLabel?: string;
};

/**  Input type to uniquely identify a `Carrier` */
export type CarrierId = {
  /**  ID of the object */
  id: string;
};

/**  Input for creating `ConsignmentArticle`s with the `CreateConsignment` request. */
export type CreateConsignmentArticleWithConsignmentInput = {
  article?: ArticleId;
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
  attributes?: AttributeInput[];
  /**  The reference of the `ProductCatalogue` in which this `Category` will reside. The `ProductCatalogue` must already exist. */
  catalogue: ProductCatalogueKey;
  /**  List of child `Category` references, if any. Child categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The child `Category` must already exist. */
  childCategories?: CategoryKey[];
  /**  The name of the Category */
  name: string;
  /**
   *  The reference to the parent of this `Category`, if any. The parent `Category` must be a part of the same `ProductCatalogue` (see `catalogue` field). The parent `Category` must already exist. <br/>
   *  Max character limit: 36.
   */
  parentCategory?: CategoryKey;
  /**
   *  The reference identifier used to identify an single `Category` within a `ProductCatalogue`. The `ref` must be unique within a `ProductCatalogue`. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  A short description of the Category */
  summary?: string;
  /**
   *  Type of the `Category`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
};

/**  Input for creating a `comment` against a known entity */
export type CreateCommentInput = {
  /**
   *  ID of the entity <br/>
   *  Note: Please note that while the type of this field is `ID`, currently it only supports _Integer_ values.
   */
  entityId: string;
  /**  Type of the entity. For example `ORDER`, `FULFILMENT`, `ORDERITEM`, `PRODUCTCATALOGUE` etc. */
  entityType: string;
  /**
   *  Comment text. <br/>
   *  Max character limit: 200.
   */
  text: string;
};

/**  Input for creating a `Consignment` object. */
export type CreateConsignmentInput = {
  /**  Carrier used for the consignment */
  carrier: CarrierId;
  /**  Input for creating `ConsignmentArticle`s for this consignment */
  consignmentArticles: CreateConsignmentArticleWithConsignmentInput[];
  /**
   *  The external consignment reference assigned by the carrier. <br/>
   *  Max character limit: 100.
   */
  consignmentReference: string;
  /**  The URL used to retrieve the shipping label */
  labelUrl?: string;
  /**  A url to represent the order summary. Usually the manifest url from the service provider. */
  orderSummaryUrl?: string;
  /**  External reference of the object. Recommended to be unique. */
  ref: string;
  /**  Retailer who is booking the consignment */
  retailer: RetailerId;
  /**
   *  Tracking label of the consignment. <br/>
   *  Max character limit: 100.
   */
  trackingLabel?: string;
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
  attributes?: AttributeInput[];
  /**  Control Group */
  controlGroup: ControlGroupKey;
  /**  Description */
  description?: string;
  /**  Order that this control is applied */
  executionOrder?: number;
  /**  Name */
  name: string;
  /**
   *  The reference identifier used to identify an entity. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  Type of the `Control`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
  /**  values */
  values?: AttributeInput[];
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
  attributes?: AttributeInput[];
  /**  Description */
  description?: string;
  /**  Name */
  name: string;
  /**
   *  The reference identifier used to identify an entity. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Retailer refs */
  retailerRefs?: string[];
  /**
   *  Type of the `ControlGroup`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
};

export type CreateCreditMemoInput = {
  /**  A list of attributes associated with the `CreditMemo`. This can be used to extend the existing data structure with additional data. */
  attributes?: AttributeInput[];
  /**  `BillingAccount` associated with the `CreditMemo`. */
  billingAccount: BillingAccountKey;
  /**  Reference to the `Currency`. */
  currency: CurrencyKey;
  /**  The default Tax Type for this credit memo. Individual credit memo items can override */
  defaultTaxType: TaxTypeInput;
  /**  `Invoice` associated with this `CreditMemo`. */
  invoice?: InvoiceKey;
  /**  Issue date */
  issueDate: string;
  /**  The `CreditMemoItem`s associated with this `CreditMemo`. */
  items?: CreateCreditMemoItemWithCreditMemoInput[];
  /**  Reference to an `Order` associated with the `CreditMemo`. */
  order?: OrderLinkInput;
  /**
   *  External reference to the `CreditMemo`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Reference to a `ReturnOrder` associated with the `CreditMemo`. */
  returnOrder?: ReturnOrderKey;
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
  type: string;
};

/**  Input type to uniquely identify a `BillingAccount` object. We use all the fields present in the request to look for this object. */
export type BillingAccountKey = {
  /**  The client's reference identifier for the object */
  ref: string;
};

/**  Input type to uniquely identify a `Currency` object. We use all the fields present in the request to look for this object. */
export type CurrencyKey = {
  /**  Max character limit: 20. */
  alphabeticCode: string;
};

/**  Input structure for creating or updating a `TaxType` on a `Product`. If `country` and `group` match, it will UPDATE, otherwise it will CREATE. All fields are required. */
export type TaxTypeInput = {
  /**  Max character limit: 100. */
  country: string;
  /**  Max character limit: 100. */
  group: string;
  /**  Max character limit: 100. */
  tariff: string;
};

/**  Input type to uniquely identify an `Invoice` object. We use all the fields present in the request to look for this object. */
export type InvoiceKey = {
  /**  The client's reference identifier for the object */
  ref: string;
};

export type CreateCreditMemoItemWithCreditMemoInput = {
  /**  The item amount for this item excluding tax. This is a calculated value based on business rules that does not necessarily have to take into account the unit quantity or amounts. */
  amount: AmountTypeInput;
  /**  Credit reason code of the `CreditMemoItem`. */
  creditReasonCode?: SettingValueTypeInput;
  /**  Description of the `CreditMemoItem`. */
  description?: string;
  /**  Reference to an `OrderItem` associated with the `CreditMemoItem`. */
  orderItem?: OrderItemLinkInput;
  /**  Reference to a `Product` associated with the `CreditMemoItem`. */
  product?: ProductKey;
  /**
   *  External reference to the `CreditMemoItem`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Reference to a `ReturnOrderItem` associated with the `CreditMemoItem`. */
  returnOrderItem?: ReturnOrderItemKey;
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount: AmountTypeInput;
  /**
   *  Type of the `CreditMemoItem`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 50.
   */
  type: string;
  /**  The unit sale price at time of sale or exchange */
  unitAmount: AmountTypeInput;
  /**  The unit cost price at time of sale or exchange. */
  unitCostAmount?: AmountTypeInput;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity: QuantityTypeInput;
  /**  The tax type of this item. Should only be provided if different to the default credit memo tax type. */
  unitTaxType?: TaxTypeInput;
};

export type AmountTypeInput = {
  amount?: number;
  scale?: number;
  unscaledValue?: number;
};

export type SettingValueTypeInput = {
  label?: string;
  value: string;
};

/**  The `ProductKey` input is the parameter for identifying a specific Product. */
export type ProductKey = {
  /**  The Product Catalogue in which this Product resides */
  catalogue: ProductCatalogueKey;
  /**
   *  Product reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: string;
};

/**  Input type to uniquely identify a `ReturnOrderItem` object. We use all the fields present in the request to look for this object. */
export type ReturnOrderItemKey = {
  /**  The client's reference identifier for the object */
  ref: string;
  /**  Return order associated with the order item */
  returnOrder: ReturnOrderKey;
};

export type QuantityTypeInput = {
  quantity: number;
  unit?: string;
};

export type CreateCreditMemoItemInput = {
  /**  The item amount for this item excluding tax. This is a calculated value based on business rules that does not necessarily have to take into account the unit quantity or amounts. */
  amount: AmountTypeInput;
  /**  `CreditMemo` associated with the `CreditMemoItem`. */
  creditMemo: CreditMemoKey;
  /**  Credit reason code of the `CreditMemoItem`. */
  creditReasonCode?: SettingValueTypeInput;
  /**  Description of the `CreditMemoItem`. */
  description?: string;
  /**  Reference to an `OrderItem` associated with the `CreditMemoItem`. */
  orderItem?: OrderItemLinkInput;
  /**  Reference to a `Product` associated with the `CreditMemoItem`. */
  product?: ProductKey;
  /**
   *  External reference to the `CreditMemoItem`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Reference to a `ReturnOrderItem` associated with the `CreditMemoItem`. */
  returnOrderItem?: ReturnOrderItemKey;
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount: AmountTypeInput;
  /**
   *  Type of the `CreditMemoItem`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 50.
   */
  type: string;
  /**  The unit sale price at time of sale or exchange */
  unitAmount: AmountTypeInput;
  /**  The unit cost price at time of sale or exchange. */
  unitCostAmount?: AmountTypeInput;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity: QuantityTypeInput;
  /**  The tax type of this item. Should only be provided if different to the default credit memo tax type. */
  unitTaxType?: TaxTypeInput;
};

/**  Input type to uniquely identify a `CreditMemo` object. We use all the fields present in the request to look for this object. */
export type CreditMemoKey = {
  /**  The client's reference identifier for the object */
  ref: string;
};

/** Customer */
export type CreateCustomerInput = {
  attributes?: AttributeInput[];
  /**  Max character limit: 100. */
  country?: string;
  department?: string;
  /**  Max character limit: 50. */
  firstName: string;
  /**  Max character limit: 50. */
  lastName?: string;
  /**  Max character limit: 250. */
  primaryEmail: string;
  /**  Max character limit: 20. */
  primaryPhone?: string;
  promotionOptIn: boolean;
  retailer: RetailerId;
  /**  Max character limit: 32. */
  timezone: string;
  /**  Max character limit: 50. */
  title?: string;
  /**  Max character limit: 250. */
  username: string;
};

/** CustomerAddress */
export type CreateCustomerAddressInput = {
  /**  Max character limit: 255. */
  city?: string;
  /**  Max character limit: 255. */
  companyName?: string;
  /**  Max character limit: 100. */
  country?: string;
  /**  Max character limit: 255. */
  email?: string;
  latitude?: number;
  longitude?: number;
  name?: string;
  /**  Max character limit: 100. */
  postcode?: string;
  ref: string;
  /**  Max character limit: 250. */
  region?: string;
  /**  Max character limit: 200. */
  state?: string;
  /**  Max character limit: 255. */
  street?: string;
  /**  Max character limit: 255. */
  street2?: string;
  /**  Max character limit: 32. */
  timeZone?: string;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type for creating a new decision rule
 */
export type CreateDecisionRuleInput = {
  /**  Input for the new decision rule being created */
  decisionRule: CreateDecisionRuleWithDecisionTableInput;
  /**  Id of the decision table that this rule is being added to */
  decisionTableId: string;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type for creating a new decision rule with a decision table
 */
export type CreateDecisionRuleWithDecisionTableInput = {
  /**  A short description of the rule. Helpful to understand the behaviour when the rule itself is complicated. */
  description?: string;
  /**  A set of conditions that all need to be true for the input to evaluate to true. */
  inputs: CreateDecisionRuleInputInput[];
  /**  A set of actions to be taken when the input evaluates to true. <br/> Note: The type is list for future support. Currently we support only one action. If user configures more than one output, the first one in the array will be executed and the rest will be ignored. */
  outputs: CreateDecisionRuleOutputInput[];
  /**  The priority decides which rule to execute in case of a conflict between multiple rules. The rule with the highest priority (represented by lowest number) will be selected. If no priority is provided, each rule will get a priority of 100 by default. */
  priority?: number;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type for `DecisionRuleInput`. Sorry about the awkward naming in this case but that's the naming convention.
 */
export type CreateDecisionRuleInputInput = {
  /**  This represents the right hand side of the condition equation. It includes the input values. */
  inputEntries?: CreateDecisionRuleInputEntriesInput;
  /**  The left hand side of a condition equation. At the moment, the actions are executed only when the inputExpression evaluates to true. So, it should be designed such that the true value should lead to the execution of the action. */
  inputExpression?: CreateDecisionRuleInputExpressionInput;
};

/**  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/> */
export type CreateDecisionRuleInputEntriesInput = {
  /**  Values that the input expression will be compared to. To be used when values of the corresponding fields are strings. For example, value of Product.Ref will be string or a value that can be passed and converted into a string. */
  stringEntries?: string[];
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  The input expression. At the moment, output actions are executed when DecisionRuleInputExpression evaluates to true. So, this should be designed such that it evaluates to true for the corresponding action to be performed.
 *  Note: A rule can have multiple input expressions chained together with logical operators. Currently the api uses the "AND" operator to chain multiple input expressions within a rule.
 */
export type CreateDecisionRuleInputExpressionInput = {
  /**  The fieldName from the GraphQL type */
  fieldName?: DecisionRuleInputFieldName;
  /**  The comparison operator */
  operator?: DecisionRuleComparisionOperator;
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
  intEntry?: number;
};

/**  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/> */
export type CreateDecisionRuleOutputExpressionInput = {
  /**  The action to be executed */
  action?: DecisionRuleOutputAction;
};

/** Financial Transaction */
export type CreateFinancialTransactionInput = {
  amount: number;
  /**  The card type used for the payment. Possible values are 'MASTERCARD', 'VISA', 'AMEX', 'DINERS', 'SPAN', 'DISCOVER', 'UNIONPAY', 'JCB', 'MAESTRO', 'INTERAC'. */
  cardType?: string;
  /**  Max character limit: 3. */
  currency: string;
  externalTransactionCode?: string;
  externalTransactionId?: string;
  order: OrderId;
  paymentMethod: string;
  paymentProvider?: string;
  ref: string;
  /**
   *  Type of the `FinancialTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 25.
   */
  type: string;
};

export type OrderId = {
  /**  ID of the object */
  id: string;
};

/**  Input type to create a `Fulfilment` */
export type CreateFulfilmentInput = {
  /**  List of `attribute`s */
  attributes?: AttributeInput[];
  /**  Represents the associated `Customer` */
  customer?: CustomerId;
  /**  Type of delivery. Supported values are _STANDARD_, _OVERNIGHT_ and _EXPRESS_. */
  deliveryType?: string;
  /**  Estimated time of completing this fulfilment */
  eta?: string;
  /**  Expiry time of the fulfilment */
  expiryTime?: string;
  /**  Represents `Address` fulfilling this fulfilment */
  fromAddress?: AddressId;
  /**  Represents the associated `FulfilmentChoice` */
  fulfilmentChoiceRef?: string;
  /**  List of `FulfilmentItem`s */
  items?: CreateFulfilmentItemWithFulfilmentInput[];
  /**  Represents the associated `Order` */
  order: OrderId;
  /**  External reference. Recommended to be unique. */
  ref: string;
  /**  Represents the delivery `Address` */
  toAddress?: AddressId;
  /**
   *  Type of the `Fulfilment`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the Fulfilment. Supports all values.
   */
  type: string;
};

export type CustomerId = {
  /**  ID of the object */
  id: string;
};

export type AddressId = {
  /**  ID of the object */
  id: string;
};

/**  Input type to create a `FulfilmentItem` with a `Fulfilment`. Intended to be used as an inline input in the _createFulfilment_ mutation. */
export type CreateFulfilmentItemWithFulfilmentInput = {
  /**  Number of `OrderItem`s confirmed */
  filledQuantity: number;
  /**  Associated `OrderItem` */
  orderItem: OrderItemId;
  /**  External reference. Recommended to be unique. */
  ref: string;
  /**  Number of `OrderItem`s rejected */
  rejectedQuantity: number;
  /**  Number of `OrderItem`s assigned to the fulfilment */
  requestedQuantity?: number;
};

/**  Input type to create an `FulfilmentChoice`. Adding FulfilmentChoice to existing order. */
export type CreateFulfilmentChoiceInput = {
  /**  List of Attribute containing meta data information for an entity. */
  attributes?: AttributeInput[];
  /**  The type of currency, 3 letter ISO currency code. */
  currency?: string;
  /**  Time of delivery selected by the customer at the time of order creation, specifies Deliver On date/time the customer will receive the order (package). */
  deliverAfter?: string;
  /**  Time of delivery selected by the customer at the time of order creation, specifies Deliver Till date/time the customer will receive the order (package). */
  deliverBefore?: string;
  /**  Delivery address. Required if it is a home delivery. */
  deliveryAddress?: CreateCustomerAddressInput;
  /**  Mobile number of delivery recipient. */
  deliveryContact?: string;
  /**  Email address to which e-delivery is made. */
  deliveryEmail?: string;
  /**  First Name of delivery recipient. */
  deliveryFirstName?: string;
  /**  Instruction provided by the customer (250 character limit). */
  deliveryInstruction?: string;
  /**  Last Name of delivery recipient. */
  deliveryLastName?: string;
  /**  The type of delivery determined by retailers' shipping options. Example values are STANDARD, EXPRESS, OVERNIGHT, 3HOURS */
  deliveryType: string;
  /**  Time that indicates date of dispatch */
  dispatchOn?: string;
  /**  FulfilmentPrice refers to shipping and C&C fees. */
  fulfilmentPrice?: number;
  /**  This refers to the tax cost associated with the fulfilment price. */
  fulfilmentTaxPrice?: number;
  /**  Indicates the type of fulfilment. */
  fulfilmentType?: string;
  /**  Associated `Order` */
  order: OrderId;
  /**  Pickup location. Required if it is a click & collect. */
  pickupLocationRef?: string;
  /**  External reference of the object. Recommended to be unique. */
  ref?: string;
  /**
   *  Type of the `FulfilmentChoice`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the Fulfilment choice. Currently supports all values.
   */
  type?: string;
};

export enum ExecutionMode {
  AwaitOrchestration = 'AWAIT_ORCHESTRATION'
}

/**  Input type to create a `FulfilmentOption` object. */
export type CreateFulfilmentOptionInput = {
  /**  A type for passing address. Can be used as an input in creating Fulfilment Plans. */
  address?: CreateFulfilmentOptionAddressInput;
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**
   *  The reference identifier for a location. May be used in orchestration rules to drive custom business logic. For example, you can have a rule to return plans only from this
   *   location or a rule to return plans from all locations but excluding this one.
   */
  locationRef?: string;
  /**  Type of order. For example _click & collect (CC)_ or _home delivery (HD)_ */
  orderType?: string;
  /**  Products being queried for availability */
  products?: CreateFulfilmentOptionProductInput[];
  /**  External reference. Recommended to be unique. */
  ref: string;
  /**  ID of the `Retailer`, typically used by the Orchestration Engine to determine the workflow that should be applied. */
  retailerId: number;
  /**  A unique identifier for the clients to group related Fulfilment Plans. */
  trackingCode?: string;
  /**  Type of the `FulfilmentOption`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
};

/**  Address type to be used in `FulfilmentOption` */
export type CreateFulfilmentOptionAddressInput = {
  /**  First address line */
  addressLine1?: string;
  /**  Second address line */
  addressLine2?: string;
  /**
   *  City or Town. <br/>
   *  Max character limit: 45.
   */
  city?: string;
  /**
   *  Company Name. <br/>
   *  Max character limit: 45.
   */
  companyName?: string;
  /**
   *  Country. <br/>
   *  Max character limit: 100.
   */
  country?: string;
  /**  Geographical coordinate that specifies the north–south position of a point on the Earth's surface */
  latitude?: number;
  /**  Geographical coordinate that specifies the east–west position of a point on the Earth's surface */
  longitude?: number;
  /**  Name */
  name?: string;
  /**
   *  Postcode or Zipcode. <br/>
   *  Max character limit: 100.
   */
  postcode?: string;
  /**
   *  State or County. <br/>
   *  Max character limit: 100.
   */
  state?: string;
};

/**  Input type to create a `FulfilmentOptionProduct`. */
export type CreateFulfilmentOptionProductInput = {
  /**  A reference to identify the catalogue for the product */
  catalogueRef?: string;
  /**  A reference to identify a Product */
  productRef: string;
  /**  The requested quantity for the product */
  requestedQuantity?: number;
};

/**  Input type to create a `FulfilmentPlan` object. */
export type CreateFulfilmentPlanInput = {
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**  ETA of the `FulfilmentPlan`. Although this can be set explicitly, we recommend that this be determined and set in the workflow. */
  eta?: string;
  /**  A list of exceptions. */
  exceptions?: CreateFulfilmentPlanExceptionInput[];
  /**  associated `FulfilmentOption` object */
  fulfilmentOptionId: FulfilmentOptionId;
  /**  Represents fulfilments under this Fulfilment Plan */
  fulfilments?: CreateFulfilmentPlanFulfilmentInput[];
  /**  External reference. Recommended to be unique. */
  ref: string;
  /**  ID of the retailer */
  retailerId: number;
  /**  Order split limits */
  splits?: number;
  /**  Type of the `FulfilmentPlan`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
};

/**  Input type to create a new `FulfilmentPlanException` type */
export type CreateFulfilmentPlanExceptionInput = {
  /**  Attributes may contain useful information about the exception */
  attributes?: AttributeInput[];
  /**  The exception code */
  code?: string;
  /**  The english like description of the exception */
  message?: string;
};

export type FulfilmentOptionId = {
  /**  ID of the object */
  id: string;
};

/**  Represents a fulfilment under a `FulfilmentPlan` */
export type CreateFulfilmentPlanFulfilmentInput = {
  /**  ETA of the `FulfilmentPlan` as configured in the workflow */
  eta?: string;
  /**  Type of fulfilment. */
  fulfilmentType?: string;
  /**  List of products with their requested and available quantities */
  items?: CreateFulfilmentPlanFulfilmentItemInput[];
  /**  Reference to identify the fulfilment location for this fulfilment. */
  locationRef?: string;
};

/**  Input type to create `FulfilmentPlanFulfilmentItem`. */
export type CreateFulfilmentPlanFulfilmentItemInput = {
  /**  Quantity of the product available as per the plan */
  availableQuantity: number;
  /**  A reference to identify the Catalogue */
  catalogueRef?: string;
  /**  External reference of the product. */
  productRef: string;
  /**  Requested quantity of the product. */
  requestedQuantity: number;
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
  attributes?: AttributeInput[];
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogueKey;
  /**  A list of references to the `Category`'s to which this `Product` relates. Product categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The `Category` must already exist. */
  categories?: CategoryKey[];
  /**  The name of the Product */
  name: string;
  /**  A list of Prices for this Product */
  prices?: PriceInput[];
  /**  A list of Products within the group */
  products?: ProductKey[];
  /**
   *  The unique reference identifier for the Product. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  A short description of the Product (max 255 chars) */
  summary?: string;
  /**  The tax information for this Product */
  taxType?: TaxTypeInput;
  /**
   *  Type of the `GroupProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
};

/**  Input structure for creating or updating `Price`'s on a `Product`. If `type` and `currency` match, it will UPDATE, otherwise it will CREATE. All fields are required. */
export type PriceInput = {
  currency: string;
  type: string;
  value: number;
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
  attributes?: AttributeInput[];
  /**  A short description of the Inventory Catalogue */
  description?: string;
  /**  The name of the Inventory Catalogue */
  name: string;
  /**
   *  The unique reference identifier for the Inventory Catalogue. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  A list of Retailer references associated with this Inventory Catalogue */
  retailerRefs?: string[];
  /**
   *  Type of the `InventoryCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
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
  attributes?: AttributeInput[];
  /**  The Inventory Catalogue in which this Position is managed */
  catalogue: InventoryCatalogueKey;
  /**  A reference identifying the Location where this inventory exists. This is a loosely coupled association. */
  locationRef: string;
  /**  The calculated on hand quantity based on the associated quantities, and rules in the orchestration workflow */
  onHand?: number;
  /**  A reference identifying a Product. The referenced product may or may not exist within one or more Product Catalogues. This is a loosely coupled association, since Product and Inventory are separate domains. */
  productRef: string;
  /**  A list of Inventory Quantities associated with this Position */
  quantities?: InventoryQuantityKey[];
  /**
   *  The unique reference identifier for the Inventory Position. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  Type of the `InventoryPosition`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
};

/**  The `InventoryQuantityKey` input is the parameter for identifying a specific Inventory Quantity. */
export type InventoryQuantityKey = {
  /**  The Inventory Catalogue in which this Quantity resides */
  catalogue: InventoryCatalogueKey;
  /**
   *  Inventory Quantity reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: string;
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
  attributes?: AttributeInput[];
  /**  The Inventory Catalogue in which this Position is managed */
  catalogue: InventoryCatalogueKey;
  /**  The condition of the Inventory Quantity value. The platform does not enforce any values here. Examples could include `NEW`, `USED`, or `DAMAGED` */
  condition?: string;
  /**  The date and time the quantity is expected to arrive */
  expectedOn?: string;
  /**  The associated parent Inventory Position of which this Quantity applies */
  position: InventoryPositionKey;
  /**  The actual amount of this specific Quantity record */
  quantity: number;
  /**
   *  The unique reference identifier for the Inventory Quantity. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  A reference to the Storage Area where this inventory is kept. <br/>
   *  Max character limit: 100.
   */
  storageAreaRef?: string;
  /**
   *  Type of the `InventoryQuantity`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
};

/**  `CreateInvoiceInput` */
export type CreateInvoiceInput = {
  /**  A list of attributes associated with the `Invoice`. This can be used to extend the existing data structure with additional data. */
  attributes?: AttributeInput[];
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
  dueDate?: string;
  /**  Reference to the `Fulfilment` associated with this `Invoice`. */
  fulfilment?: FulfilmentLinkInput;
  /**  Issue date of the `Invoice` */
  issueDate: string;
  /**  The `InvoiceItem`s associated with this `Invoice`. */
  items?: CreateInvoiceItemWithInvoiceInput[];
  /**  Reference to the `Order` associated with this `Invoice`. */
  order?: OrderLinkInput;
  /**
   *  External reference to the `Invoice`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
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
  type: string;
};

/**  Input type to create an `InvoiceItem` with an `Invoice`. Intended to be used as an inline input in the createInvoice_mutation. */
export type CreateInvoiceItemWithInvoiceInput = {
  /**  The item amount for this item excluding tax */
  amount: AmountTypeInput;
  /**  Description of the `InvoiceItem`. */
  description?: string;
  /**  Reference to the `Product` associated with this object. */
  product?: ProductKey;
  /**
   *  External reference to the `InvoiceItem`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount: AmountTypeInput;
  /**
   *  Type of the `InvoiceItem`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 50.
   */
  type: string;
  /**  The unit price of the source item. */
  unitAmount: AmountTypeInput;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity: QuantityTypeInput;
  /**  The tax type of this item. Should only be provided if different to the default invoice tax type. */
  unitTaxType?: TaxTypeInput;
};

/**  Input type to create an `InvoiceItem` after the `Invoice` creation. */
export type CreateInvoiceItemInput = {
  /**  The item amount for this item excluding tax */
  amount: AmountTypeInput;
  /**  Description of the `InvoiceItem`. */
  description?: string;
  /**  The `Invoice` this object is associated with */
  invoice: InvoiceKey;
  /**  Reference to the `Product` associated with this object. */
  product?: ProductKey;
  /**
   *  External reference to the `InvoiceItem`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount: AmountTypeInput;
  /**
   *  Type of the `InvoiceItem`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 50.
   */
  type: string;
  /**  The unit price of the source item. */
  unitAmount: AmountTypeInput;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity: QuantityTypeInput;
  /**  The tax type of this item. Should only be provided if different to the default invoice tax type. */
  unitTaxType?: TaxTypeInput;
};

export type CreateLocationInput = {
  attributes?: AttributeInput[];
  /**  Max character limit: 50. */
  defaultCarrier?: string;
  /**  Max character limit: 100. */
  name: string;
  networks?: NetworkId[];
  openingSchedule: CreateOpeningScheduleInput;
  primaryAddress: CreateStoreAddressInput;
  /**  Max character limit: 100. */
  ref: string;
  retailer: RetailerId;
  storageAreas?: CreateStorageAreaWithLocationInput[];
  /**  Max character limit: 20. */
  supportPhoneNumber?: string;
  /**  Max character limit: 25. */
  type: string;
};

export type NetworkId = {
  /**  ID of the object */
  id: string;
};

/** OpeningSchedule */
export type CreateOpeningScheduleInput = {
  allHours: boolean;
  friEnd: number;
  friStart: number;
  monEnd: number;
  monStart: number;
  satEnd: number;
  satStart: number;
  sunEnd: number;
  sunStart: number;
  thuEnd: number;
  thuStart: number;
  tueEnd: number;
  tueStart: number;
  wedEnd: number;
  wedStart: number;
};

export type CreateStoreAddressInput = {
  /**  Max character limit: 255. */
  city?: string;
  /**  Max character limit: 255. */
  companyName?: string;
  /**  Max character limit: 100. */
  country?: string;
  /**  Max character limit: 255. */
  email?: string;
  latitude: number;
  longitude: number;
  name?: string;
  /**  Max character limit: 100. */
  postcode?: string;
  ref: string;
  /**  Max character limit: 250. */
  region?: string;
  /**  Max character limit: 200. */
  state?: string;
  /**  Max character limit: 255. */
  street?: string;
  /**  Max character limit: 255. */
  street2?: string;
  /**  Max character limit: 32. */
  timeZone?: string;
};

export type CreateStorageAreaWithLocationInput = {
  attributes?: AttributeInput[];
  ref: string;
  /**  Max character limit: 50. */
  type?: string;
};

/**  Input for the `createManifest` mutation. */
export type CreateManifestInput = {
  /**  A list of attributes associated with the `Manifest`. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**
   *  Reference to the `Carrier` the `Manifest` is for <br/>
   *  Max character limit: 100.
   */
  carrier: CarrierKey;
  /**  A list of references to the `Consignment`'s the `Manifest` contains. */
  carrierConsignments?: CarrierConsignmentKey[];
  /**  The link where the carrier's manifest is stored. Not all the carriers generates one, so this field is optional. */
  carrierManifestLink?: string;
  /**  The `Location` the `Manifest` is associated with */
  location: LocationKey;
  /**  The name of the `Manifest` */
  name: string;
  /**
   *  External reference for the `Manifest`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The type of `Manifest`. <br/>
   *  Max character limit: 50.
   */
  type: string;
};

/**  Input type to uniquely identify a `Carrier` */
export type CarrierKey = {
  /**
   *  Reference of the object. <br/>
   *  Max character limit: 100.
   */
  ref: string;
};

/**  Input type to create a `Network` */
export type CreateNetworkInput = {
  /**  List of the network's `attribute`s */
  attributes?: AttributeInput[];
  /**  List of `location`s within this network */
  locations?: LocationId[];
  /**
   *  Name of the network. Recommended to be unique as this is used as the reference for the network. <br/>
   *  Max character limit: 100.
   */
  name: string;
  /**  List of `retailer`s associated with this network */
  retailers: RetailerId[];
  /**
   *  Type of the network. For example you could use _CC_ for _Click and Collect_ or _HD_ for _Home Delivery_. These types can be defined by the user and used by the Orchestration
   *  Engine to determine the workflow that should be applied <br/>
   *  Max character limit: 15.
   */
  type?: string;
};

export type LocationId = {
  /**  ID of the object */
  id: string;
};

/**  Input type to create an `Order` */
export type CreateOrderInput = {
  /**  List of order `attribute`s */
  attributes?: AttributeInput[];
  /**  `ID` of the `Customer` for the order */
  customer: CustomerId;
  /**  `FulfilmentChoice` for the order */
  fulfilmentChoice?: CreateFulfilmentChoiceWithOrderInput;
  /**  `FulfilmentChoices` for the order */
  fulfilmentChoices?: CreateFulfilmentChoiceWithOrderInput[];
  /**  A list of `OrderItem`s for this order */
  items: CreateOrderItemWithOrderInput[];
  /**  The 'Payment' associated with this `Order` */
  payment?: PaymentKey;
  /**  External reference for the order. Must be unique. */
  ref: string;
  /**  `Retailer` for the order */
  retailer: RetailerId;
  /**  Total price */
  totalPrice?: number;
  /**  Total tax price */
  totalTaxPrice?: number;
  /**
   *  Type of the `Order`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the Order, typically used by the Orchestration Engine to determine the workflow
   *  that should be applied. Unless stated otherwise, no values are enforced by the platform. Currently supports all values.
   */
  type: string;
};

/**  Input type to create an `FulfilmentChoice` with an `Order`. Intended to be used as an inline input in the _createOrder_ mutation. */
export type CreateFulfilmentChoiceWithOrderInput = {
  /**  List of Attribute containing meta data information for an entity. */
  attributes?: AttributeInput[];
  /**  The type of currency, 3 letter ISO currency code. */
  currency?: string;
  /**  Time of delivery selected by the customer at the time of order creation, specifies Deliver On date/time the customer will receive the order (package). */
  deliverAfter?: string;
  /**  Time of delivery selected by the customer at the time of order creation, specifies Deliver Till date/time the customer will receive the order (package). */
  deliverBefore?: string;
  /**  Delivery address. Required if it is a home delivery. */
  deliveryAddress?: CreateCustomerAddressInput;
  /**  Mobile number of delivery recipient. */
  deliveryContact?: string;
  /**  Email address to which e-delivery is made. */
  deliveryEmail?: string;
  /**  First Name of delivery recipient. */
  deliveryFirstName?: string;
  /**  Instruction provided by the customer (250 character limit). */
  deliveryInstruction?: string;
  /**  Last Name of delivery recipient. */
  deliveryLastName?: string;
  /**  The type of delivery determined by retailers' shipping options. Example values are STANDARD, EXPRESS, OVERNIGHT, 3HOURS */
  deliveryType: string;
  /**  Time that indicates date of dispatch */
  dispatchOn?: string;
  /**  FulfilmentPrice refers to shipping and C&C fees. */
  fulfilmentPrice?: number;
  /**  This refers to the tax cost associated with the fulfilment price. */
  fulfilmentTaxPrice?: number;
  /**  Indicates the type of fulfilment. */
  fulfilmentType?: string;
  /**  Pickup location. Required if it is a click & collect. */
  pickupLocationRef?: string;
  /**  External reference of the object. Recommended to be unique. */
  ref?: string;
  /**  Type of the Fulfilment choice. Currently supports all values. */
  type?: string;
};

/**  Input type to create an `OrderItem` with an `Order`. Intended to be used as an inline input in the _createOrder_ mutation. */
export type CreateOrderItemWithOrderInput = {
  /**  List of `OrderItem` `attribute`s. There's expected a JSON object */
  attributes?: AttributeInput[];
  /**  Currency. Should ideally be a 3 letter ISO currency code. For instance _AUD_. */
  currency?: string;
  /**  Represents the `FulfilmentChoice` corresponding to this object */
  fulfilmentChoiceRef?: string;
  /**  Price paid. Excludes tax. */
  paidPrice?: number;
  /**  Price */
  price?: number;
  /**
   *  External reference for the product catalogue containing the associated product (specified using the `productRef` in this object).
   *  A product is always associated with a catalogue, that's why we recommend that you always pass a `productCatalogueRef`.
   *  However, if you are using the compatibility catalogue, you don't need to pass in this value as that's the default catalogue
   */
  productCatalogueRef?: string;
  /**  External reference for the associated product. */
  productRef: string;
  /**  Quantity ordered */
  quantity: number;
  /**  External reference for the object. Recommended to be unique. */
  ref: string;
  /**  Tax price */
  taxPrice?: number;
  /**  Tax type. Supported values are _GST_, _VAT_, _EXCLTAX_. */
  taxType?: string;
  /**  Total price */
  totalPrice?: number;
  /**  Total tax price */
  totalTaxPrice?: number;
};

/**  Input type to uniquely identify a `Payment` object. We use all the fields present in the request to look for this object. */
export type PaymentKey = {
  /**  The client's reference identifier for the object */
  ref: string;
};

/**  Input type to create an `Order` while creating a new `Customer` in a single request */
export type CreateOrderAndCustomerInput = {
  /**  List of order's `attribute`s */
  attributes?: AttributeInput[];
  /**  `Customer` for the order */
  customer: CreateCustomerInput;
  /**  `FulfilmentChoice` for the order */
  fulfilmentChoice?: CreateFulfilmentChoiceWithOrderInput;
  /**  `FulfilmentChoices` for the order */
  fulfilmentChoices?: CreateFulfilmentChoiceWithOrderInput[];
  /**  A list of `OrderItem`s for this order */
  items: CreateOrderItemWithOrderInput[];
  /**  The 'Payment' associated with this `Order` */
  payment?: PaymentKey;
  /**  External reference for the order. Must be unique. */
  ref: string;
  /**  `Retailer` for the order */
  retailer: RetailerId;
  /**  Total price */
  totalPrice?: number;
  /**  Total tax price */
  totalTaxPrice?: number;
  /**
   *  Type of the `Order`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the Order, typically used by the Orchestration Engine to determine the workflow
   *  that should be applied. Unless stated otherwise, no values are enforced by the platform. Currently supports all values.
   */
  type: string;
};

/**
 *  `CreateOrderItemInput` is used to create an `OrderItem` separately of the `Order` creation.
 *  Intended to be used for order items exchanges, to add `OrderItem`s after the `Order` has been created.
 */
export type CreateOrderItemInput = {
  /**  List of `OrderItem` `attribute`s. There's expected a JSON object */
  attributes?: AttributeInput[];
  /**  Currency. Should ideally be a 3 letter ISO currency code. For instance _AUD_. */
  currency?: string;
  /**  Represents the `FulfilmentChoice` corresponding to this object */
  fulfilmentChoiceRef?: string;
  /**  Contains the reference to the `Order` this item will be added to. */
  order: OrderKey;
  /**  Price paid. Excludes tax. */
  paidPrice?: number;
  /**  Price */
  price?: number;
  /**
   *  External reference for the product catalogue containing the associated product (specified using the `productRef` in this object).
   *  A product is always associated with a catalogue, that's why we recommend that you always pass a `productCatalogueRef`.
   *  However, if you are using the compatibility catalogue, you don't need to pass in this value as that's the default catalogue
   */
  productCatalogueRef: string;
  /**  External reference for the associated product. Use together with productCatalogueRef to identify a particular `Product` */
  productRef: string;
  /**  Quantity ordered */
  quantity: number;
  /**  External reference for the object. Recommended to be unique. */
  ref: string;
  /**  Tax price */
  taxPrice?: number;
  /**  Tax type. Supported values are _GST_, _VAT_, _EXCLTAX_. */
  taxType?: string;
  /**  Total price */
  totalPrice?: number;
  /**  Total tax price */
  totalTaxPrice?: number;
};

/**  The `OrderKey` input identify the `Order` using either the id or the external reference to the object */
export type OrderKey = {
  /**  ID of the `Order` */
  id?: string;
  /**  External reference of the `Order`. */
  ref?: string;
};

/**  Input type to create a `Payment`. */
export type CreatePaymentInput = {
  /**  The total amount of this `Payment` */
  amount: AmountTypeInput;
  /**  A list of attributes associated with the `Payment`. This can be used to extend the existing data structure with additional data. */
  attributes?: AttributeInput[];
  /**  The `BillingAccount` associated with this `Payment`. */
  billingAccount?: BillingAccountKey;
  /**  The `PaymentTransaction`s associated with this `Payment`. */
  paymentTransactions?: CreatePaymentTransactionWithPaymentInput[];
  /**
   *  External reference for the `Payment`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Retailer associated to the `Payment`. */
  retailer: RetailerId;
  /**
   *  The current status of the `Payment`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Status of the `Payment`. <br/>
   *  Max character limit: 25.
   */
  status?: string;
  /**
   *  Type of the `Payment`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the `Payment`, typically used by the Orchestration Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 25.
   */
  type: string;
};

/**  Input type to create one or more `PaymentTransaction` when a `Payment` is created. */
export type CreatePaymentTransactionWithPaymentInput = {
  /**  The total amount of this `PaymentTransaction` */
  amount: AmountTypeInput;
  /**  A list of attributes associated with the `PaymentTransaction`. This can be used to extend the existing data structure with additional data. */
  attributes?: AttributeInput[];
  /**  The Authorization Key of this `PaymentTransaction` if it is of 'PreAuth' */
  authorizationKey?: string;
  /**  The Card type used in this `PaymentTransaction`. Some example values are: 'MASTERCARD', 'VISA', 'AMEX', 'DINERS', 'SPAN', 'DISCOVER', 'UNIONPAY', 'JCB', 'MAESTRO', 'INTERAC'. */
  cardType?: string;
  /**  The currency used in this `Payment`. */
  currency: CurrencyKey;
  /**  The payment method used in this `PaymentTransaction`. Some example values are: 'CREDITCARD', 'GIFTCARD', 'COUPON'. */
  paymentMethod: string;
  /**  The payment servicer provider for this `PaymentTransaction` */
  paymentServiceProvider: PaymentServiceProviderKey;
  /**
   *  External reference to the `PaymentTransaction`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  Status of the `PaymentTransaction`. <br/>
   *  Max character limit: 25.
   */
  status?: string;
  /**
   *  Type of the `PaymentTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Common types that are used are: CAPTURE
   * REFUND, AUTHORIZATION. <br/>
   *  Max character limit: 25.
   */
  type: string;
};

/**  Input type to uniquely identify a `PaymentServiceProvider` object. We use all the fields present in the request to look for this object. */
export type PaymentServiceProviderKey = {
  /**  The client's reference identifier for the object */
  ref: string;
};

/**  Input type to create a `PaymentServiceProvider`. */
export type CreatePaymentServiceProviderInput = {
  /**  A list of attributes associated with the `PaymentServiceProvider`. This can be used to extend the existing data structure with additional data. */
  attributes?: AttributeInput[];
  /**
   *  The ClientId of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 25.
   */
  clientId: string;
  /**
   *  The Client Secret of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  clientSecret: string;
  /**
   *  The host name of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  host: string;
  /**
   *  Name of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  name?: string;
  /**  The port of the `PaymentServiceProvider` */
  port: number;
  /**
   *  External reference to the `PaymentServiceProvider`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Retailer associated to the `PaymentServiceProvider`. */
  retailer: RetailerId;
  /**
   *  The Authorization Key of this `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  serviceAuthToken: string;
};

/**  Input type to create a `PaymentTransaction`. */
export type CreatePaymentTransactionInput = {
  /**  The total amount of this `PaymentTransaction` */
  amount: AmountTypeInput;
  /**  A list of attributes associated with the `PaymentTransaction`. This can be used to extend the existing data structure with additional data. */
  attributes?: AttributeInput[];
  /**
   *  The Authorization Key of this `PaymentTransaction` if it is of 'PreAuth'. <br/>
   *  Max character limit: 50.
   */
  authorizationKey?: string;
  /**
   *  The Card type used in this `PaymentTransaction`. Some example values are: 'MASTERCARD', 'VISA', 'AMEX', 'DINERS', 'SPAN', 'DISCOVER', 'UNIONPAY', 'JCB', 'MAESTRO', 'INTERAC'. <br/>
   *  Max character limit: 25.
   */
  cardType?: string;
  /**  The currency used in this `Payment`. */
  currency: CurrencyKey;
  /**  The 'Payment' associated with this `PaymentTransaction` */
  payment: PaymentKey;
  /**
   *  The payment method used in this `PaymentTransaction`. Some example values are: 'CREDITCARD', 'GIFTCARD', 'COUPON'. <br/>
   *  Max character limit: 25.
   */
  paymentMethod: string;
  /**  The payment servicer provider for this `PaymentTransaction` */
  paymentServiceProvider: PaymentServiceProviderKey;
  /**
   *  External reference to the `PaymentTransaction`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The current status of the `PaymentTransaction`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Status of the `PaymentTransaction`. <br/>
   *  Max character limit: 25.
   */
  status?: string;
  /**
   *  Type of the `PaymentTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the `PaymentTransaction`, typically used by the Orchestration Engine to determine the workflow that should be applied. Common types that are used are: CAPTURE
   * REFUND, AUTHORIZATION. <br/>
   *  Max character limit: 25.
   */
  type: string;
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
  attributes?: AttributeInput[];
  /**  A short description of the Product Catalogue */
  description?: string;
  /**  The name of the Product Catalogue */
  name: string;
  /**
   *  The unique reference identifier for the Product Catalogue. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  A list of Retailer references associated with this Product Catalogue */
  retailerRefs?: string[];
  /**
   *  Type of the `ProductCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
};

/** Retailer */
export type CreateRetailerInput = {
  /**  Max character limit: 45. */
  name: string;
  networks?: CreateNetworkWithRetailerInput[];
  /**  Max character limit: 250. */
  primaryEmail?: string;
  region?: string;
  summary?: string;
  supportContactName?: string;
  supportEmail?: string;
  supportPhone?: string;
  tradingName?: string;
  urlName?: string;
  websiteUrl?: string;
};

export type CreateNetworkWithRetailerInput = {
  attributes?: AttributeInput[];
  /**  Max character limit: 100. */
  ref: string;
  type?: string;
};

/**  Input type to create a return fulfilment */
export type CreateReturnFulfilmentInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /** The destination of the return order items */
  destinationLocation: LocationLinkInput;
  /** The lodged location in cases where the return order was directly returned to a store or DC */
  lodgedLocation?: LocationLinkInput;
  /** The pickup address in the cases of return orders that are being picked up by a carrier */
  pickupAddress?: StreetAddressInput;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /** Add fulfilment items with fulfilment */
  returnFulfilmentItems?: CreateReturnFulfilmentItemWithReturnFulfilmentInput[];
  /**  Return order reference */
  returnOrder: ReturnOrderKey;
  /**
   *  Type of fulfilment. <br/>
   *  Max character limit: 50.
   */
  type: string;
};

/** Input type to create a return fulfilment item when creating a return fulfilment */
export type CreateReturnFulfilmentItemWithReturnFulfilmentInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**  Product reference */
  product?: ProductKey;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Return order item reference */
  returnOrderItem: ReturnOrderItemKey;
  /**  Quantity of return fulfilment */
  unitQuantity: QuantityTypeInput;
};

/** Input type to create a return fulfilment item */
export type CreateReturnFulfilmentItemInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /** Product reference */
  product?: ProductKey;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
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
  attributes?: AttributeInput[];
  /**  The associated credit memo for this return order */
  creditMemo?: CreditMemoKey;
  /**  The currency of this return */
  currency: CurrencyKey;
  /**  Customer reference of the return order. This links the customer to return order */
  customer: CustomerKey;
  /**  The default Tax Type for this return order. Individual return order items can override */
  defaultTaxType: TaxTypeInput;
  /**  The destination of the return order items */
  destinationLocation?: LocationLinkInput;
  /**  The associated exchange order managed the exchange item */
  exchangeOrder?: OrderLinkInput;
  /**  The lodged location in cases where the return order was directly returned to a store or DC */
  lodgedLocation?: LocationLinkInput;
  /**  Linked order for this return order */
  order?: OrderLinkInput;
  /**  The pickup address in the cases of return orders that are being picked up by a carrier */
  pickupAddress?: StreetAddressInput;
  /**
   *  External reference of the return order. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Retailer reference of return orders */
  retailer: RetailerId;
  /**  The authorised disposition for this return order. This can be different to the return disposition action which reflects the actual action once an item has been inspected */
  returnAuthorisationDisposition?: SettingValueTypeInput;
  /**  The generated key representing an authorised return order which the customer can use to progress through the return order proces */
  returnAuthorisationKey?: string;
  /**  The time at which the return authorisation expires */
  returnAuthorisationKeyExpiry?: string;
  /**  The list of associated return order items */
  returnOrderItems: CreateReturnOrderItemWithReturnOrderInput[];
  /**  List of return verifications associated with the return order */
  returnVerifications?: CreateReturnVerificationWithReturnOrderInput[];
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
  type: string;
};

/**  Input type to create return order items when creating a return order */
export type CreateReturnOrderItemWithReturnOrderInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**  Item total amount of returning item */
  itemAmount: AmountTypeInput;
  /**  Item tax amount of the returning item */
  itemTaxAmount: AmountTypeInput;
  /**  Order item of return order item. This field is optional */
  orderItem?: OrderItemLinkInput;
  /**  Product reference of return order item */
  product: ProductKey;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  The condition in which the return item was received */
  returnCondition?: SettingValueTypeInput;
  /**  An optional comment. Required if the condition code required further information such as 'Other'. */
  returnConditionComment?: string;
  /**  The actual disposition action taken for this return item */
  returnDispositionAction?: SettingValueTypeInput;
  /**  The actual payment action taken for this return item */
  returnPaymentAction?: SettingValueTypeInput;
  /**  Reason for returning the item */
  returnReason?: SettingValueTypeInput;
  /**  Additional comments related to the returning item */
  returnReasonComment?: string;
  /**
   *  Type. <br/>
   *  Max character limit: 50.
   */
  type: string;
  /**  Unit price of the returning item */
  unitAmount: AmountTypeInput;
  /**  Return quantity */
  unitQuantity: QuantityTypeInput;
  /**  Unit tax type of the retuning item */
  unitTaxType?: TaxTypeInput;
};

export type CreateReturnVerificationWithReturnOrderInput = {
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /** Type */
  type: string;
  /** verification details */
  verificationDetails: string;
};

/**  Input type to create return order items */
export type CreateReturnOrderItemInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
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
  ref: string;
  /**  The condition in which the return item was received */
  returnCondition?: SettingValueTypeInput;
  /**  An optional comment. Required if the condition code required further information such as 'Other' */
  returnConditionComment?: string;
  /**  The actual disposition action taken for this return item */
  returnDispositionAction?: SettingValueTypeInput;
  /**  Return order reference */
  returnOrder: ReturnOrderKey;
  /**  The actual payment action taken for this return item */
  returnPaymentAction?: SettingValueTypeInput;
  /**  Reason for returning the item */
  returnReason?: SettingValueTypeInput;
  /**  Additional comments related to the returning item */
  returnReasonComment?: string;
  /**
   *  Status of the return order item. <br/>
   *  Max character limit: 50.
   */
  status: string;
  /**
   *  Type. <br/>
   *  Max character limit: 50.
   */
  type: string;
  /**  Unit price of the returning item */
  unitAmount: AmountTypeInput;
  /**  Return quantity */
  unitQuantity: QuantityTypeInput;
  /**  Unit tax type of the retuning item */
  unitTaxType?: TaxTypeInput;
};

/**  Input type to create a `Role` */
export type CreateRoleInput = {
  /**  Name of the role. Must be unique. */
  name: string;
  /**  A list of permissions to be assigned to the role */
  permissions?: PermissionKey[];
};

/**  Input type to uniquely identify a `Permission` object. We use all the fields present in the request to look for this object. */
export type PermissionKey = {
  /**  Name of the permission */
  name: string;
};

/**
 *  Input type to create a `Setting`
 *  <br/><br/>**USAGE**<br/>
 *  Use a unique combination of `context` and `contextId` to create settings for various contexts.
 *  Not using a unique combination of those two will result in a _ConstraintViolationException_.
 */
export type CreateSettingInput = {
  /**  The context of the setting. Supported values are ACCOUNT, RETAILER, AGENT or CUSTOMER */
  context: string;
  /**  `ID` of the context type. For instance, use a retailer's ID when using _RETAILER_ context. */
  contextId: number;
  /**  Value of the setting. Use this if the value is a JSON. */
  lobValue?: any;
  /**  Name of the setting */
  name: string;
  /**  Value of the setting. Use this if the value is NOT a JSON. */
  value?: string;
  /**  Data type of the setting's value. Supported types are _LOB_, _STRING_, _INTEGER_, _BOOLEAN_ and _JSON_. */
  valueType: string;
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
  attributes?: AttributeInput[];
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogueKey;
  /**  A list of references to the `Category`'s to which this `Product` relates. Product categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The `Category` must already exist. */
  categories?: CategoryKey[];
  /**
   *  The Global Trade Item Number (GTIN) for this Product. <br/>
   *  Max character limit: 20.
   */
  gtin: string;
  /**  The name of the Product */
  name: string;
  /**  A list of Prices for this Product */
  prices?: PriceInput[];
  /**
   *  The unique reference identifier for the Product. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  A short description of the Product (max 255 chars) */
  summary?: string;
  /**  The tax information for this Product */
  taxType?: TaxTypeInput;
  /**
   *  Type of the `StandardProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
  /**  A list of references to the `VariantProduct`'s to which this `Product` relates. Product variants must be a part of the same `ProductCatalogue` (see `catalogue` field). The `VariantProduct` must already exist. */
  variants?: VariantProductKey[];
};

/**  The `VariantProductKey` input is the parameter for identifying a specific Variant Product. */
export type VariantProductKey = {
  /**  The Product Catalogue in which this Product resides */
  catalogue: ProductCatalogueKey;
  /**  Max character limit: 100. */
  ref?: string;
};

export type CreateStorageAreaInput = {
  attributes?: AttributeInput[];
  location: LocationId;
  ref: string;
  /**  Max character limit: 50. */
  type?: string;
};

/**  Creates a new `User` */
export type CreateUserInput = {
  /**
   *  API Key. To be used with the Fluent Widget. <br/>
   *  Max character limit: 128.
   */
  apiKey?: string;
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**
   *  Country. <br/>
   *  Max character limit: 100.
   */
  country?: string;
  /**  Department */
  department?: string;
  /**
   *  User's first name. <br/>
   *  Max character limit: 50.
   */
  firstName: string;
  /**  User language (leave null to allow users to self-select their language preference) */
  language?: SettingValueTypeInput;
  /**
   *  User's last name. <br/>
   *  Max character limit: 50.
   */
  lastName?: string;
  /**
   *  Password. # **Note** <br /><br />
   *  Please note that password once created can not be retrieved via the API at the moment. We are working on a security model that will enable password viewing to
   *  authenticated customers but until then, we request you to remember the password you created the `User` with. <br/>
   *  Max character limit: 128.
   */
  password: string;
  /**
   *  User's primary email. <br/>
   *  Max character limit: 250.
   */
  primaryEmail: string;
  /**  User's location context */
  primaryLocation?: LocationId;
  /**
   *  User's primary phone number. <br/>
   *  Max character limit: 20.
   */
  primaryPhone?: string;
  /**  User's retailer context */
  primaryRetailer?: RetailerId;
  /**  Determines if the user has opted to receive promotions */
  promotionOptIn?: boolean;
  /**
   *  External reference of the object. Recommended to be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  A list of roles along with their contexts which are to be assigned to the user. */
  roles?: UserRoleInput[];
  /**
   *  Timezone. <br/>
   *  Max character limit: 32.
   */
  timezone: string;
  /**
   *  The user's title. For example _Mr._, _Miss_, _Dr._, _Ms._ etc <br/>
   *  Max character limit: 50.
   */
  title?: string;
  /**  Type of the user. This type is currently supports one of the following three values: _ADMIN_, _RETAILER_, _LOCATION_ */
  type: string;
  /**
   *  Unique name for the user used for identification and logging purposes. <br/>
   *  Max character limit: 250.
   */
  username: string;
};

/**  Input type to assign a `Role` with it's context to the `User` object */
export type UserRoleInput = {
  /**  Context for the role being assigned */
  contexts: RoleContextInput[];
  /**  Input to identify the role to be assigned */
  role: RoleKey;
};

/**  Input type to supply context during assignment of a role */
export type RoleContextInput = {
  /**  Represents the identity of the context object. */
  contextId: string;
  /**
   *  Represents the type of context. For more information on contexts and how they relate to user and roles,
   *  please visit <a href="https://lingo.fluentretail.com/display/LIN/Flex+Academy+Users" target="_blank">User's section on Lingo</a>.
   */
  contextType: string;
};

/**  Input type to uniquely identify a `Role` object. We use all the fields present in the request to look for this object. */
export type RoleKey = {
  /**  Name of the role which is unique and acts as a key to identify the role itself */
  name: string;
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
  attributes?: AttributeInput[];
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogueKey;
  /**  A list of references to the `Category`'s to which this `Product` relates. Product categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The `Category` must already exist. */
  categories?: CategoryKey[];
  /**
   *  The Global Trade Item Number (GTIN) for this Product. <br/>
   *  Max character limit: 20.
   */
  gtin: string;
  /**  The name of the Product */
  name: string;
  /**  A list of Prices for this Product */
  prices?: PriceInput[];
  /**  Associated base 'Product' of this variant */
  product?: ProductKey;
  /**
   *  The unique reference identifier for the Product. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  A short description of the Product (max 255 chars) */
  summary?: string;
  /**  The tax information for this Product */
  taxType?: TaxTypeInput;
  /**
   *  Type of the `VariantProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
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
  attributes?: AttributeInput[];
  /**  Control group Ref */
  controlGroupRef?: string;
  /**  Description */
  description?: string;
  /**  Inventory Catalogue used for this virtual catalogue */
  inventoryCatalogueRef: string;
  /**  Name of the inventory catalogue */
  name: string;
  /**  Networks used for this catalogue */
  networkIds?: string[];
  /**  Product Catalogue used for this virtual catalogue */
  productCatalogueRef: string;
  /**
   *  The reference identifier used to identify an entity. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Retailer refs */
  retailerRefs?: string[];
  /**
   *  Type of the `VirtualCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
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
  attributes?: AttributeInput[];
  /**  Catalogue */
  catalogue: VirtualCatalogueKey;
  /**  Group Reference */
  groupRef?: string;
  /**  Product Reference */
  productRef?: string;
  /**  Quantity */
  quantity: number;
  /**
   *  The reference identifier used to identify an entity. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  Type of the `VirtualPosition`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type: string;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type to create a `VirtualView`
 */
export type CreateVirtualViewInput = {
  /**  Description */
  description?: string;
  /**  `InventoryCatalogue` associated with the Virtual View. */
  inventoryCatalogueKey: InventoryCatalogueKey;
  /**  Creates inventory controls as a decision table and associate it with this Virtual View. */
  inventoryControls: CreateDecisionTableInput;
  /**  Name */
  name: string;
  /**  `Network` associated with the Virtual View. */
  networkKey: NetworkKey;
  /**  `ProductCatalogue` associated with the Virtual View. */
  productCatalogueKey: ProductCatalogueKey;
  /**  A unique reference for the Virtual View. Note: Virtual View refs do not support the hash (#) character. */
  ref: string;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type for creating a new decision table
 */
export type CreateDecisionTableInput = {
  /**  Description of the decision table. */
  description?: string;
  /**  Name of the table. Please provide a name that will help in identifying the decision table. */
  name: string;
  /**  A connection of `DecisionRule`s. A decision rule is a set of conditions with the corresponding actions. The actions are performed if the conditions evaluate to true.So rules can be created in a single mutation while creating the table. But they can be added later too. */
  rules?: CreateDecisionRuleWithDecisionTableInput[];
};

/**  Input type to uniquely identify a `Network` object. We use all the fields present in the request to look for this object. */
export type NetworkKey = {
  /**  ID of the object */
  id?: string;
  /**  The client's reference identifier for the object */
  ref?: string;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Output for create Virtual View mutation
 */
export type CreateVirtualViewOutput = {
  __typename?: 'CreateVirtualViewOutput';
  /**  Current status of the Virtual View */
  status?: VirtualViewStatus;
};

/**  Input type to create a `Wave` */
export type CreateWaveInput = {
  /**  `User` who this wave is assigned to */
  allocatedTo?: UserId;
  /**  A list of attributes associated with this wave. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**  `Fulfilment`s associated with this wave */
  fulfilments: FulfilmentId[];
  /**  `Location` of the wave operation */
  location: LocationId;
  /**  Name of the wave */
  name?: string;
  /**  External reference of the object. Must be unique. */
  ref: string;
  /**  `Retailer` of the wave */
  retailer: RetailerId;
  /**  Type of the `Wave`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type: string;
};

export type UserId = {
  /**  ID of the object */
  id: string;
};

/**  Input type to remove one or more `Category`s from a `GroupProduct` */
export type RemoveCategoriesFromGroupProductInput = {
  /**  Key to identify the `Category` objects to remove */
  categories: CategoryKey[];
  /**  Key to identify the `GroupProduct` object from which to remove the `Category`s */
  groupProduct: GroupProductKey;
};

/**  The `GroupProductKey` input is the parameter for identifying a specific Group Product. */
export type GroupProductKey = {
  /**  The Product Catalogue in which this Product resides */
  catalogue: ProductCatalogueKey;
  /**  Max character limit: 100. */
  ref?: string;
};

/**  Output type for removing `Category`s from a `GroupProduct` */
export type RemoveCategoriesFromGroupProductOutput = {
  __typename?: 'RemoveCategoriesFromGroupProductOutput';
  /**  Status of the mutation operation */
  status?: string;
};

/**  Input type to remove one or more `Category`s from a `StandardProduct` */
export type RemoveCategoriesFromStandardProductInput = {
  /**  Key to identify the `Category` objects to remove */
  categories: CategoryKey[];
  /**  Key to identify the `StandardProduct` object from which to remove the `Category`s */
  standardProduct: StandardProductKey;
};

/**  The `StandardProductKey` input is the parameter for identifying a specific Standard Product. */
export type StandardProductKey = {
  /**  The Product Catalogue in which this Product resides */
  catalogue: ProductCatalogueKey;
  /**  Max character limit: 100. */
  ref?: string;
};

/**  Output type for removing `Category`s from a `StandardProduct` */
export type RemoveCategoriesFromStandardProductOutput = {
  __typename?: 'RemoveCategoriesFromStandardProductOutput';
  /**  Status of the mutation operation */
  status?: string;
};

/**  Input type to remove one or more `Category`s from a `VariantProduct` */
export type RemoveCategoriesFromVariantProductInput = {
  /**  Key to identify the `Category` objects to remove */
  categories: CategoryKey[];
  /**  Key to identify the `VariantProduct` object from which to remove the `Category`s */
  variantProduct: VariantProductKey;
};

/**  Output type for removing `Category`s from a `VariantProduct` */
export type RemoveCategoriesFromVariantProductOutput = {
  __typename?: 'RemoveCategoriesFromVariantProductOutput';
  /**  Status of the mutation operation */
  status?: string;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Input type to remove the decision rule
 */
export type RemoveDecisionRuleInput = {
  /**  ID of the rule that is to be removed */
  decisionRuleId: string;
};

/**
 *  _Disclaimer:  This type is in closed Beta and relates to an upcoming feature Virtual Views which will be released later this year. Should you wish to get early access, please contact your account manager_<br/><br/>
 *  Output type of the `removeDecisionRule` mutation
 */
export type RemoveDecisionRuleOutput = {
  __typename?: 'RemoveDecisionRuleOutput';
  /**  Status of the mutation operation */
  status?: string;
};

/**  Input type to remove one or more `Location`s from a `Network` */
export type RemoveLocationsFromNetworkInput = {
  /**  Key to identify the `Location` objects to remove */
  locations: LocationKey[];
  /**  Key to identify the `Network` object from which to remove the `Location`s */
  network: NetworkKey;
};

/**  Output type for removing `Location`s from a `Network` */
export type RemoveLocationsFromNetworkOutput = {
  __typename?: 'RemoveLocationsFromNetworkOutput';
  /**  Status of the mutation operation */
  status?: string;
};

/**  Input type to remove one or more `Network`s from a `Location` */
export type RemoveNetworksFromLocationInput = {
  /**  Key to identify the `Location` object from which to remove the `Network`s */
  location: LocationKey;
  /**  Key to identify the `Network` objects to remove */
  networks: NetworkKey[];
};

/**  Output type for removing `Network`s from a `Location` */
export type RemoveNetworksFromLocationOutput = {
  __typename?: 'RemoveNetworksFromLocationOutput';
  /**  Status of the mutation operation */
  status?: string;
};

/**  Input type to remove one or more `Permission`s from a `Role` */
export type RemovePermissionsFromRoleInput = {
  /**  Key to identify the `Permission` objects to remove */
  permissions: PermissionKey[];
  /**  Key to identify the `Role` object from which to remove the `Permission`s */
  role: RoleKey;
};

/**  Output type for removing `Permission`s from a `Role` */
export type RemovePermissionsFromRoleOutput = {
  __typename?: 'RemovePermissionsFromRoleOutput';
  /**  Status of the mutation operation */
  status?: string;
};

/**  Input type to remove one or more `UserRole`s from an `User` */
export type RemoveUserRolesFromUserInput = {
  /**  Key to identify the `UserRole` objects to remove */
  roles: UserRoleKey[];
  /**  Key to identify the `User` object from which to remove the `UserRole`s */
  user: UserKey;
};

/**  Input type to uniquely identify an `UserRole` object. We use all the fields present in the request to look for this object. */
export type UserRoleKey = {
  /**  Key to identify the `RoleContext` objects to remove */
  contexts: RoleContextKey[];
  /**  Key to identify the `Role` object from which to remove the `RoleContext` */
  role: RoleKey;
};

/**  Input type to uniquely identify a `RoleContext` object. We use all the fields present in the request to look for this object. */
export type RoleContextKey = {
  /**  Represents the identity of the context object. */
  contextId: string;
  /**  Represents the type of context. For more information on contexts and how they relate to user and roles, please visit <a href="https://lingo.fluentretail.com/display/LIN/Flex+Academy+Users" target="_blank">User's section on Lingo</a>. */
  contextType: string;
};

/**  Input type to uniquely identify an `User` object. We use all the fields present in the request to look for this object. */
export type UserKey = {
  /**  ID of the object */
  id?: string;
  /**  Unique name for the user used for identification and logging purposes. */
  username?: string;
};

/**  Output type for removing `UserRole`s from an `User` */
export type RemoveUserRolesFromUserOutput = {
  __typename?: 'RemoveUserRolesFromUserOutput';
  /**  Status of the mutation operation */
  status?: string;
};

export type UpdateArticleInput = {
  /**  Max character limit: 30. */
  articleNumber?: string;
  attributes?: AttributeInput[];
  /**  Max character limit: 50. */
  barcodeArticleNumber?: string;
  /**  Max character limit: 256. */
  description?: string;
  expiryDate?: string;
  height?: number;
  /**  ID of the object */
  id: string;
  items?: UpdateArticleItemWithArticleInput[];
  length?: number;
  /**  Max character limit: 256. */
  name?: string;
  /**  Max character limit: 100. */
  purchaseValue?: string;
  quantity?: number;
  /**
   *  The current status of the `Article`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 30.
   */
  status?: string;
  /**
   *  Type of the `Article`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
  weight?: number;
  width?: number;
};

/** ArticleItem */
export type UpdateArticleItemWithArticleInput = {
  barcode?: string;
  id: string;
  orderItem?: OrderItemId;
  quantity?: number;
};

export type UpdateBillingAccountInput = {
  /**  Address associated to the `BillingAccount`. */
  address?: StreetAddressInput;
  /**  A list of attributes associated with the `BillingAccount`. This can be used to extend the existing data structure with additional data. */
  attributes?: AttributeInput[];
  /**
   *  Name of the `BillingAccount`. <br/>
   *  Max character limit: 100.
   */
  name?: string;
  /**
   *  External reference to the `BillingAccount`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  Status of the `BillingAccount`. <br/>
   *  Max character limit: 50.
   */
  status?: string;
};

/**  Input type to update a `Carrier` */
export type UpdateCarrierInput = {
  /**  A list of attributes associated with this Carrier. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**  ID of the object */
  id: string;
  /**
   *  Name of the carrier. <br/>
   *  Max character limit: 45.
   */
  name?: string;
  /**
   *  The current status of the `Carrier`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
};

/**  Input for updating a `CarrierConsignment` object. */
export type UpdateCarrierConsignmentInput = {
  /**  A list of attributes associated with this Consignment. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**
   *  The external consignment reference assigned by the carrier. <br/>
   *  Max character limit: 100.
   */
  consignmentReference?: string;
  /**  The URL used to retrieve the shipping label */
  labelUrl?: string;
  /**  A url to represent the order summary. Usually the manifest url from the service provider. */
  orderSummaryUrl?: string;
  /**  ref of the object */
  ref: string;
  /**
   *  The status of the consignment. <br/>
   *  Max character limit: 25.
   */
  status?: string;
  /**
   *  Tracking label of the consignment. <br/>
   *  Max character limit: 100.
   */
  trackingLabel?: string;
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
  attributes?: AttributeInput[];
  /**  The reference of the `ProductCatalogue` in which this `Category` resides. */
  catalogue: ProductCatalogueKey;
  /**  List of child `Category` references, if any. Child categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The child `Category` must already exist. */
  childCategories?: CategoryKey[];
  /**  The name of the Category */
  name?: string;
  /**
   *  The reference to the parent of this `Category`, if any. The parent `Category` must be a part of the same `ProductCatalogue` (see `catalogue` field). The parent `Category` must already exist. <br/>
   *  Max character limit: 36.
   */
  parentCategory?: CategoryKey;
  /**
   *  The reference of the `Category` to be updated. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The current status of the `Category`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**  A short description of the Category */
  summary?: string;
  /**
   *  Type of the `Category`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
};

/**  Input for updating an existing `comment` object */
export type UpdateCommentInput = {
  /**  ID of the object */
  id: string;
  /**
   *  Comment text. <br/>
   *  Max character limit: 200.
   */
  text: string;
};

/**  Input for updating a `Consignment` object. */
export type UpdateConsignmentInput = {
  /**  Carrier used for the consignment */
  carrier?: CarrierId;
  /**
   *  The external consignment reference assigned by the carrier. <br/>
   *  Max character limit: 100.
   */
  consignmentReference?: string;
  /**  ID of the object */
  id: string;
  /**  The URL used to retrieve the shipping label */
  labelUrl?: string;
  /**  A url to represent the order summary. Usually the manifest url from the service provider. */
  orderSummaryUrl?: string;
  /**
   *  The status of the consignment. <br/>
   *  Max character limit: 25.
   */
  status?: string;
  /**
   *  Tracking label of the consignment. <br/>
   *  Max character limit: 100.
   */
  trackingLabel?: string;
};

/**
 *  Input parameter for the `updateControl` mutation. A control `ref` should be unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `catalogue control` record. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  For more information, please refer to the https://lingo.fluentretail.com/display/LIN/Global+Inventory
 */
export type UpdateControlInput = {
  /**  List of Attribute containing meta data information for this entity */
  attributes?: AttributeInput[];
  /**  Control Group */
  controlGroup?: ControlGroupKey;
  /**  Description */
  description?: string;
  /**  Order that this control is applied */
  executionOrder?: number;
  /**  Name */
  name?: string;
  /**
   *  The reference identifier used to identify an entity. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The current status of the `Control`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**
   *  Type of the `Control`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
  /**  values */
  values?: AttributeInput[];
};

/**
 *  Input parameter for the `updateControlGroup` mutation. The `ref` field is the unique identifier for the catalogue you wish to update. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  For more information, please refer to the https://lingo.fluentretail.com/display/LIN/Global+Inventory
 */
export type UpdateControlGroupInput = {
  /**  List of Attribute containing meta data information for this entity */
  attributes?: AttributeInput[];
  /**  Description */
  description?: string;
  /**  Name */
  name?: string;
  /**
   *  The reference identifier used to identify an entity. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Retailer refs */
  retailerRefs?: string[];
  /**
   *  The current status of the `ControlGroup`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**
   *  Type of the `ControlGroup`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
};

export type UpdateCreditMemoInput = {
  /**  A list of attributes associated with the `CreditMemo`. This can be used to extend the existing data structure with additional data. */
  attributes?: AttributeInput[];
  /**  Reference to the `Currency` */
  currency?: CurrencyKey;
  /**  The default Tax Type for this credit memo. Individual credit memo items can override. */
  defaultTaxType?: TaxTypeInput;
  /**  Issue date */
  issueDate?: string;
  /**  The `CreditMemoItem`s associated with this `CreditMemo`. */
  items?: UpdateCreditMemoItemWithCreditMemoInput[];
  /**  Reference to an `Order` associated with the `CreditMemo`. */
  order?: OrderLinkInput;
  /**
   *  External reference to the `CreditMemo`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Reference to a `ReturnOrder` associated with the `CreditMemo`. */
  returnOrder?: ReturnOrderKey;
  /**
   *  Status of the `CreditMemo`. <br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**  The total amount of this credit memo excluding tax. */
  subTotalAmount?: AmountTypeInput;
  /**  The total amount of this credit memo including tax */
  totalAmount?: AmountTypeInput;
  /**  The total amount of this credit memo yet to be paid. (This caters for multi-part payments and payment milestones) */
  totalBalance?: AmountTypeInput;
  /**  The total amount of tax for this credit memo */
  totalTax?: AmountTypeInput;
};

export type UpdateCreditMemoItemWithCreditMemoInput = {
  /**  The item amount for this item excluding tax. This is a calculated value based on business rules that does not necessarily have to take into account the unit quantity or amounts. */
  amount?: AmountTypeInput;
  /**  Credit reason code of the `CreditMemoItem`. */
  creditReasonCode?: SettingValueTypeInput;
  /**  Description of the `CreditMemoItem`. */
  description?: string;
  /**  Reference to an `OrderItem` associated with the `CreditMemoItem`. */
  orderItem?: OrderItemLinkInput;
  /**  Reference to a `Product` associated with the `CreditMemoItem`. */
  product?: ProductKey;
  /**
   *  External reference to the `CreditMemoItem`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref?: string;
  /**  Reference to a `ReturnOrderItem` associated with the `CreditMemoItem`. */
  returnOrderItem?: ReturnOrderItemKey;
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount?: AmountTypeInput;
  /**  The unit sale price at time of sale or exchange */
  unitAmount?: AmountTypeInput;
  /**  The unit cost price at time of sale or exchange. */
  unitCostAmount?: AmountTypeInput;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity?: QuantityTypeInput;
  /**  The tax type of this item. Should only be provided if different to the default credit memo tax type. */
  unitTaxType?: TaxTypeInput;
};

/** Input type to update a `Customer`. */
export type UpdateCustomerInput = {
  /**  List of new attributes or updates to existing attributes. */
  attributes?: AttributeInput[];
  /**
   *  Customer's Country
   *  Max character limit: 100.
   */
  country?: string;
  /**
   *  Firstname of the customer.
   *  Max character limit: 50.
   */
  firstName?: string;
  /**
   *  Lastname of the customer.
   *  Max character limit: 50.
   */
  lastName?: string;
  /**
   *  Email of the customer
   *  Max character limit: 250.
   */
  primaryEmail?: string;
  /**
   *  Phone number of the customer.
   *  Max character limit: 20.
   */
  primaryPhone?: string;
  /**  Specifies whether the customer has opted-in to receive promotions */
  promotionOptIn?: boolean;
  /**
   *  Customer's timezone
   *  Max character limit: 32.
   */
  timezone?: string;
  /**
   *  Customer's title.
   *  Max character limit: 50.
   */
  title?: string;
  /**
   *  The username of the customer. This value is used to identify the customer to update.
   *  Max character limit: 250.
   */
  username: string;
};

export type UpdateCustomerAddressInput = {
  /**  Max character limit: 255. */
  city?: string;
  /**  Max character limit: 255. */
  companyName?: string;
  /**  Max character limit: 100. */
  country?: string;
  /**  Max character limit: 255. */
  email?: string;
  /**  ID of the object */
  id: string;
  latitude?: number;
  longitude?: number;
  name?: string;
  /**  Max character limit: 100. */
  postcode?: string;
  /**  Max character limit: 250. */
  region?: string;
  /**  Max character limit: 200. */
  state?: string;
  /**  Max character limit: 255. */
  street?: string;
  /**  Max character limit: 255. */
  street2?: string;
  /**  Max character limit: 32. */
  timeZone?: string;
};

/**  Input type to update a `Fulfilment` */
export type UpdateFulfilmentInput = {
  /**  List of fulfilment `attribute`s */
  attributes?: AttributeInput[];
  /**  Type of delivery. Supported values are _STANDARD_, _OVERNIGHT_ and _EXPRESS_. */
  deliveryType?: string;
  /**  Estimated time of completing this fulfilment */
  eta?: string;
  /**  Expiry time of the fulfilment */
  expiryTime?: string;
  /**  ID of the object */
  id: string;
  /**  List of `FulfilmentItem`s */
  items?: UpdateFulfilmentItemWithFulfilmentInput[];
  /**  The current status of the `Fulfilment`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**
   *  Type of the `Fulfilment`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the Fulfilment. Supports all values.
   */
  type?: string;
};

/**  Input type to update a Fulfilment */
export type UpdateFulfilmentItemWithFulfilmentInput = {
  /**  Number of `OrderItem`s confirmed */
  filledQuantity?: number;
  /**  ID of the object */
  id: string;
  /**  Number of `OrderItem`s rejected */
  rejectedQuantity?: number;
  /**  Number of `OrderItem`s assigned to the fulfilment */
  requestedQuantity?: number;
  /**  Status. Supported value is _DELETED_. */
  status?: string;
};

export type UpdateFulfilmentChoiceInput = {
  /**  List of Attribute containing meta data information for an entity. */
  attributes?: AttributeInput[];
  /**  The type of currency, 3 letter ISO currency code. */
  currency?: string;
  /**  Time of delivery selected by the customer at the time of order creation, specifies Deliver On date/time the customer will receive the order (package). */
  deliverAfter?: string;
  /**  Time of delivery selected by the customer at the time of order creation, specifies Deliver Till date/time the customer will receive the order (package). */
  deliverBefore?: string;
  /**  Delivery address. Required if it is a home delivery. */
  deliveryAddress?: AddressId;
  /**  Mobile number of delivery recipient. */
  deliveryContact?: string;
  /**  Email address to which e-delivery is made. */
  deliveryEmail?: string;
  /**  First Name of delivery recipient. */
  deliveryFirstName?: string;
  /**  Instruction provided by the customer (250 character limit). */
  deliveryInstruction?: string;
  /**  Last Name of delivery recipient. */
  deliveryLastName?: string;
  /**  The type of delivery determined by retailers' shipping options. Example values are STANDARD, EXPRESS, OVERNIGHT, 3HOURS */
  deliveryType?: string;
  /**  Time that indicates date of dispatch */
  dispatchOn?: string;
  /**  FulfilmentPrice refers to shipping and C&C fees. */
  fulfilmentPrice?: number;
  /**  This refers to the tax cost associated with the fulfilment price. */
  fulfilmentTaxPrice?: number;
  /**  Indicates the type of fulfilment. */
  fulfilmentType?: string;
  /**  ID of the object */
  id: string;
  /**  Pickup location. Required if it is a click & collect. */
  pickupLocationRef?: string;
  /**  External reference of the object. Recommended to be unique. */
  ref?: string;
  /**
   *  The current status of the `FulfilmentChoice`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  The current status of the Fulfilment choice.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see Orchestration.
   */
  status?: string;
  /**
   *  Type of the `FulfilmentChoice`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Type of the Fulfilment choice. Currently supports all values.
   */
  type?: string;
};

/**  Input type to update a `FulfilmentOption` object. */
export type UpdateFulfilmentOptionInput = {
  /**  A list of attributes associated with this object. This can be used to extend an existing object with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**  ID of the object. If provided, will be used to identify the object. */
  id: string;
  /**  External reference. If provided, will be used to identify the object. */
  ref?: string;
  /**  The current status of the `FulfilmentOption`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  A unique identifier for the clients to group related Fulfilment Plans. */
  trackingCode?: string;
};

/**  Input type to update a `FulfilmentPlan` object. */
export type UpdateFulfilmentPlanInput = {
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**  ETA of the `FulfilmentPlan`. Although this can be set explicitly, we recommend that this be determined and set in the workflow. */
  eta?: string;
  /**
   *  A list of exceptions.
   *  **Note** <br /><br />
   *  This will always be an append operation. Existing exceptions can not be modified but new ones can be added.
   */
  exceptions?: CreateFulfilmentPlanExceptionInput[];
  /**  ID of the object */
  id: string;
  /**  External reference. Recommended to be unique. */
  ref?: string;
  /**  The current status of the `FulfilmentPlan`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
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
  attributes?: AttributeInput[];
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogueKey;
  /**  A list of references to the `Category`'s to which this `Product` relates. Product categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The `Category` must already exist. */
  categories?: CategoryKey[];
  /**  The name of the Product */
  name?: string;
  /**  A list of Prices for this Product */
  prices?: PriceInput[];
  /**  A list of Products within the group */
  products?: ProductKey[];
  /**
   *  The unique reference identifier for the Product. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The current status of the `GroupProduct`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**  A short description of the Product (max 255 chars) */
  summary?: string;
  /**  The tax information for this Product */
  taxType?: TaxTypeInput;
  /**
   *  Type of the `GroupProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
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
  attributes?: AttributeInput[];
  /**  A short description of the Inventory Catalogue */
  description?: string;
  /**  The name of the Inventory Catalogue */
  name?: string;
  /**
   *  The unique reference identifier for the Inventory Catalogue. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  A list of Retailer references associated with this Inventory Catalogue */
  retailerRefs?: string[];
  /**
   *  The current status of the `InventoryCatalogue`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**
   *  Type of the `InventoryCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
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
  attributes?: AttributeInput[];
  /**  The Inventory Catalogue in which this Position is managed */
  catalogue: InventoryCatalogueKey;
  /**  A reference identifying the Location where this inventory exists. This is a loosely coupled association. */
  locationRef?: string;
  /**  The calculated on hand quantity based on the associated quantities, and rules in the orchestration workflow */
  onHand?: number;
  /**  A reference identifying a Product. The referenced product may or may not exist within one or more Product Catalogues. This is a loosely coupled association, since Product and Inventory are separate domains. */
  productRef?: string;
  /**  A list of Inventory Quantities associated with this Position */
  quantities?: InventoryQuantityKey[];
  /**
   *  The unique reference identifier for the Inventory Position. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The current status of the `InventoryPosition`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**
   *  Type of the `InventoryPosition`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
};

/**  Input for filtering out a subset of Inventory Positions */
export type InventoryPositionsLocationFilterInput = {
  /**  Inventory Catalogue reference identifier */
  catalogue: InventoryCatalogueKey;
  /**  Location reference identifier */
  locationRef: string;
};

/**  Input for updating the status of any entity with a status field */
export type StatusInput = {
  /**  Status value used for the input */
  status: string;
};

/**  Output type for bulk updating entity statuses */
export type UpdateStatusOutput = {
  __typename?: 'UpdateStatusOutput';
  /**  Returns the count of data entries that were updated. Count >= 0 implies the query executed successfully */
  count?: number;
};

/**  Input for filtering out a subset of Inventory Quantities */
export type InventoryQuantityFilterInput = {
  /**  Inventory quantity expected on date */
  expectedOn?: DateRange;
  /**  Inventory Position reference identifier */
  position: InventoryPositionKey;
  /**  Inventory quantity status */
  status?: string[];
  /**  Inventory quantity type */
  type?: string[];
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
  attributes?: AttributeInput[];
  /**  The Inventory Catalogue in which this Position is managed */
  catalogue: InventoryCatalogueKey;
  /**  The condition of the Inventory Quantity value. The platform does not enforce any values here. Examples could include `NEW`, `USED`, or `DAMAGED` */
  condition?: string;
  /**  The date and time the quantity is expected to arrive */
  expectedOn?: string;
  /**  The actual amount of this specific Quantity record */
  quantity?: number;
  /**
   *  The unique reference identifier for the Inventory Quantity. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The current status of the `InventoryQuantity`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**
   *  A reference to the Storage Area where this inventory is kept. <br/>
   *  Max character limit: 100.
   */
  storageAreaRef?: string;
  /**
   *  Type of the `InventoryQuantity`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
};

/**  `UpdateInvoiceInput` */
export type UpdateInvoiceInput = {
  /**  A list of attributes associated with the `Invoice`. This can be used to extend the existing data structure with additional data. */
  attributes?: AttributeInput[];
  /**  Reference to the `Currency` */
  currency?: CurrencyKey;
  /**  The default Tax Type for this invoice. Individual invoice items can override. */
  defaultTaxType?: TaxTypeInput;
  /**  Due date of the `Invoice` */
  dueDate?: string;
  /**  Reference to the `Fulfilment` associated with this `Invoice`. */
  fulfilment?: FulfilmentLinkInput;
  /**  Issue date of the `Invoice` */
  issueDate?: string;
  /**  The `InvoiceItem`s associated with this `Invoice`. */
  items?: UpdateInvoiceItemWithInvoiceInput[];
  /**  Reference to the `Order` associated with this `Invoice`. */
  order?: OrderLinkInput;
  /**
   *  External reference to the `Invoice`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  Status of the `Invoice`. <br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**  The total amount of this invoice excluding tax. */
  subTotalAmount?: AmountTypeInput;
  /**  The total amount of this invoice including tax */
  totalAmount?: AmountTypeInput;
  /**  The total amount of this invoice yet to be paid. (This caters for multi-part payments and payment milestones) */
  totalBalance?: AmountTypeInput;
  /**  The total amount of tax for this invoice */
  totalTax?: AmountTypeInput;
};

/**  Input type to create an `InvoiceItem` with an `Invoice`. Intended to be used as an inline input in the createInvoice_mutation. */
export type UpdateInvoiceItemWithInvoiceInput = {
  /**  The item amount for this item excluding tax */
  amount?: AmountTypeInput;
  /**  Description of the `InvoiceItem` */
  description?: string;
  /**  Reference to the `Product` associated with this object. */
  product?: ProductKey;
  /**
   *  External reference to the `InvoiceItem`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  The tax amount for this item. If not present at the item level, tax amount should be generated based on the tax type set at the invoice parent level. */
  taxAmount?: AmountTypeInput;
  /**  The unit price of the source item. */
  unitAmount?: AmountTypeInput;
  /**  `unitQuantity` holds separately the amount and the unit associated. */
  unitQuantity?: QuantityTypeInput;
  /**  The tax type of this item. Should only be provided if different to the default invoice tax type. */
  unitTaxType?: TaxTypeInput;
};

export type UpdateLocationInput = {
  attributes?: AttributeInput[];
  /**  Max character limit: 50. */
  defaultCarrier?: string;
  /**  ID of the object */
  id: string;
  /**  Max character limit: 100. */
  name?: string;
  networks?: NetworkId[];
  openingSchedule?: UpdateOpeningScheduleInput;
  primaryAddress?: UpdateStoreAddressInput;
  retailer?: RetailerId;
  /**  Max character limit: 15. */
  status?: string;
  storageAreas?: UpdateStorageAreaWithLocationInput[];
  /**  Max character limit: 20. */
  supportPhoneNumber?: string;
  /**  Max character limit: 25. */
  type?: string;
};

export type UpdateOpeningScheduleInput = {
  allHours?: boolean;
  friEnd?: number;
  friStart?: number;
  /**  ID of the object */
  id: string;
  monEnd?: number;
  monStart?: number;
  satEnd?: number;
  satStart?: number;
  sunEnd?: number;
  sunStart?: number;
  thuEnd?: number;
  thuStart?: number;
  tueEnd?: number;
  tueStart?: number;
  wedEnd?: number;
  wedStart?: number;
};

export type UpdateStoreAddressInput = {
  /**  Max character limit: 255. */
  city?: string;
  /**  Max character limit: 255. */
  companyName?: string;
  /**  Max character limit: 100. */
  country?: string;
  /**  Max character limit: 4096. */
  directions?: string;
  /**  Max character limit: 255. */
  email?: string;
  /**  ID of the object */
  id: string;
  latitude?: number;
  longitude?: number;
  name?: string;
  /**  Max character limit: 100. */
  postcode?: string;
  /**  Max character limit: 250. */
  region?: string;
  /**  Max character limit: 200. */
  state?: string;
  /**  Max character limit: 255. */
  street?: string;
  /**  Max character limit: 255. */
  street2?: string;
  /**  Max character limit: 32. */
  timeZone?: string;
};

export type UpdateStorageAreaWithLocationInput = {
  attributes?: AttributeInput[];
  /**  ID of the object */
  id: string;
  status?: string;
  /**  Max character limit: 50. */
  type?: string;
};

export type UpdateLocationPrimaryAddressInput = {
  /**  ID of the object */
  id: string;
  /**  The ID of the StoreAddress */
  primaryAddress: BaseLocationInput;
};

export type BaseLocationInput = {
  /**  The ID of the StoreAddress */
  id: string;
};

/**  Input for the `updateManifest` mutation. */
export type UpdateManifestInput = {
  /**  A list of attributes associated with this `Manifest`. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**
   *  Reference to the `Carrier` this `Manifest` is for <br/>
   *  Max character limit: 100.
   */
  carrier?: CarrierKey;
  /**  A list of references to the `Consignment`s this `Manifest` contains. */
  carrierConsignments?: CarrierConsignmentKey[];
  /**  The link where the carrier's manifest is stored. Not all the carriers generates one, so this field is optional. */
  carrierManifestLink?: string;
  /**  The `Location` this `Manifest` is associated with */
  location?: LocationKey;
  /**  The name of this `Manifest` */
  name?: string;
  /**
   *  External reference for this `Manifest`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The status of this `Manifest`. <br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**
   *  The type of `Manifest`. <br/>
   *  Max character limit: 50.
   */
  type?: string;
};

/**  Input type to update a `Network` */
export type UpdateNetworkInput = {
  /**  List of the network's `attribute`s */
  attributes?: AttributeInput[];
  /**  ID of the object */
  id: string;
  /**  List of `location`s within this network */
  locations?: LocationId[];
  /**
   *  Name of the network. <br/>
   *  Max character limit: 100.
   */
  name?: string;
  /**  Status of the network */
  status?: string;
  /**
   *  Type of the network. For example you could use _CC_ for _Click and Collect_ or _HD_ for _Home Delivery_. These types can be defined by the user and used by the Orchestration
   *  Engine to determine the workflow that should be applied. <br/>
   *  Max character limit: 15.
   */
  type?: string;
};

/**  Input type to update an `Order` */
export type UpdateOrderInput = {
  /**  List of order's `attribute`s */
  attributes?: AttributeInput[];
  /**  ID of the `Order` */
  id: string;
  /**  List of `OrderItem`s to be updated */
  items?: UpdateOrderItemWithOrderInput[];
  /**  The current status of the `Order`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  Tax price */
  totalPrice?: number;
  /**  Total tax price */
  totalTaxPrice?: number;
};

/**
 *  Input type to update an `OrderItem` with an `Order`. Intended to be used as an inline input in the _updateOrder_ mutation.
 *  <br/><br/>**NOTE**<br/>
 *  This mutation has potential implications on existing `Order`s and their workflows. We recommend this mutation to be not used directly. It should either be called from a user
 *  action or from within a workflow.
 */
export type UpdateOrderItemWithOrderInput = {
  /**  List of `OrderItem` `attribute`s. There's expected a JSON object */
  attributes?: AttributeInput[];
  /**  Currency. Should ideally be a 3 letter ISO currency code. For instance _AUD_. */
  currency?: string;
  /**  Represents the `FulfilmentChoice` corresponding to this object */
  fulfilmentChoiceRef?: string;
  /**  ID of the `OrderItem` */
  id: string;
  /**  Price paid. Excludes tax. */
  paidPrice?: number;
  /**  Price */
  price?: number;
  /**
   *  External reference for the product catalogue containing the associated product (specified using the `productRef`in this object).
   *  When `productCatalogueRef` is not passed, the compatibility catalogue for this product is used.
   */
  productCatalogueRef?: string;
  /**  External reference for the associated product. */
  productRef?: string;
  /**  Quantity ordered */
  quantity?: number;
  /**  External reference for the object. Recommended to be unique. */
  ref?: string;
  /**  Status of the OrderItem. Currently supported values are limited to _CREATED_, _NEW_, _COMPLETE_. */
  status?: string;
  /**  Tax price */
  taxPrice?: number;
  /**  Tax type. Supported values are _GST_, _VAT_, _EXCLTAX_. */
  taxType?: string;
  /**  Total price */
  totalPrice?: number;
  /**  Total tax price */
  totalTaxPrice?: number;
};

/**  Input type to update a `Payment`. */
export type UpdatePaymentInput = {
  /**  A list of attributes associated with the `Payment`. This can be used to extend the existing data structure with additional data. */
  attributes?: AttributeInput[];
  /**  The `BillingAccount` associated with this `Payment`. */
  billingAccount?: BillingAccountKey;
  /**
   *  External reference to the `Payment`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The current status of the `Payment`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Status of the `Payment`. <br/>
   *  Max character limit: 25.
   */
  status?: string;
};

/**  Input type to update a `PaymentServiceProvider`. */
export type UpdatePaymentServiceProviderInput = {
  /**  A list of attributes associated with the `PaymentServiceProvider`. This can be used to extend the existing data structure with additional data. */
  attributes?: AttributeInput[];
  /**
   *  The ClientId of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 25.
   */
  clientId?: string;
  /**
   *  The Client Secret of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  clientSecret?: string;
  /**
   *  The host name of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  host?: string;
  /**
   *  Name of the `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  name?: string;
  /**  The port of the `PaymentServiceProvider` */
  port?: number;
  /**
   *  External reference to the `PaymentServiceProvider`. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The Authorization Key of this `PaymentServiceProvider`. <br/>
   *  Max character limit: 50.
   */
  serviceAuthToken?: string;
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
  attributes?: AttributeInput[];
  /**  A short description of the Product Catalogue */
  description?: string;
  /**  The name of the Product Catalogue */
  name?: string;
  /**
   *  The unique reference identifier for the Product Catalogue. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  A list of Retailer references associated with this Product Catalogue */
  retailerRefs?: string[];
  /**
   *  The current status of the `ProductCatalogue`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**
   *  Type of the `ProductCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
};

export type UpdateRetailerInput = {
  /**  ID of the object */
  id: string;
  /**  Max character limit: 45. */
  name?: string;
  networks?: NetworkId[];
  /**  Max character limit: 250. */
  primaryEmail?: string;
  region?: string;
  /**  Max character limit: 25. */
  status?: string;
  summary?: string;
  supportContactName?: string;
  supportEmail?: string;
  supportPhone?: string;
  tradingName?: string;
  urlName?: string;
  websiteUrl?: string;
};

/** The lodged location in cases where the return order was directly returned to a store or DC */
export type UpdateReturnFulfilmentInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /** The destination of the return order items */
  destinationLocation?: LocationLinkInput;
  /** The lodged location in cases where the return order was directly returned to a store or DC */
  lodgedLocation?: LocationLinkInput;
  /** The pickup address in the cases of return orders that are being picked up by a carrier */
  pickupAddress?: StreetAddressInput;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /** Update fulfilment items */
  returnFulfilmentItems?: UpdateReturnFulfilmentItemWithReturnFulfilmentInput[];
  /**  Return order reference related to the fulfilment */
  returnOrder: ReturnOrderKey;
  /**
   *  Status of the return fulfilment. <br/>
   *  Max character limit: 100.
   */
  status?: string;
};

/**  Input type to update return fulfilment item with return fulfilment */
export type UpdateReturnFulfilmentItemWithReturnFulfilmentInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /** Product reference of return fulfilment item */
  product?: ProductKey;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Unit quantity of return fulfilment item */
  unitQuantity?: QuantityTypeInput;
};

/**  Input type to update return order */
export type UpdateReturnOrderInput = {
  /**  A list of attributes of the return order. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**  The associated credit memo for this return order */
  creditMemo?: CreditMemoKey;
  /**  The currency of this return */
  currency?: CurrencyKey;
  /**  The default Tax Type for this return order. Individual return order items can override */
  defaultTaxType?: TaxTypeInput;
  /**  The destination of the return order items */
  destinationLocation?: LocationLinkInput;
  /**  The associated exchange order managed the exchange item */
  exchangeOrder?: OrderLinkInput;
  /**  The lodged location in cases where the return order was directly returned to a store or DC */
  lodgedLocation?: LocationLinkInput;
  /**  Customer reference of the return order. This links the customer to return order */
  order?: OrderLinkInput;
  /**  The pickup address in the cases of return orders that are being picked up by a carrier */
  pickupAddress?: StreetAddressInput;
  /**
   *  External reference of the return order. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Retailer reference of return orders */
  retailer: RetailerId;
  /**  The authorised disposition for this return order. This can be different to the return disposition action which reflects the actual action once an item has been inspected */
  returnAuthorisationDisposition?: SettingValueTypeInput;
  /**  The generated key representing an authorised return order which the customer can use to progress through the return order process */
  returnAuthorisationKey?: string;
  /**  The time at which the return authorisation expires */
  returnAuthorisationKeyExpiry?: string;
  /**  The destination of the return order items */
  returnOrderItems?: UpdateReturnOrderItemWithReturnOrderInput[];
  /**  List of return verifications associated with the return order */
  returnVerifications?: UpdateReturnVerificationWithReturnOrderInput[];
  /**
   *  Status of the return order. <br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**  The total amount of this return order excluding tax */
  subTotalAmount?: AmountTypeInput;
  /**  The total amount of this return order including tax */
  totalAmount?: AmountTypeInput;
  /**  The total amount of tax for this return order */
  totalTax?: AmountTypeInput;
};

/**  Input type to update return order item when updating the return order */
export type UpdateReturnOrderItemWithReturnOrderInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**  Item total amount of returning item */
  itemAmount?: AmountTypeInput;
  /**  Item tax amount of the returning item */
  itemTaxAmount?: AmountTypeInput;
  /**  Order item of return order item. This field is optional */
  orderItem?: OrderItemLinkInput;
  /**  Product reference of return order item */
  product?: ProductKey;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  The condition in which the return item was received */
  returnCondition?: SettingValueTypeInput;
  /**  An optional comment. Required if the condition code required further information such as 'Other'. */
  returnConditionComment?: string;
  /**  The actual disposition action taken for this return item */
  returnDispositionAction?: SettingValueTypeInput;
  /**  The actual payment action taken for this return item */
  returnPaymentAction?: SettingValueTypeInput;
  /**  Reason for returning the item */
  returnReason?: SettingValueTypeInput;
  /**  Additional comments related to the returning item */
  returnReasonComment?: string;
  /**
   *  Status or the return order item. <br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**  Unit price of the returning item */
  unitAmount?: AmountTypeInput;
  /**  Return quantity */
  unitQuantity?: QuantityTypeInput;
  /**  Unit tax type of the retuning item */
  unitTaxType?: TaxTypeInput;
};

export type UpdateReturnVerificationWithReturnOrderInput = {
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /** verification details */
  verificationDetails?: string;
};

/**  Input type to update a `Role` */
export type UpdateRoleInput = {
  /**  Name of the role. This input is used to identify the role to be updated. */
  name: string;
  /**  A list of permissions to be assigned to the role. Please note that all new permissions in the input will be added, existing ones will not be affected. */
  permissions?: PermissionKey[];
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
  context: string;
  /**  `ID` of the context type. For instance, use a retailer's ID when using _RETAILER_ context. */
  contextId: number;
  /**  ID of the object */
  id: string;
  /**  Value of the setting. Use this if the value is a JSON. */
  lobValue?: any;
  /**  Name of the setting */
  name?: string;
  /**  Value of the setting. Use this if the value is NOT a JSON. */
  value?: string;
  /**  Data type of the setting's value. Supported types are _LOB_, _STRING_, _INTEGER_, _BOOLEAN_ and _JSON_. */
  valueType: string;
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
  attributes?: AttributeInput[];
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogueKey;
  /**  A list of references to the `Category`'s to which this `Product` relates. Product categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The `Category` must already exist. */
  categories?: CategoryKey[];
  /**
   *  The Global Trade Item Number (GTIN) for this Product.<br/>
   *  Max character limit: 20.
   */
  gtin?: string;
  /**  The name of the Product */
  name?: string;
  /**  A list of Prices for this Product */
  prices?: PriceInput[];
  /**
   *  The unique reference identifier for the Product. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The current status of the `StandardProduct`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**  A short description of the Product (max 255 chars) */
  summary?: string;
  /**  The tax information for this Product */
  taxType?: TaxTypeInput;
  /**
   *  Type of the `StandardProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
  /**  A list of references to the `VariantProduct`'s to which this `Product` relates. Product variants must be a part of the same `ProductCatalogue` (see `catalogue` field). The `VariantProduct` must already exist. */
  variants?: VariantProductKey[];
};

export type UpdateStorageAreaInput = {
  attributes?: AttributeInput[];
  /**  ID of the object */
  id: string;
  status?: string;
  /**  Max character limit: 50. */
  type?: string;
};

/**  Updates an existing `User`s details */
export type UpdateUserInput = {
  /**
   *  API Key. To be used with the Fluent Widget. <br/>
   *  Max character limit: 128.
   */
  apiKey?: string;
  /**  A list of attributes associated with this object. This can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  /**
   *  Country. <br/>
   *  Max character limit: 100.
   */
  country?: string;
  /**  Department */
  department?: string;
  /**
   *  User's first name. <br/>
   *  Max character limit: 50.
   */
  firstName?: string;
  /**  ID of the object */
  id: string;
  /**  User language (leave null to allow users to self-select their language preference) */
  language?: SettingValueTypeInput;
  /**
   *  User's last name. <br/>
   *  Max character limit: 50.
   */
  lastName?: string;
  /**
   *  User Password.
   *  Max character limit: 128.
   */
  password?: string;
  /**
   *  User's primary email. <br/>
   *  Max character limit: 250.
   */
  primaryEmail?: string;
  /**  User's location context */
  primaryLocation?: LocationId;
  /**
   *  User's primary phone number. <br/>
   *  Max character limit: 20.
   */
  primaryPhone?: string;
  /**  User's retailer context */
  primaryRetailer?: RetailerId;
  /**  Determines if the user has opted to receive promotions */
  promotionOptIn?: boolean;
  /**
   *  External reference of the object. Recommended to be unique. <br/>
   *  Max character limit: 100.
   */
  ref?: string;
  /**
   *  A list of roles to be assigned to the user. This operation works in an _upsert_ fashion i.e. any previously assigned roles to the user will not be removed; only new ones
   *  will be added.
   */
  roles?: UserRoleInput[];
  /**
   *  Status of the user. <br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**
   *  Timezone. <br/>
   *  Max character limit: 32.
   */
  timezone?: string;
  /**
   *  The user's title. For example _Mr._, _Miss_, _Dr._, _Ms._ etc <br/>
   *  Max character limit: 50.
   */
  title?: string;
  /**  Type of the user. For example _ADMIN_, _RETAILER_, _LOCATION_ etc */
  type?: string;
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
  attributes?: AttributeInput[];
  /**  The Product Catalogue in which this Product is managed */
  catalogue: ProductCatalogueKey;
  /**  A list of references to the `Category`'s to which this `Product` relates. Product categories must be a part of the same `ProductCatalogue` (see `catalogue` field). The `Category` must already exist. */
  categories?: CategoryKey[];
  /**
   *  The Global Trade Item Number (GTIN) for this Product. <br/>
   *  Max character limit: 20.
   */
  gtin?: string;
  /**  The name of the Product */
  name?: string;
  /**  A list of Prices for this Product */
  prices?: PriceInput[];
  /**  Associated base 'Product' of this variant */
  product?: ProductKey;
  /**
   *  The unique reference identifier for the Product. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The current status of the `VariantProduct`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**  A short description of the Product (max 255 chars) */
  summary?: string;
  /**  The tax information for this Product */
  taxType?: TaxTypeInput;
  /**
   *  Type of the `VariantProduct`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
};

/**
 *  Input parameter for the `updateVirtualCatalogue` mutation. The `ref` field is the unique identifier for the catalogue you wish to update. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  For more information, please refer to the https://lingo.fluentretail.com/display/LIN/Global+Inventory
 */
export type UpdateVirtualCatalogueInput = {
  /**  New list of Attribute containing meta data information for this entity object */
  attributes?: AttributeInput[];
  /**  Control group Ref */
  controlGroupRef?: string;
  /**  Description */
  description?: string;
  /**  Inventory Catalogue used for this virtual catalogue */
  inventoryCatalogueRef?: string;
  /**  Name of the inventory catalogue */
  name?: string;
  /**  Networks used for this catalogue */
  networkIds?: string[];
  /**  Product Catalogue used for this virtual catalogue */
  productCatalogueRef?: string;
  /**
   *  Reference identifier used to identify this entity object. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Retailer refs */
  retailerRefs?: string[];
  /**
   *  The current status of the `VirtualCatalogue`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**
   *  Type of the `VirtualCatalogue`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
};

/**
 *  Input parameter for the `updateVirtualPosition` mutation. A position `ref` should be unique within the bounds of the specified `catalogue`, which together makes up the unique identifier for the `inventory position` record. <br /><br />
 *  During an update mutation, the following fields behave in an "UPSERT" or UPDATE / INSERT manner:
 *  * `attributes` - `name` is the unique key for the Attribute `type` and `value`. If an associated Attribute with a matching `name` already exists, then the `type` and `value` fields will be updated, else it will be inserted.
 *  For more information, please refer to the https://lingo.fluentretail.com/display/LIN/Global+Inventory
 */
export type UpdateVirtualPositionInput = {
  /**  List of Attribute containing meta data information for this entity */
  attributes?: AttributeInput[];
  /**  Catalogue */
  catalogue: VirtualCatalogueKey;
  /**  Group Reference */
  groupRef?: string;
  /**  Product reference */
  productRef?: string;
  /**  Quantity */
  quantity?: number;
  /**
   *  Reference identifier used to identify this entity. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**
   *  The current status of the `VirtualPosition`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/>
   *  Max character limit: 50.
   */
  status?: string;
  /**
   *  Type of the `VirtualPosition`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/>
   *  Max character limit: 50.
   */
  type?: string;
};

/**  Input for filtering out a subset of Virtual Positions */
export type VirtualPositionsGroupFilterInput = {
  /**  Virtual Catalogue reference identifier */
  catalogue: VirtualCatalogueKey;
  /**  Virtual Position Group reference identifier */
  groupRef: string;
};

/**  Input type to update a `Wave` */
export type UpdateWaveInput = {
  /**  `User` who this wave is assigned to */
  allocatedTo?: UserId;
  /**  A list of attributes associated with this wave. `Attribute`s can be used to extend the existing data structure with additional data for use in orchestration rules, UI etc. */
  attributes?: AttributeInput[];
  /**  Fulfilments associated with this wave. This field can be used to add new fulfilments to the wave. Existing fulfilments can't be deleted. */
  fulfilments?: FulfilmentId[];
  /**  ID of the `Wave` to be updated */
  id: string;
  /**  Name of the wave */
  name?: string;
  /**  The current status of the `Wave`.<br/>By default, the initial value will be CREATED, however no other status values are enforced by the platform.<br/>The status field is also used within ruleset selection during orchestration. For more info, see <a href="https://lingo.fluentcommerce.com/ORCHESTRATION-PLATFORM/" target="_blank">Orchestration</a><br/> */
  status?: string;
  /**  Type of the `Wave`, typically used by the Orchestration Engine to determine the workflow that should be applied. Unless stated otherwise, no values are enforced by the platform.<br/> */
  type?: string;
};

/** CarrierConsignmentArticle */
export type CarrierConsignmentArticleId = {
  article?: ArticleId;
  carrierConsignment?: CarrierConsignmentKey;
};

export type CommentId = {
  /**  ID of the object */
  id: string;
};

/** ConsignmentArticle */
export type ConsignmentArticleId = {
  article?: ArticleId;
  consignment?: ConsignmentId;
};

/**  The `ControlKey` input is the parameter for identifying a specific Catalogue Control */
export type ControlKey = {
  /**  Control Group */
  controlGroup: ControlGroupKey;
  /**
   *  Control reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: string;
};

export type CreateReturnVerificationInput = {
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  /**  Reference of return order */
  returnOrder: ReturnOrderKey;
  /**  Type */
  type: string;
  /**  verification details */
  verificationDetails: string;
};

/**  Input type to uniquely identify a `CreditMemoItem` object. We use all the fields present in the request to look for this object. */
export type CreditMemoItemKey = {
  /**  The client's reference identifier for the object */
  ref: string;
};

export type CustomerAddressId = {
  /**  ID of the object */
  id: string;
};

export type FulfilmentChoiceId = {
  /**  ID of the object */
  id: string;
};

/**  The `FulfilmentChoiceKey` input identify the `FulfilmentChoice` using either the id or the external reference to the object */
export type FulfilmentChoiceKey = {
  /**  ID of the `FulfilmentChoice` */
  id?: string;
  /**  External reference of the `FulfilmentChoice`. */
  ref?: string;
};

export type FulfilmentPlanId = {
  /**  ID of the object */
  id: string;
};

/**  Input type to uniquely identify an `InvoiceItem` object. We use all the fields present in the request to look for this object. */
export type InvoiceItemKey = {
  /**  The client's reference identifier for the object */
  ref: string;
};

/**  The `ManifestKey` input, for identifying a specific Manifest. */
export type ManifestKey = {
  /**
   *  external reference of the object. <br/>
   *  Max character limit: 100.
   */
  ref: string;
};

/**  Input type to uniquely identify a `ReturnFulfilmentItem` object. We use all the fields present in the request to look for this object. */
export type ReturnFulfilmentItemKey = {
  /**  The client's reference identifier for the object */
  ref: string;
  returnFulfilment: ReturnFulfilmentKey;
};

export type StoreAddressId = {
  /**  ID of the object */
  id: string;
};

export type UpdateReturnFulfilmentItemInput = {
  /**  A list of attributes. Attributes can be used to extend the existing data structure with additional data for use in orchestration rules, etc. */
  attributes?: AttributeInput[];
  product?: ProductLinkInput;
  /**
   *  External reference. Must be unique. <br/>
   *  Max character limit: 100.
   */
  ref: string;
  returnOrderFulfilment: ReturnFulfilmentKey;
  /**  Unit quantity of return fulfilment item */
  unitQuantity?: QuantityTypeInput;
};

/**  The `VirtualPositionKey` input is the parameter for identifying a specific Virtual Position */
export type VirtualPositionKey = {
  /**  Catalogue */
  catalogue: VirtualCatalogueKey;
  /**
   *  Virtual Position reference identifier. <br/>
   *  Max character limit: 100.
   */
  ref: string;
};

export type WaveId = {
  /**  ID of the object */
  id: string;
};


}