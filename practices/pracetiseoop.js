setPage(page){
    if(page >= 0) this.page = page
    else throw Error('Page CANNOT Be less than 0')
}