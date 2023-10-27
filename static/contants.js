const urlMaps = {
  github: {
    url: 'https://kubebb.github.io',
    baseUrl: '/website',
  },
  cn: {
    url: 'http://kubebb.k8s.com.cn',
    baseUrl: '/',
  },
  test: {
    url: 'http://kubebb.k8s.com.cn',
    baseUrl: '/test',
  },
};

exports.urlMaps = urlMaps;

exports.curr_url_map = urlMaps[process.env.DEPLOY_PLATFORM || 'cn']