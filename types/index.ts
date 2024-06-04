export interface IRecipe {
    id: string | number,
    name: string,
    calories: number,
    rating: number,
    price: number,
    imageURL: string,
    ingredients?: any[]
}

export interface RecipeDetails {
    vegetarian: boolean
    vegan: boolean
    glutenFree: boolean
    dairyFree: boolean
    veryHealthy: boolean
    cheap: boolean
    veryPopular: boolean
    sustainable: boolean
    lowFodmap: boolean
    weightWatcherSmartPoints: number
    gaps: string
    preparationMinutes: any
    cookingMinutes: any
    aggregateLikes: number
    healthScore: number
    creditsText: string
    license: string
    sourceName: string
    pricePerServing: number
    extendedIngredients: ExtendedIngredient[]
    id: number
    title: string
    readyInMinutes: number
    servings: number
    sourceUrl: string
    image: string
    imageType: string
    nutrition: Nutrition
    summary: string
    cuisines: any[]
    dishTypes: string[]
    diets: string[]
    occasions: any[]
    instructions: string
    analyzedInstructions: AnalyzedInstruction[]
    originalId: any
    spoonacularScore: number
    spoonacularSourceUrl: string
}

export interface ExtendedIngredient {
    id: number
    aisle: string
    image: string
    consistency: string
    name: string
    nameClean: string
    original: string
    originalName: string
    amount: number
    unit: string
    meta: string[]
    measures: Measures
}

export interface Measures {
    us: Us
    metric: Metric
}

export interface Us {
    amount: number
    unitShort: string
    unitLong: string
}

export interface Metric {
    amount: number
    unitShort: string
    unitLong: string
}

export interface Nutrition {
    nutrients: Nutrient[]
    properties: Property[]
    flavonoids: Flavonoid[]
    ingredients: Ingredient[]
    caloricBreakdown: CaloricBreakdown
    weightPerServing: WeightPerServing
}

export interface Nutrient {
    name: string
    amount: number
    unit: string
    percentOfDailyNeeds: number
}

export interface Property {
    name: string
    amount: number
    unit: string
}

export interface Flavonoid {
    name: string
    amount: number
    unit: string
}

export interface Ingredient {
    id: number
    name: string
    amount: number
    unit: string
    nutrients: Nutrient2[]
}

export interface Nutrient2 {
    name: string
    amount: number
    unit: string
    percentOfDailyNeeds: number
}

export interface CaloricBreakdown {
    percentProtein: number
    percentFat: number
    percentCarbs: number
}

export interface WeightPerServing {
    amount: number
    unit: string
}

export interface AnalyzedInstruction {
    name: string
    steps: Step[]
}

export interface Step {
    number: number
    step: string
    ingredients: Ingredient2[]
    equipment: Equipment[]
}

export interface Ingredient2 {
    id: number
    name: string
    localizedName: string
    image: string
}

export interface Equipment {
    id: number
    name: string
    localizedName: string
    image: string
}


export interface ExchangeRateResponse {
    result: string
    documentation: string
    terms_of_use: string
    time_last_update_unix: number
    time_last_update_utc: string
    time_next_update_unix: number
    time_next_update_utc: string
    base_code: string
    conversion_rates: ConversionRates
}

export interface ConversionRates {
    USD: number
    AED: number
    AFN: number
    ALL: number
    AMD: number
    ANG: number
    AOA: number
    ARS: number
    AUD: number
    AWG: number
    AZN: number
    BAM: number
    BBD: number
    BDT: number
    BGN: number
    BHD: number
    BIF: number
    BMD: number
    BND: number
    BOB: number
    BRL: number
    BSD: number
    BTN: number
    BWP: number
    BYN: number
    BZD: number
    CAD: number
    CDF: number
    CHF: number
    CLP: number
    CNY: number
    COP: number
    CRC: number
    CUP: number
    CVE: number
    CZK: number
    DJF: number
    DKK: number
    DOP: number
    DZD: number
    EGP: number
    ERN: number
    ETB: number
    EUR: number
    FJD: number
    FKP: number
    FOK: number
    GBP: number
    GEL: number
    GGP: number
    GHS: number
    GIP: number
    GMD: number
    GNF: number
    GTQ: number
    GYD: number
    HKD: number
    HNL: number
    HRK: number
    HTG: number
    HUF: number
    IDR: number
    ILS: number
    IMP: number
    INR: number
    IQD: number
    IRR: number
    ISK: number
    JEP: number
    JMD: number
    JOD: number
    JPY: number
    KES: number
    KGS: number
    KHR: number
    KID: number
    KMF: number
    KRW: number
    KWD: number
    KYD: number
    KZT: number
    LAK: number
    LBP: number
    LKR: number
    LRD: number
    LSL: number
    LYD: number
    MAD: number
    MDL: number
    MGA: number
    MKD: number
    MMK: number
    MNT: number
    MOP: number
    MRU: number
    MUR: number
    MVR: number
    MWK: number
    MXN: number
    MYR: number
    MZN: number
    NAD: number
    NGN: number
    NIO: number
    NOK: number
    NPR: number
    NZD: number
    OMR: number
    PAB: number
    PEN: number
    PGK: number
    PHP: number
    PKR: number
    PLN: number
    PYG: number
    QAR: number
    RON: number
    RSD: number
    RUB: number
    RWF: number
    SAR: number
    SBD: number
    SCR: number
    SDG: number
    SEK: number
    SGD: number
    SHP: number
    SLE: number
    SLL: number
    SOS: number
    SRD: number
    SSP: number
    STN: number
    SYP: number
    SZL: number
    THB: number
    TJS: number
    TMT: number
    TND: number
    TOP: number
    TRY: number
    TTD: number
    TVD: number
    TWD: number
    TZS: number
    UAH: number
    UGX: number
    UYU: number
    UZS: number
    VES: number
    VND: number
    VUV: number
    WST: number
    XAF: number
    XCD: number
    XDR: number
    XOF: number
    XPF: number
    YER: number
    ZAR: number
    ZMW: number
    ZWL: number
}
