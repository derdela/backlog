module.exports = function() {
    data = [];
    function add(item) {
        data.push(item);
    }
    function all(item) {
        return data;
    }

    return {add, all};
};
