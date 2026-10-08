import{o as e,t}from"./index-BytIeDQ0.js";import{t as n}from"./page-uWLslpFj.js";e();var r=`<main class="wrap">\r
    <h1>筆記區</h1>\r
    <div class="topics">\r
      <section class="topic" aria-labelledby="programming-basics">\r
        <h2 id="programming-basics">程式基礎</h2>\r
      </section>\r
      <section class="topic" aria-labelledby="ai-usage">\r
        <h2 id="ai-usage">AI 的使用方式</h2>\r
        <div class="subtopics">
          <div class="subtopic">如何下 Prompt</div>
          <div class="subtopic">模型的 Effort</div>
        </div>
        <h3 class="model-heading">模型等級：用價格換能力</h3>
        <p class="model-intro">可以把它想成四種工作檔位。平常從 Sol 或 Luna 開始，遇到難題再換更合適的檔位。<a href="https://developers.openai.com/api/docs/guides/model-selection" target="_blank" rel="noopener">核對 OpenAI 模型選用建議</a></p>
        <ul class="model-list">
          <li><strong><a href="https://developers.openai.com/api/docs/models/gpt-6-astra" target="_blank" rel="noopener">Astra（GPT-6）</a>｜高能力、高用量：</strong>最適合很難、步驟很多，或需要仔細判斷的任務。平常小問題通常不用開到這一檔。</li>
          <li><strong><a href="https://developers.openai.com/api/docs/models" target="_blank" rel="noopener">Sol（GPT-6）</a>｜能力與用量平衡：</strong>適合一般寫程式、整理資料、分析問題，是不知道選哪個時的穩妥起點。</li>
          <li><strong><a href="https://developers.openai.com/api/docs/guides/latest-model?model=gpt-5.6" target="_blank" rel="noopener">Terra（GPT-5.6）</a>｜實用、省用量：</strong>適合日常問題、簡單修改和摘要。它屬於較早一代，複雜任務的能力和 GPT-6 高階模型有差距。</li>
          <li><strong><a href="https://developers.openai.com/api/docs/models" target="_blank" rel="noopener">Luna（GPT-6）</a>｜快速、省用量：</strong>適合簡單問答、改寫、摘要等明確的小任務；碰到複雜推理時再換 Sol 或 Astra。</li>
        </ul>
        <p class="effort-note"><strong><a href="https://developers.openai.com/api/docs/guides/reasoning" target="_blank" rel="noopener">Effort 是模型思考的力道</a>。</strong>同一個模型調高 Effort，通常會花更多時間和用量處理難題；它不會把 Luna 變成 Astra。簡單任務選低或中，卡在多步推理再調高。</p>
        <p class="sources">價格感受是相對用量的簡化說法。Codex 訂閱內的實際用量依方案及模型而異，API 標價也不等於 Codex 扣量。參考：<a href="https://developers.openai.com/api/docs/models/gpt-6-astra" target="_blank" rel="noopener">GPT-6 Astra 官方模型文件</a>、<a href="https://developers.openai.com/api/docs/models" target="_blank" rel="noopener">GPT-6 Sol 與 Luna 模型列表</a>、<a href="https://developers.openai.com/api/docs/guides/latest-model?model=gpt-5.6" target="_blank" rel="noopener">GPT-5.6 模型指南</a>。</p>
      </section>
    </div>\r
  </main>`,i=`\r
.topics { display: grid; gap: 16px; margin-top: 32px; }\r
.topic { padding: 24px; border: 1px solid var(--line); background: rgba(255,253,249,.82); }\r
.topic h2 { margin: 0; color: var(--navy); font-size: clamp(1.35rem, 3vw, 1.8rem); }\r
.subtopics { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 16px; }\r
.subtopic { padding: 16px; border-left: 3px solid var(--blue); background: #f3f6f6; color: var(--ink); font-weight: 750; }\r
.model-intro { margin: 10px 0 0; color: var(--muted); }\r
.model-heading { margin: 24px 0 0; color: var(--navy); }\r
.model-list { display: grid; gap: 10px; margin: 16px 0 0; padding: 0; list-style: none; }\r
.model-list li { padding: 14px 16px; border: 1px solid var(--line); background: #fffdf9; }\r
.model-list strong { color: var(--navy); }\r
.effort-note { margin: 16px 0 0; padding: 14px 16px; border-left: 3px solid var(--coral); background: #fff7ed; color: #40576b; }\r
.sources { margin: 12px 0 0; color: var(--muted); font-size: .82rem; }\r
    @media (max-width: 600px) {\r
.subtopics { grid-template-columns: 1fr; } }\r
`,a={筆記區:`Note area`,"模型的 Effort":`Model Effort`,"筆記區｜UCL Urban Spatial Science MSc":`Notes Area｜UCL Urban Spatial Science MSc`,頁面導覽:`Page navigation`,"AI 的使用方式":`How AI is used`,"如何下 Prompt":`How to download Prompt`,程式基礎:`Programming basics`,總覽:`Overview`,課程總覽:`Overview`,資料來源:`Sources`,已選:`Selected`,"已選 · 15 credits":`Selected · 15 credits`,"閱讀詳解 →":`Read details →`,"官方來源 ↗":`Official source ↗`,已選的四門課:`Four selected modules`,"已選的四門 Term 2 課程":`Four selected Term 2 modules`,"查看先修關係 ↓":`See prerequisites ↓`,選修參考:`Elective reference`,"已選 · 詳解 →":`Selected · Details →`,"前往 CASA0010 完整課程詳解 →":`Read the full CASA0010 module details →`,"CASA0010 · 完整課程詳解":`CASA0010 · Full module details`},o=t();function s(){return(0,o.jsx)(n,{page:`notes`,content:r,pageStyles:i,pageTranslations:a})}export{s as default};