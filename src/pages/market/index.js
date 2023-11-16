import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Yunti from '../../../static/img/market/yunti.svg';
import Search from '../../../static/img/market/search.svg';
import Tapm from '../../../static/img/market/tapm.svg';
import Api from '../../../static/img/market/api.svg';
import Msa from '../../../static/img/market/msa.svg';
import Tdsf from '../../../static/img/market/tdsf.svg';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { useHistory } from '@docusaurus/router';
import { curr_url_map } from '../../../static/contants';

const href_pre = 'https://docs.tenxcloud.com';
const data = [
  {
    title: 'API 网关',
    desc: '提供 API 的完整生命周期管理，以及丰富的插件能力',
    icon: <Api />,
    tag: 'official',
    types: [ 'apigateway' ],
    to: href_pre + '/docs/TAMP/产品介绍',
    new: true,
    bottoms: [
      {
        th: '组件仓库',
        td: '官方仓库',
      },
      {
        th: '关键词',
        td: '安全认证，降本增效，高性能高可靠',
      }
    ]
  }, 
  {
    title: '服务网格',
    desc: '一个统一管理微服务应用流量、兼容 Istio&envoy 的托管式平台',
    icon: <Tdsf />,
    tag: 'official',
    types: [ 'msa' ],
    to: href_pre + '/docs/服务网格/产品介绍',
    new: true,
    bottoms: [
      {
        th: '组件仓库',
        td: '官方仓库',
      },
      {
        th: '关键词',
        td: '无侵入性，多语言多协议，统一流量管理',
      }
    ]
  }, 
  {
    title: '微服务框架',
    desc: '一个支持 SpringCloud、Dubbo 等主流框架的微服务治理平台',
    icon: <Msa />,
    tag: 'official',
    types: [ 'msa' ],
    to: href_pre + '/docs/TMF/产品介绍',
    new: true,
    bottoms: [
      {
        th: '组件仓库',
        td: '官方仓库',
      },
      {
        th: '关键词',
        td: '统一注册发现、动态配置管理、统一流量管理',
      }
    ]
  }, 
  {
    title: '应用性能监控',
    desc: '帮助用户理解系统行为。通过对系统运行数据的分析，当系统发生故障时，快速定位故障',
    icon: <Tapm />,
    tag: 'official',
    types: [ 'cloud-native-observability' ],
    to: href_pre + '/docs/TAPM/产品介绍',
    new: true,
    bottoms: [
      {
        th: '组件仓库',
        td: '官方仓库',
      },
      {
        th: '关键词',
        td: '全链路拓扑、多维度监控告警、在线诊断',
      }
    ]
  }, 
  // {
  //   title: '云梯低代码',
  //   desc: '一个面向开发者的低代码业务应用快速搭建平台',
  //   icon: <Yunti />,
  //   tag: 'official',
  //   types: [ 'dev-tool' ],
  //   to: (curr_url_map?.baseUrl === '/' || !curr_url_map.baseUrl ? '' : curr_url_map.baseUrl) + '/docs/lowcode-development/intro',
  //   new: true,
  //   bottoms: [
  //     {
  //       th: '组件仓库',
  //       td: '官方仓库',
  //     },
  //     {
  //       th: '关键词',
  //       td: '简单易用，拖拽式开发，可视化配置',
  //     }
  //   ]
  // }, 
]

const providers = [
  {
    name: '官方',
    value: 'official',
  }
]

const func_types = [
  {
    name: '全部',
    value: 'all',
  },
  {
    name: '容器',
    value: 'container',
  },
  {
    name: '服务治理',
    value: 'msa',
  },
  {
    name: 'API 网关',
    value: 'apigateway',
  },
  {
    name: '数据库',
    value: 'database',
  },
  {
    name: '网络',
    value: 'network',
  },
  {
    name: '安全',
    value: 'security',
  },
  {
    name: '存储',
    value: 'storage',
  },
  {
    name: '消息队列',
    value: 'message-queue',
  },
  {
    name: '云原生可观测',
    value: 'cloud-native-observability',
  },
  {
    name: '大数据计算',
    value: 'big-data',
  },
  {
    name: '人工智能与机器学习',
    value: 'deep-learning',
  },
  {
    name: '媒体服务',
    value: 'media-service',
  },
  {
    name: '开发工具',
    value: 'dev-tool',
  },
  {
    name: '其它',
    value: 'other',
  },
]

