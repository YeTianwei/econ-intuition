(function () {
  'use strict';

  // Keep lesson titles, order and completion states in sync with CURRICULUM.md.
  var parts = [
    { id: 1, title: '第一部分　微观经济学', en: 'Microeconomics' },
    { id: 2, title: '第二部分　宏观经济学', en: 'Macroeconomics' },
    { id: 3, title: '第三部分　应用', en: 'Applications' }
  ];

  var modules = [
    {
      id: 'm01', number: 1, title: '经济学思维',
      en: 'Thinking like an economist', part: 1,
      lessons: [
        {
          id: 'm01-01', title: '稀缺、机会成本与生产可能性边界',
          en: 'Scarcity, opportunity cost and the production possibilities frontier',
          path: 'm01/01-scarcity-opportunity-cost.html', status: 'todo'
        },
        {
          id: 'm01-02', title: '边际思维与激励',
          en: 'Marginal thinking and incentives',
          path: 'm01/02-marginal-thinking.html', status: 'todo'
        },
        {
          id: 'm01-03', title: '比较优势与交易',
          en: 'Comparative advantage and trade',
          path: 'm01/03-comparative-advantage.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm02', number: 2, title: '供需与弹性',
      en: 'Supply, demand & elasticity', part: 1,
      lessons: [
        {
          id: 'm02-01', title: '供需、价格与弹性',
          en: 'Supply, demand, prices and elasticity',
          path: 'm02/01-supply-demand.html', status: 'done'
        },
        {
          id: 'm02-02', title: '弹性的更多面孔',
          en: 'More faces of elasticity',
          path: 'm02/02-more-elasticities.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm03', number: 3, title: '市场效率与干预',
      en: 'Efficiency & intervention', part: 1,
      lessons: [
        {
          id: 'm03-01', title: '剩余与市场效率',
          en: 'Surplus and market efficiency',
          path: 'm03/01-surplus-efficiency.html', status: 'todo'
        },
        {
          id: 'm03-02', title: '价格管制：上限与下限',
          en: 'Price controls: ceilings and floors',
          path: 'm03/02-price-controls.html', status: 'todo'
        },
        {
          id: 'm03-03', title: '税收归宿与无谓损失',
          en: 'Tax incidence and deadweight loss',
          path: 'm03/03-tax-incidence.html', status: 'todo'
        },
        {
          id: 'm03-04', title: '外部性与公共品',
          en: 'Externalities and public goods',
          path: 'm03/04-externalities-public-goods.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm04', number: 4, title: '企业与市场结构',
      en: 'Firms & market structure', part: 1,
      lessons: [
        {
          id: 'm04-01', title: '成本：固定、可变、边际与规模经济',
          en: 'Fixed, variable and marginal costs, and economies of scale',
          path: 'm04/01-costs-economies-of-scale.html', status: 'todo'
        },
        {
          id: 'm04-02', title: '完全竞争与垄断',
          en: 'Perfect competition and monopoly',
          path: 'm04/02-competition-monopoly.html', status: 'todo'
        },
        {
          id: 'm04-03', title: '寡头、价格歧视与反垄断',
          en: 'Oligopoly, price discrimination and antitrust',
          path: 'm04/03-oligopoly-price-discrimination.html', status: 'todo'
        },
        {
          id: 'm04-04', title: '平台、网络效应与零边际成本',
          en: 'Platforms, network effects and zero marginal cost',
          path: 'm04/04-platforms-network-effects.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm05', number: 5, title: '博弈与策略',
      en: 'Game theory', part: 1,
      lessons: [
        {
          id: 'm05-01', title: '纳什均衡与囚徒困境',
          en: 'Nash equilibrium and the prisoner\'s dilemma',
          path: 'm05/01-nash-equilibrium.html', status: 'todo'
        },
        {
          id: 'm05-02', title: '重复博弈与合作',
          en: 'Repeated games and cooperation',
          path: 'm05/02-repeated-games.html', status: 'todo'
        },
        {
          id: 'm05-03', title: '拍卖与机制设计入门',
          en: 'Introduction to auctions and mechanism design',
          path: 'm05/03-auctions-mechanism-design.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm06', number: 6, title: '信息与行为',
      en: 'Information & behavior', part: 1,
      lessons: [
        {
          id: 'm06-01', title: '逆向选择：柠檬市场',
          en: 'Adverse selection: the market for lemons',
          path: 'm06/01-adverse-selection.html', status: 'todo'
        },
        {
          id: 'm06-02', title: '道德风险与委托代理',
          en: 'Moral hazard and the principal-agent problem',
          path: 'm06/02-moral-hazard.html', status: 'todo'
        },
        {
          id: 'm06-03', title: '信号与筛选',
          en: 'Signaling and screening',
          path: 'm06/03-signaling-screening.html', status: 'todo'
        },
        {
          id: 'm06-04', title: '行为经济学：偏差与助推',
          en: 'Behavioral economics: biases and nudges',
          path: 'm06/04-behavioral-economics.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm07', number: 7, title: '劳动与分配',
      en: 'Labor & distribution', part: 1,
      lessons: [
        {
          id: 'm07-01', title: '劳动市场：工资如何决定',
          en: 'Labor markets: how wages are determined',
          path: 'm07/01-labor-market.html', status: 'todo'
        },
        {
          id: 'm07-02', title: '人力资本、技术与工资差距',
          en: 'Human capital, technology and wage differences',
          path: 'm07/02-human-capital.html', status: 'todo'
        },
        {
          id: 'm07-03', title: '不平等如何衡量',
          en: 'Measuring inequality',
          path: 'm07/03-measuring-inequality.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm08', number: 8, title: '衡量经济',
      en: 'Measuring the economy', part: 2,
      lessons: [
        {
          id: 'm08-01', title: 'GDP：在测量什么，漏掉了什么',
          en: 'GDP: what it measures and what it misses',
          path: 'm08/01-gdp.html', status: 'todo'
        },
        {
          id: 'm08-02', title: '通胀与 CPI',
          en: 'Inflation and the CPI',
          path: 'm08/02-inflation-cpi.html', status: 'todo'
        },
        {
          id: 'm08-03', title: '失业率：谁算失业',
          en: 'Unemployment: who counts as unemployed',
          path: 'm08/03-unemployment.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm09', number: 9, title: '长期增长',
      en: 'Long-run growth', part: 2,
      lessons: [
        {
          id: 'm09-01', title: '复利与增长的力量',
          en: 'The power of compounding and growth',
          path: 'm09/01-compounding-growth.html', status: 'todo'
        },
        {
          id: 'm09-02', title: '索洛模型：资本积累的极限',
          en: 'The Solow model: limits to capital accumulation',
          path: 'm09/02-solow-model.html', status: 'todo'
        },
        {
          id: 'm09-03', title: '技术、制度与国家贫富',
          en: 'Technology, institutions and the wealth of nations',
          path: 'm09/03-technology-institutions.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm10', number: 10, title: '货币与通胀',
      en: 'Money & inflation', part: 2,
      lessons: [
        {
          id: 'm10-01', title: '货币是什么',
          en: 'What is money?',
          path: 'm10/01-what-is-money.html', status: 'todo'
        },
        {
          id: 'm10-02', title: '银行如何创造货币',
          en: 'How banks create money',
          path: 'm10/02-banks-create-money.html', status: 'todo'
        },
        {
          id: 'm10-03', title: '通胀从哪来',
          en: 'Where inflation comes from',
          path: 'm10/03-causes-of-inflation.html', status: 'todo'
        },
        {
          id: 'm10-04', title: '恶性通胀与通缩',
          en: 'Hyperinflation and deflation',
          path: 'm10/04-hyperinflation-deflation.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm11', number: 11, title: '经济周期与稳定政策',
      en: 'Business cycles & policy', part: 2,
      lessons: [
        {
          id: 'm11-01', title: '总需求与总供给',
          en: 'Aggregate demand and aggregate supply',
          path: 'm11/01-aggregate-demand-supply.html', status: 'todo'
        },
        {
          id: 'm11-02', title: '财政政策、乘数与政府债务',
          en: 'Fiscal policy, multipliers and public debt',
          path: 'm11/02-fiscal-policy.html', status: 'todo'
        },
        {
          id: 'm11-03', title: '货币政策如何传导',
          en: 'How monetary policy is transmitted',
          path: 'm11/03-monetary-policy.html', status: 'todo'
        },
        {
          id: 'm11-04', title: '菲利普斯曲线与通胀预期',
          en: 'The Phillips curve and inflation expectations',
          path: 'm11/04-phillips-curve.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm12', number: 12, title: '金融市场',
      en: 'Financial markets', part: 2,
      lessons: [
        {
          id: 'm12-01', title: '利率与现值',
          en: 'Interest rates and present value',
          path: 'm12/01-interest-present-value.html', status: 'todo'
        },
        {
          id: 'm12-02', title: '债券与收益率曲线',
          en: 'Bonds and the yield curve',
          path: 'm12/02-bonds-yield-curve.html', status: 'todo'
        },
        {
          id: 'm12-03', title: '股票：估值与有效市场',
          en: 'Stocks: valuation and efficient markets',
          path: 'm12/03-stocks-efficient-markets.html', status: 'todo'
        },
        {
          id: 'm12-04', title: '银行挤兑、泡沫与金融危机',
          en: 'Bank runs, bubbles and financial crises',
          path: 'm12/04-bank-runs-financial-crises.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm13', number: 13, title: '开放经济',
      en: 'Open economy', part: 2,
      lessons: [
        {
          id: 'm13-01', title: '贸易的收益与关税的代价',
          en: 'Gains from trade and the costs of tariffs',
          path: 'm13/01-trade-tariffs.html', status: 'todo'
        },
        {
          id: 'm13-02', title: '汇率由什么决定',
          en: 'What determines exchange rates?',
          path: 'm13/02-exchange-rates.html', status: 'todo'
        },
        {
          id: 'm13-03', title: '国际收支与资本流动',
          en: 'Balance of payments and capital flows',
          path: 'm13/03-balance-of-payments.html', status: 'todo'
        },
        {
          id: 'm13-04', title: '汇率制度与货币危机',
          en: 'Exchange rate regimes and currency crises',
          path: 'm13/04-exchange-rate-regimes.html', status: 'todo'
        }
      ]
    },
    {
      id: 'm14', number: 14, title: '案例专题',
      en: 'Case studies', part: 3,
      lessons: [
        {
          id: 'm14-01', title: '2008 年全球金融危机',
          en: 'The global financial crisis of 2008',
          path: 'm14/01-global-financial-crisis.html', status: 'todo'
        },
        {
          id: 'm14-02', title: '2021~2023 年的通胀与加息',
          en: 'Inflation and interest rate hikes in 2021–2023',
          path: 'm14/02-inflation-rate-hikes.html', status: 'todo'
        },
        {
          id: 'm14-03', title: '关税与贸易摩擦',
          en: 'Tariffs and trade tensions',
          path: 'm14/03-tariffs-trade-tensions.html', status: 'todo'
        },
        {
          id: 'm14-04', title: '日本「失去的三十年」',
          en: 'Japan: the lost thirty years',
          path: 'm14/04-japan-lost-decades.html', status: 'todo'
        }
      ]
    }
  ];

  modules.forEach(function (module) {
    module.status = module.lessons.some(function (lesson) {
      return lesson.status === 'done';
    }) ? 'done' : 'todo';
  });

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function currentLessonId() {
    return document.body ? document.body.getAttribute('data-lesson') || '' : '';
  }

  // Paths in the data are relative to docs/, not to the deployment domain.
  function relativePrefix() {
    return currentLessonId() ? '../' : './';
  }

  function renderNavigation() {
    var target = document.querySelector('nav.modules');
    if (!target) return;

    var currentId = currentLessonId();
    var prefix = relativePrefix();
    var list = element('ol');

    modules.forEach(function (module) {
      var firstDone = module.lessons.find(function (lesson) {
        return lesson.status === 'done';
      });
      var isCurrent = module.lessons.some(function (lesson) {
        return lesson.id === currentId;
      });
      var item = element('li');
      var entry = element(firstDone ? 'a' : 'span', 'm' + (isCurrent ? ' current' : ''));
      entry.title = module.title + ' · ' + module.en;
      if (firstDone) {
        entry.setAttribute('href', prefix + firstDone.path);
      } else {
        entry.setAttribute('aria-disabled', 'true');
        entry.title += '（待做）';
      }
      if (isCurrent) entry.setAttribute('aria-current', 'true');
      entry.appendChild(element('i', '', String(module.number)));
      entry.appendChild(document.createTextNode(module.title));
      item.appendChild(entry);
      list.appendChild(item);
    });

    target.setAttribute('aria-label', '课程模块');
    target.replaceChildren(list);
  }

  function neighborEntry(lesson, label, relation) {
    if (!lesson) return element('span', '', label + '：暂无已完成的课程');
    var link = element('a', '', label + '：' + lesson.id + '　' + lesson.title);
    link.setAttribute('href', relativePrefix() + lesson.path);
    link.setAttribute('rel', relation);
    return link;
  }

  function renderFooter() {
    var target = document.querySelector('nav.next');
    if (!target) return;

    var lessons = modules.reduce(function (all, module) {
      return all.concat(module.lessons);
    }, []);
    var currentId = currentLessonId();
    var currentIndex = lessons.findIndex(function (lesson) {
      return lesson.id === currentId;
    });
    var previous = null;
    var next = null;

    // Use the complete order so even a lesson preview can skip unfinished neighbors.
    if (currentIndex !== -1) {
      for (var i = currentIndex - 1; i >= 0; i -= 1) {
        if (lessons[i].status === 'done') {
          previous = lessons[i];
          break;
        }
      }
      for (var j = currentIndex + 1; j < lessons.length; j += 1) {
        if (lessons[j].status === 'done') {
          next = lessons[j];
          break;
        }
      }
    }

    var neighbors = element('div', 'lesson-nav');
    neighbors.appendChild(neighborEntry(previous, '上一课', 'prev'));
    neighbors.appendChild(neighborEntry(next, '下一课', 'next'));
    var home = element('a', 'course-home', '返回课程首页');
    home.setAttribute('href', relativePrefix() + 'index.html');
    target.setAttribute('aria-label', '课程翻页');
    target.replaceChildren(neighbors, home);
  }

  function renderIndex() {
    var target = document.getElementById('course-index');
    if (!target) return;

    var prefix = relativePrefix();
    var content = document.createDocumentFragment();
    parts.forEach(function (part) {
      var section = element('section', 'course-part');
      var heading = element('h2', '', part.title);
      heading.id = 'part-' + part.id;
      section.setAttribute('aria-labelledby', heading.id);
      section.appendChild(heading);

      modules.filter(function (module) {
        return module.part === part.id;
      }).forEach(function (module) {
        var block = element('section', 'course-module');
        block.id = module.id;
        var title = element('h3', '', '模块 ' + module.number + '　' + module.title);
        title.id = module.id + '-title';
        block.setAttribute('aria-labelledby', title.id);
        var english = element('span', 'en', ' ' + module.en);
        english.setAttribute('lang', 'en');
        title.appendChild(english);
        block.appendChild(title);

        var list = element('ol', 'lesson-list');
        module.lessons.forEach(function (lesson) {
          var done = lesson.status === 'done';
          var item = element('li');
          item.id = lesson.id;
          var entry = element(done ? 'a' : 'span');
          if (done) entry.setAttribute('href', prefix + lesson.path);
          entry.appendChild(element('span', 'mono', lesson.id));
          entry.appendChild(document.createTextNode('　' + lesson.title));
          item.appendChild(entry);
          item.appendChild(document.createTextNode(' '));
          item.appendChild(element('span', 'lesson-state ' + lesson.status, done ? '完成' : '待做'));
          list.appendChild(item);
        });
        block.appendChild(list);
        section.appendChild(block);
      });
      content.appendChild(section);
    });
    target.replaceChildren(content);
  }

  window.Course = {
    parts: parts,
    modules: modules,
    renderNavigation: renderNavigation,
    renderFooter: renderFooter,
    renderIndex: renderIndex
  };

  function render() {
    renderNavigation();
    renderFooter();
    renderIndex();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render, { once: true });
  } else {
    render();
  }
})();
