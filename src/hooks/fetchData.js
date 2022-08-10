export function _dataPromise() {
    let _promise = new Promise(async (resolve, reject) => {
        const query = await fetch('https://picsum.photos/v2/list?page=2&limit=100');
        const result = await query.json();
        resolve(result);
    });

    return _promise;
}