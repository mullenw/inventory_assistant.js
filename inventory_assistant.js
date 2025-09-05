const itemName = "Colombian Coffee";
const unitCost = 6.50;
const currentStock = 325;
const reorderLevel = 225;
const targetStock = 500;
const weeklyDemand = 75;
const supplierLeadTimeWeeks = 2;
const weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
const stockDeficit = Math.max(0, targetStock - currentStock);
const reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
const estimatedReorderCost = reorderQuantity * unitCost;
const reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;
console.log(`
Item: ${itemName}
Weeks of Cover: ${weeksOfCover.toFixed(2)} weeks
Reorder Now: ${reorderNow}
Recommended Reorder Quantity: ${reorderQuantity}
Estimated Reorder Cost: $${estimatedReorderCost.toFixed(2)}
`);