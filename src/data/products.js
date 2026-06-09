export const products = [
  // PERFUMES
  { id: 'nishan', name: 'NISHAN', category: 'perfumes', scents: ['sandalwood', 'caramel', 'geranium'], price: 14.5, originalPrice: null, inStock: false, onSale: true, size: null },
  { id: 'selene', name: 'SELENE', category: 'perfumes', scents: ['vanilla', 'amber', 'citrus', 'musk'], price: 14.5, originalPrice: null, inStock: true, onSale: true, size: null },
  { id: 'gaia', name: 'GAIA', category: 'perfumes', scents: ['mango', 'ginger', 'lemon', 'red berries', 'musk'], price: 14.5, originalPrice: null, inStock: true, onSale: true, size: null },
  { id: 'black', name: 'BLACK', category: 'perfumes', scents: ['leather', 'black pepper', 'incense', 'cedar wood'], price: 14.0, originalPrice: null, inStock: true, onSale: true, size: null },
  { id: 'aurora', name: 'AURORA', category: 'perfumes', scents: ['violet', 'white oud', 'patchouli'], price: 14.0, originalPrice: 21.0, inStock: false, onSale: true, size: null },
  { id: 'garnet', name: 'GARNET', category: 'perfumes', scents: ['vanilla', 'caramel', 'ice cream'], price: 14.5, originalPrice: 21.0, inStock: true, onSale: true, size: null },
  { id: 'topaz', name: 'TOPAZ', category: 'perfumes', scents: ['amber', 'musk', 'orange blossom', 'vanilla'], price: 14.5, originalPrice: 21.0, inStock: false, onSale: true, size: null },
  { id: 'eros', name: 'EROS', category: 'perfumes', scents: ['cinnamon', 'orange', 'blossom', 'bergamot', 'wood'], price: 14.5, originalPrice: 21.0, inStock: true, onSale: true, size: null },
  { id: 'farhad', name: 'FARHAD', category: 'perfumes', scents: ['sandalwood', 'saffron', 'patchouli', 'musk', 'cardamom'], price: 14.0, originalPrice: 19.0, inStock: true, onSale: true, size: '100ml' },
  { id: 'michael-jackson', name: 'MICHAEL JACKSON', category: 'perfumes', scents: ['sandalwood', 'citrus', 'spices', 'mandarin', 'cedarwood'], price: 16.0, originalPrice: 21.0, inStock: true, onSale: true, size: null },
  { id: 'red', name: 'RED', category: 'perfumes', scents: ['vanilla', 'amber', 'musk', 'apple', 'pepper'], price: 9.0, originalPrice: 14.0, inStock: true, onSale: true, size: null },
  { id: 'blue', name: 'BLUE', category: 'perfumes', scents: ['amber', 'flowers', 'sea cucumber', 'herbs'], price: 9.0, originalPrice: 14.0, inStock: true, onSale: true, size: null },
  { id: 'venus', name: 'VENUS', category: 'perfumes', scents: ['coconut powder', 'vanilla', 'white musk', 'musk'], price: 14.5, originalPrice: null, inStock: false, onSale: true, size: null },
  // ALL OVER SPRAY
  { id: 'mf', name: 'MF', category: 'allOverSpray', scents: ['coconut water', 'orange blossom', 'gardenia', 'white rose'], price: 9.0, originalPrice: 12.0, inStock: true, onSale: true, size: null },
  { id: 'verde', name: 'VERDE', category: 'allOverSpray', scents: ['apricot', 'vanilla', 'jasmine', 'magnolia', 'patchouli'], price: 8.0, originalPrice: 12.0, inStock: true, onSale: true, size: null },
  { id: 'y40', name: 'Y40', category: 'allOverSpray', scents: ['amber', 'powder'], price: 9.0, originalPrice: 12.0, inStock: true, onSale: true, size: null },
  { id: 'zoya', name: 'ZOYA', category: 'allOverSpray', scents: ['amber', 'vanilla orchid', 'brown sugar', 'tonka bean', 'amber wood'], price: 9.0, originalPrice: 12.0, inStock: true, onSale: true, size: null },
  { id: 'sol', name: 'SOL', category: 'allOverSpray', scents: [], price: 9.0, originalPrice: 12.0, inStock: true, onSale: true, size: null },
  { id: 'garnet-spray', name: 'GARNET', category: 'allOverSpray', scents: [], price: 9.0, originalPrice: 12.0, inStock: true, onSale: true, size: null },
  { id: 'havana', name: 'HAVANA', category: 'allOverSpray', scents: [], price: 9.0, originalPrice: null, inStock: false, onSale: false, size: null },
  { id: 'mj-spray', name: 'MICHAEL JACKSON', category: 'allOverSpray', scents: [], price: 9.0, originalPrice: null, inStock: true, onSale: true, size: null },
  // VASE DIFFUSERS
  { id: 'diffuser-1', name: 'DIFFUSER I', category: 'vaseDiffusers', scents: [], price: null, originalPrice: null, inStock: false, onSale: false, size: null },
  { id: 'diffuser-2', name: 'DIFFUSER II', category: 'vaseDiffusers', scents: [], price: null, originalPrice: null, inStock: false, onSale: false, size: null },
  { id: 'diffuser-3', name: 'DIFFUSER III', category: 'vaseDiffusers', scents: [], price: null, originalPrice: null, inStock: false, onSale: false, size: null },
  { id: 'diffuser-4', name: 'DIFFUSER IV', category: 'vaseDiffusers', scents: [], price: null, originalPrice: null, inStock: false, onSale: false, size: null },
  // GIFT SETS
  { id: 'mini-set', name: 'Mini Perfume Set 30ml', category: 'giftSets', scents: [], price: 12.5, originalPrice: null, inStock: false, onSale: true, size: '30ml' },
  { id: 'mix-box', name: 'ALL OVER MIX BOX', category: 'giftSets', scents: [], price: 39.0, originalPrice: null, inStock: true, onSale: true, size: null },
  // SKIN CARE
  { id: 'tanning-oil', name: 'Tanning Oil', category: 'skinCare', scents: ['coconut oil', 'carrot oil', 'almond oil', 'vitamin E', 'paraffin oil', 'fragrance'], price: null, originalPrice: null, inStock: false, onSale: false, size: null },
  // SUMMER OFFERS
  { id: 'spray-offer', name: 'ALL OVER SPRAY OFFER', category: 'summerOffers', scents: [], price: null, originalPrice: null, inStock: true, onSale: true, size: null },
  { id: 'perfume-offer', name: 'Perfume Offers', category: 'summerOffers', scents: [], price: null, originalPrice: null, inStock: true, onSale: true, size: null },
]
