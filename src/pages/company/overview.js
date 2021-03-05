import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const TableHead = ({children, ...others}) => (<Col xs={12} lg={3} md={3} sm={3} {...others}>{children}</Col>)

const CompanyOverviewPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="会社概要" />
      <h1>会社概要</h1>
      <Container>
        <Row>
          <TableHead>社名</TableHead>
          <Col>株式会社ニコット　/　Nicott inc.</Col>
        </Row>
        <Row>
          <TableHead>設立</TableHead>
          <Col>1999年11月</Col>
        </Row>
        <Row>
          <TableHead>資本金</TableHead>
          <Col>5000万円</Col>
        </Row>
        <Row>
          <TableHead>代表者</TableHead>
          <Col>貫井　哲夫</Col>
        </Row>
        <Row>
          <TableHead>事業内容</TableHead>
          <Col>生活及び服飾雑貨等の商品企画、制作、輸入、卸売事業</Col>
        </Row>

        <h2>所在地</h2>
        <Row>
          <TableHead>本社</TableHead>
          <Col>
            〒371-0056　群馬県前橋市青柳町１９８<br/>
            TEL:027-233-8216　 FAX:027-233-8229
          </Col>
        </Row>
        <Row>
          <TableHead>東京オフィス</TableHead>
          <Col>
            〒160-0017　東京都新宿区左門町６番地３ HUMPTY DUMPTYビル5F<br/>
            TEL:03-6274-8171　 FAX:03-6274-8172
          </Col>
        </Row>
        <Row>
          <TableHead>物流センター</TableHead>
          <Col>
            〒371-1125　群馬県佐波郡玉村町八幡原2027-1<br/>
            TEL:0270-75-5820　 FAX:0270-75-5821
          </Col>
        </Row>

        <h2>沿革</h2>
        <Row><TableHead>1999年<span className="float-right">11月</span></TableHead><Col>（有）メガバックス（服飾メーカー）を東京都渋谷区で創業</Col></Row>
        <Row><TableHead>2003年<span className="float-right">5月</span></TableHead><Col>（有）ニコットに社名変更。本社を群馬県前橋市青柳町に移転。営業・企画室を群馬県前橋市上長磯町に開設</Col></Row>
        <Row><TableHead>2006年<span className="float-right">3月</span></TableHead><Col>生活雑貨事業スタートする</Col></Row>
        <Row><TableHead>2008年<span className="float-right">7月</span></TableHead><Col>営業拡充のため、渋谷区恵比寿に東京オフィスを開設</Col></Row>
        <Row><TableHead>2011年<span className="float-right">8月</span></TableHead><Col>営業拡充のため、渋谷区千駄ヶ谷に東京オフィスを移転</Col></Row>
        <Row><TableHead>2012年<span className="float-right">7月</span></TableHead><Col>グループ会社、（株）ニッキの事業を統合</Col></Row>
        <Row><TableHead>2012年<span className="float-right">7月</span></TableHead><Col>株式会社ニコットに社名変更</Col></Row>
        <Row><TableHead>2014年<span className="float-right">6月</span></TableHead><Col>グループ会社の（株）ハンプティーダンプティーが資本金を全額引き受け４７００万円を増額し、資本金５０００万円となる</Col></Row>
        <Row><TableHead>2014年<span className="float-right">12月</span></TableHead><Col>営業・企画室を前橋事務所とし、群馬県前橋市天川大島町に移転</Col></Row>
        <Row><TableHead>2016年<span className="float-right">2月</span></TableHead><Col>倉庫を移転</Col></Row>
        <Row><TableHead>2018年<span className="float-right">6月</span></TableHead><Col>東京オフィスを新宿区左門町に移転</Col></Row>
      </Container>
    </Layout>
  )
}

export default CompanyOverviewPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