function Input(props) {
  return <span class="ant-input-group-wrapper ant-input-search ant-input-search-large ant-input-search-with-button ant-input-group-wrapper-lg css-amq5gd">
	<span class="ant-input-wrapper ant-input-group">
		<span class="ant-input-affix-wrapper ant-input-affix-wrapper-lg">
			<input {...props} onKeyDown={e => {
        if(e.keyCode === 13) {
          props.onSearch(e.target.value)
        }
      }} placeholder="请输入关键字搜索" class="ant-input ant-input-lg"
			  type="text" />
			<span class="ant-input-suffix">
			</span>
		</span>
		<span class="ant-input-group-addon">
			<button onClick={props.onSearch} type="button" class="ant-btn ant-btn-primary ant-btn-lg ant-input-search-button">
				<span>
					<Search className={styles.search} /> 搜索
				</span>
			</button>
		</span>
	</span>
</span>
}

function MarketHeader(props) {
  const [ search, setSearch ] = React.useState('')
  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <header>
      <div className={clsx(styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--12')}>
              <div className={styles.title}>
                <span className={styles.pre}>开放的</span>组件市场
              </div>
              <div className={styles.input}>
                <Input value={search} onChange={onSearchChange} onSearch={() => {
                  props.onSearch(search)
                }} />
              </div>
            </div>
          </div>
          <div className={styles.circle1}>
          </div>
          <div className={styles.circle2}>
          </div>
        </div>
      </div>
    </header>
  );
}
function MarketContent({ search }) {
  const history = useHistory();
  const [ actives, setActives ] = React.useState({
    provider: 'official',
    func: 'all',
  })
  React.useEffect(() => {
    actives.func !== 'all' && (setActives({
      ...actives,
      func: 'all',
    }));
  }, [ search ])
  const renderItem = (item, type) => {
    const count = data.filter(_item => _item.types.includes(item.value))?.length
    return <div
      className={clsx(
        styles.type_item,
        actives[type] === item.value ? styles.active : undefined,
        !count && item.value !== 'all' ? styles.nodataItem : undefined)
      }
      key={item.name}
      title={!count && item.value !== 'all' ? '暂无' : undefined}
      onClick={() => {
        if (!count && item.value !== 'all') return
        setActives({
          ...actives,
          [type]: item.value
        })
      }}
    >
      {item.name}
    </div>
  }
  const getTag = (value) => {
    return providers.find(item => item.value === value)?.name
  }

  let show_data = actives.func === 'all' ? data : data.filter(item => {
    return item.types.includes(actives.func)
  })
  if (search) {
    show_data = show_data.filter(item => {
      return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
  }
  return (
    <div className={clsx(styles.contentWrapper)}>
      <div className={clsx(styles.content, 'container')}>
        <div className={styles.left}>
          <div className={styles.type}>
            <div className={styles.type_title}>
              提供者
            </div>
            <div className={styles.type_items}>
              {providers.map(item => renderItem(item, 'provider'))}
            </div>
          </div>
          <div className={styles.type}>
            <div className={styles.type_title}>
              功能分类
            </div>
            <div className={styles.type_items}>
              {func_types.map(item => renderItem(item, 'func'))}
            </div>
          </div>
        </div>
        <div
          className={styles.right}
        >
          <div className="row">
            {
              show_data?.length ? show_data.map(item => {
                const tag = getTag(item.tag)
                return <div className={clsx('col col--4')} key={item.title}>
                  <div
                    className={clsx(styles.cardItem, item.new ? styles.new : undefined)}
                    onClick={() => {
                      if (item.to) {
                        if (item.to.startsWith('http')) {
                          window.open(item.to)
                          return
                        }
                        history.push(item.to)
                      }
                    }}
                  >
                    <div className={styles.top}>
                      <div className={styles.icon}>
                        {item.icon}
                      </div>
                      <div className={styles.titles}>
                        <div className={styles.title}>{item.title}{tag ? <span className={styles.tag}>{tag}</span> : null}</div>
                        <div className={styles.desc}>{item.desc}</div>
                      </div>
                      <div style={{ clear: 'both' }}/>
                    </div>
                    <div className={styles.bottom}>
                      {item.bottoms.concat({
                        th: '功能分类',
                        td: item.types.map(_item => {
                          return func_types.find(__item => __item.value === _item)?.name
                        })
                      }).map(_item => {
                        return <div className={styles.bottomRow} key={_item.th}>
                          <div className={styles.left}>
                            {_item.th}
                          </div>
                          <div className={styles.right} title={_item.td}>{_item.td}</div>
                          <div style={{ clear: 'both' }}/>
                        </div>
                      })}
                    </div>
                  </div>
                </div>
              }) : <div className={clsx('col col--12', styles.nodata)}>
                暂无数据
              </div>
            }
          </div>
        </div>
        <div style={{ clear: 'both' }}/>
      </div>
    </div>
  );
}

export default function Market() {
  const [ search, onSearch ] = React.useState('')
  return (
    <Layout
      title={`组件市场`}
    >
      <MarketHeader onSearch={(value) => {
        onSearch(value)
      }} />
      <MarketContent search={search} />
    </Layout>
  );
}
