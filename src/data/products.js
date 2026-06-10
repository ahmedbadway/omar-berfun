export const products = [
  // PERFUMES
  { id: 'nishan', image: import.meta.env.BASE_URL + 'images/products/NISHAN.png', name: 'NISHAN', category: 'perfumes', scents: ['sandalwood', 'caramel', 'geranium'], price: 14.5, originalPrice: null, inStock: false, onSale: true, size: null },
  { id: 'selene', image: import.meta.env.BASE_URL + 'images/products/SELENE.png', name: 'SELENE', category: 'perfumes', scents: ['vanilla', 'amber', 'citrus', 'musk'], price: 14.5, originalPrice: null, inStock: true, onSale: true, size: null },
  { id: 'gaia', image: import.meta.env.BASE_URL + 'images/products/GAIA.png', name: 'GAIA', category: 'perfumes', scents: ['mango', 'ginger', 'lemon', 'red berries', 'musk'], price: 14.5, originalPrice: null, inStock: true, onSale: true, size: null },
  { id: 'black', image: import.meta.env.BASE_URL + 'images/products/BLACK.png', name: 'BLACK', category: 'perfumes', scents: ['leather', 'black pepper', 'incense', 'cedar wood'], price: 14.0, originalPrice: null, inStock: true, onSale: true, size: null },
  { id: 'aurora', image: import.meta.env.BASE_URL + 'images/products/AURORA.png', name: 'AURORA', category: 'perfumes', scents: ['violet', 'white oud', 'patchouli'], price: 14.0, originalPrice: 21.0, inStock: false, onSale: true, size: null },
  { id: 'garnet', image: import.meta.env.BASE_URL + 'images/products/GARNET.png', name: 'GARNET', category: 'perfumes', scents: ['vanilla', 'caramel', 'ice cream'], price: 14.5, originalPrice: 21.0, inStock: true, onSale: true, size: null },
  { id: 'topaz', image: import.meta.env.BASE_URL + 'images/products/TOPAZ.png', name: 'TOPAZ', category: 'perfumes', scents: ['amber', 'musk', 'orange blossom', 'vanilla'], price: 14.5, originalPrice: 21.0, inStock: false, onSale: true, size: null },
  { id: 'eros', image: import.meta.env.BASE_URL + 'images/products/EROS.png', name: 'EROS', category: 'perfumes', scents: ['cinnamon', 'orange', 'blossom', 'bergamot', 'wood'], price: 14.5, originalPrice: 21.0, inStock: true, onSale: true, size: null },
  { id: 'farhad', image: import.meta.env.BASE_URL + 'images/products/FARHAD.png', name: 'FARHAD', category: 'perfumes', scents: ['sandalwood', 'saffron', 'patchouli', 'musk', 'cardamom'], price: 14.0, originalPrice: 19.0, inStock: true, onSale: true, size: '100ml' },
  { id: 'michael-jackson', image: import.meta.env.BASE_URL + 'images/products/MICHAEL_JACKSON.png', name: 'MICHAEL JACKSON', category: 'perfumes', scents: ['sandalwood', 'citrus', 'spices', 'mandarin', 'cedarwood'], price: 16.0, originalPrice: 21.0, inStock: true, onSale: true, size: null },
  { id: 'red', image: import.meta.env.BASE_URL + 'images/products/RED.png', name: 'RED', category: 'perfumes', scents: ['vanilla', 'amber', 'musk', 'apple', 'pepper'], price: 9.0, originalPrice: 14.0, inStock: true, onSale: true, size: null },
  { id: 'blue', image: import.meta.env.BASE_URL + 'images/products/BLUE.png', name: 'BLUE', category: 'perfumes', scents: ['amber', 'flowers', 'sea cucumber', 'herbs'], price: 9.0, originalPrice: 14.0, inStock: true, onSale: true, size: null },
  { id: 'venus', image: import.meta.env.BASE_URL + 'images/products/VENUS.png', name: 'VENUS', category: 'perfumes', scents: ['coconut powder', 'vanilla', 'white musk', 'musk'], price: 14.5, originalPrice: null, inStock: false, onSale: true, size: null },
  // ALL OVER SPRAY
  { id: 'mf', image: import.meta.env.BASE_URL + 'images/products/MF.png', name: 'MF', category: 'allOverSpray', scents: ['coconut water', 'orange blossom', 'gardenia', 'white rose'], price: 9.0, originalPrice: 12.0, inStock: true, onSale: true, size: null },
  { id: 'verde', image: import.meta.env.BASE_URL + 'images/products/VERDE.png', name: 'VERDE', category: 'allOverSpray', scents: ['apricot', 'vanilla', 'jasmine', 'magnolia', 'patchouli'], price: 8.0, originalPrice: 12.0, inStock: true, onSale: true, size: null },
  { id: 'y40', image: import.meta.env.BASE_URL + 'images/products/Y_40.png', name: 'Y40', category: 'allOverSpray', scents: ['amber', 'powder'], price: 9.0, originalPrice: 12.0, inStock: true, onSale: true, size: null },
  { id: 'zoya', image: import.meta.env.BASE_URL + 'images/products/ZOYA.png', name: 'ZOYA', category: 'allOverSpray', scents: ['amber', 'vanilla orchid', 'brown sugar', 'tonka bean', 'amber wood'], price: 9.0, originalPrice: 12.0, inStock: true, onSale: true, size: null },
  { id: 'sol', image: import.meta.env.BASE_URL + 'images/products/SOL.png', name: 'SOL', category: 'allOverSpray', scents: [], price: 9.0, originalPrice: 12.0, inStock: true, onSale: true, size: null },
  { id: 'garnet-spray', image: import.meta.env.BASE_URL + 'images/products/GARNET..png', name: 'GARNET', category: 'allOverSpray', scents: [], price: 9.0, originalPrice: 12.0, inStock: true, onSale: true, size: null },
  { id: 'havana', image: import.meta.env.BASE_URL + 'images/products/HAVANA.png', name: 'HAVANA', category: 'allOverSpray', scents: [], price: 9.0, originalPrice: null, inStock: false, onSale: false, size: null },
  { id: 'mj-spray', image: import.meta.env.BASE_URL + 'images/products/MICHAEL_JACKSON..png', name: 'MICHAEL JACKSON', category: 'allOverSpray', scents: [], price: 9.0, originalPrice: null, inStock: true, onSale: true, size: null },
  // VASE DIFFUSERS
  { id: 'diffuser-1', image: import.meta.env.BASE_URL + 'images/products/VASE_A.png', name: 'DIFFUSER I', category: 'vaseDiffusers', scents: [], price: null, originalPrice: null, inStock: false, onSale: false, size: null },
  { id: 'diffuser-2', image: import.meta.env.BASE_URL + 'images/products/VASE_B.png', name: 'DIFFUSER II', category: 'vaseDiffusers', scents: [], price: null, originalPrice: null, inStock: false, onSale: false, size: null },
  { id: 'diffuser-3', image: import.meta.env.BASE_URL + 'images/products/VASE_C.png', name: 'DIFFUSER III', category: 'vaseDiffusers', scents: [], price: null, originalPrice: null, inStock: false, onSale: false, size: null },
  { id: 'diffuser-4', image: import.meta.env.BASE_URL + 'images/products/VASE_D.png', name: 'DIFFUSER IV', category: 'vaseDiffusers', scents: [], price: null, originalPrice: null, inStock: false, onSale: false, size: null },
  // GIFT SETS
  { id: 'mini-set', image: import.meta.env.BASE_URL + 'images/products/Mini_Perfume_set_30_ml.png', name: 'Mini Perfume Set 30ml', category: 'giftSets', scents: [], price: 12.5, originalPrice: null, inStock: false, onSale: true, size: '30ml' },
  { id: 'mix-box', image: import.meta.env.BASE_URL + 'images/products/ALL_OVER_MIX_BOX.png', name: 'ALL OVER MIX BOX', category: 'giftSets', scents: [], price: 39.0, originalPrice: null, inStock: true, onSale: true, size: null },
  // SKIN CARE
  { id: 'tanning-oil', image: import.meta.env.BASE_URL + 'images/products/tanning-oil.webp', name: 'Tanning Oil', category: 'skinCare', scents: ['coconut oil', 'carrot oil', 'almond oil', 'vitamin E', 'paraffin oil', 'fragrance'], price: null, originalPrice: null, inStock: false, onSale: false, size: null },
  // SUMMER OFFERS
  { id: 'spray-offer', image: import.meta.env.BASE_URL + 'images/products/spray-offer.webp', name: 'ALL OVER SPRAY OFFER', category: 'summerOffers', scents: [], price: null, originalPrice: null, inStock: true, onSale: true, size: null },
  { id: 'perfume-offer', image: import.meta.env.BASE_URL + 'images/products/perfume-offer.webp', name: 'Perfume Offers', category: 'summerOffers', scents: [], price: null, originalPrice: null, inStock: true, onSale: true, size: null },
]
