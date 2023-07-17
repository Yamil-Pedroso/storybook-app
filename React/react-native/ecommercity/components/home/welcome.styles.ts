import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { COLORS, SIZES } from '../../constants/index';

export interface IStyles {
    container: ViewStyle;
    welcomeTxt: (color: string, top: number) => ViewStyle | TextStyle | ImageStyle;
    searchContainer: ViewStyle;
    searchIcon: TextStyle;
    searchWrapper: ViewStyle;
    searchInput: TextStyle;
    searchBtn: ViewStyle;
}

export const styles: IStyles = ({
    container: {
        width: '100%',
    },
    welcomeTxt: (color: string, top: number): TextStyle => ({
        fontWeight: 'bold',
        fontSize: SIZES.xxLarge - 5,
        marginTop: top,
        color: color,
        marginHorizontal: 12,
    }),
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.small,
        marginRight: SIZES.small,
    },
    searchInput: {
        fontWeight: '400',
        width: '100%',
        height: '100%',
        paddingHorizontal: SIZES.small,
    },
    searchBtn: {
        width: 50,
        height: '100%',
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    },
});

export default styles;


