export default class CRUDMethods {

    static all(query) {

        return this.find(query)

    }

    static getDocById(id) {

        return this.findById(id)

    }

    static getDocByQuery(query) {

        return this.findOne(query)

    }

    static createDoc(data) {

        const task = new this(data)
        return task.save()

    }

    static updateDoc(id, data) {

        return this.updateOne({
            _id: id
        }, data)

    }

    static removeDoc(id) {

        return this.deleteOne({
            _id: id
        })

    }

    saveUpdatedDoc() {

        return this.save()

    }

}
