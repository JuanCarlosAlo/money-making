import { StyledMainTitle ,StyledSmallTitle,StyledArticleTitle} from "./styles"

const ArticleTitle = ({text,type,color})=>{
    if (type === 'main') {
        return <StyledMainTitle color={color}>{text}</StyledMainTitle>
    }
    if (type === 'article') {
        return <StyledArticleTitle  color={color}>{text}</StyledArticleTitle>
    }
    if (type === 'small'){
        return <StyledSmallTitle  color={color}>{text}</StyledSmallTitle>
    }
}

export default ArticleTitle