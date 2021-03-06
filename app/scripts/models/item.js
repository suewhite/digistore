App.Item = DS.Model.extend({
    product:   DS.belongsTo('product', {async: true}),
    cart:      DS.belongsTo('cart',    {async: true}),
    currPrice: DS.attr('number'),
    qty:       DS.attr('number'),
    subtotal: function() {
        return this.get('qty') * this.get('currPrice');
    }.property('qty', 'currPrice')
});

App.Item.FIXTURES = [
    {
        id: 1,
        cart: 1,
        product: 1,
        currPrice: 5000,
        qty: 1
    },
    {
        id: 2,
        cart: 1,
        product: 2,
        currPrice: 3000,
        qty: 2
    }
]
