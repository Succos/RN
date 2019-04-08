export default class NavigationUtil {

    static goPage(params, page) {
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            console.log('NavigationUtil navigation not null')
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }
    static resetToHomePage(params) {
        const {navigation} = params;
    }

}