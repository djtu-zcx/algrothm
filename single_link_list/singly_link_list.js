// 实现一个双向链表
var SinglyLinkedList = function () {

    function SinglyLinkedList() {
        this.length = 0;
        this.first = null;
        this.last = null;
    }

    /**
     * 根据索引获取 item
     * @param   {Number}    index   链表索引
     * @returns {*}
     */
    SinglyLinkedList.prototype.get = function (index) {
        if (typeof index !== 'number' || index < 0 || index >= this.length) {
            return undefined;
        }

        var item = this.first;
        for (var i = 0; i < index; i++) {
            item = item.next;
        }
        return item;
    };

    /**
     * 根据索引设置 item 的内容
     * @param   {Number}    index   链表索引
     * @param   {*}         value   需要设置的值
     * @returns {*}
     */
    SinglyLinkedList.prototype.set = function (index, value) {
        if (typeof index !== 'number' || index < 0 || index >= this.length) {
            return false;
        }

        var item = this.get(index);
        item.data = value;
        return item;
    };

    /**
     * 根据索引位置插入新的 item
     * @param   {Number}    index   链表索引
     * @param   {*}         value   需要设置的值
     * @returns {*}
     */
    SinglyLinkedList.prototype.add = function (index, value) {
        if (typeof index !== 'number' || index < 0 || index > this.length || index === undefined) {
            return false;
        }

        var item = {
            data: value,
            next: null
        };

        if (this.length > 0) {
            if (index === 0) {
                item.next = this.first;
                this.first = item;
            } else if (index === this.length) {
                this.last.next = item;
                this.last = item;
            } else {
                var prevItem = this.get(index - 1),
                    nextItem = this.get(index);
                item.next = nextItem;
                prevItem.next = item;
            }
        } else {
            this.first = item;
            this.last = item;
        }

        this.length++;
        return item;
    };

    /**
     * 根据索引删除 item
     * @param   {Number}    index   链表索引
     * @returns {boolean}
     */
    SinglyLinkedList.prototype.remove = function (index) {
        if (typeof index !== 'number' || index < 0 || index >= this.length) {
            return false;
        }

        var item = this.get(index);

        if (this.length > 1) {
            if (index === 0) {
                this.first = item.next;
            } else if (index === this.length - 1) {
                this.last = this.get(this.length - 2);
                this.last.next = null;
            } else {
                this.get(index - 1).next = item.next;
            }
        } else {
            this.first = null;
            this.last = null;
        }

        item = null;
        this.length--;
        return true;
    };

    /**
     * 清空整个单链表
     * @returns {boolean}
     */
    SinglyLinkedList.prototype.clear = function () {
        this.first = null;
        this.last = null;
        this.length = 0;
        return true;
    };

    SinglyLinkedList.prototype.addFirst = function (value) {
        return this.add(0, value);
    };

    SinglyLinkedList.prototype.addLast = function (value) {
        return this.add(this.length, value);
    };

    SinglyLinkedList.prototype.removeFirst = function () {
        return this.remove(0);
    };

    SinglyLinkedList.prototype.removeLast = function () {
        return this.remove(this.length - 1);
    };

    SinglyLinkedList.prototype.toString = function () {
        var arr = [],
            item = {};

        if (this.length) {
            do {
                item = item.next || this.get(0);
                arr.push(typeof item.data === 'object' ? JSON.stringify(item.data).replace(/\"/g, '') : item.data);
            } while (item.next);
        }

        return arr.join(' -> ');
    };

    return SinglyLinkedList;
}();