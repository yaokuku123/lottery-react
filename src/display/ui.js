import React from 'react'
import { Card, Icon, Image, Statistic, Button } from 'semantic-ui-react'

const CardExampleCard = (props) => (
    <Card>
        <Image src='/images/picture.jpg' />
        <Card.Content>
            <Card.Header>彩票系统</Card.Header>
            <Card.Meta>
                <span className='date'>管理员地址：{props.manager}</span>
            </Card.Meta>
            <Card.Meta>
                <span className='date'>当前地址：{props.currentAccount}</span>
            </Card.Meta>
            <Card.Description>
                每周三开奖
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                {props.playerCounts}人参与
            </a>
        </Card.Content>
        <Card.Content extra>
            <Statistic color='green'>
                <Statistic.Value>{props.balance}ETH</Statistic.Value>
                <Statistic.Label>奖金池</Statistic.Label>
            </Statistic>
        </Card.Content>
        <Card.Content extra>
            <Statistic color='blue'>
                <Statistic.Value>第{props.round}期</Statistic.Value>
                <Statistic.Label>点击我查看交易历史</Statistic.Label>
            </Statistic>
        </Card.Content>
        <Button animated='fade' onClick={props.play} disabled={props.isWork}>
            <Button.Content visible>投注产生希望</Button.Content>
            <Button.Content hidden>购买放飞梦想</Button.Content>
        </Button>
        <Button animated='fade' style={{display:props.isShowBtn}} onClick={props.drawPrize} disabled={props.isWork}>
            <Button.Content visible>开奖</Button.Content>
            <Button.Content hidden>开奖</Button.Content>
        </Button>
        <Button animated='fade' style={{display:props.isShowBtn}}  onClick={props.refund} disabled={props.isWork}>
            <Button.Content visible>退奖</Button.Content>
            <Button.Content hidden>退奖</Button.Content>
        </Button>
    </Card>
)

export default CardExampleCard