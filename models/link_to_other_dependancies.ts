function loadImage(str:string,resolve:Function) {
    const image = new Image()
    image.src = str
    image.onload = function () {
        resolve(1)
    }
    image.onerror = function () {
        resolve(0)
    }
}
export function linked(link:string) {
    window.location.href=link;
}
export function Mail() {
    window.location.href='mailto:jsdev.web2gmail.com?subject=Votre titre&body=Je%20voudrais%20plus%20d\'infos';

}
export function imagesLoader(list:string[],final_result:Function) {
    const list_like_promise = [...list.map((element) => {
        new Promise((error,resolve) => {
            loadImage(element,function (binaries:0 | 1) {
                return binaries ? resolve({
                    message : "Image Loaded"
                }) : error({
                    message : "Something went wrong"
                })
            })
        })
    })]
    Promise.all([...list_like_promise]).then((_) => {
        final_result(true)
    }).catch((_) => {
        final_result(false)
    })
}
export class ScrollIntoView {
    static project(htmlElement:HTMLElement | null) {
        console.log(htmlElement)
        htmlElement?.querySelector(".element-to-contain-list-of-finished-project")?.scrollIntoView({
            behavior: "smooth",
            block: "end"
        })
    }
    static contact(htmlElement:HTMLElement | null) {
        htmlElement?.querySelector(".element-to-list-different-way-to-contact")?.scrollIntoView({
            behavior: "smooth",
            block: "end"
        })
    }
    static about(htmlElement:HTMLElement | null) {
        htmlElement?.querySelector(".html-element-for-more-explaination-about-developper-en-experiencies")?.scrollIntoView({
            behavior: "smooth",
            block: "end"
        })
    }
    static home(htmlElement:HTMLElement | null) {
        htmlElement?.querySelector(".container-some-information-like-na-bar")?.scrollIntoView({
            behavior: "smooth",
            block: "end"
        })
    }
}