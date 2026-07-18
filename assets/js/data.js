const data = {
            "چت‌بات‌ها و دستیارهای متنی": {
                icon: "💬",
                category: "content",
                tools: {
                    "ChatGPT": { desc: "مکالمه، نویسندگی، کدنویسی، پاسخ به سوالات عمومی", url: "https://chat.openai.com" },
                    "Claude": { desc: "تحلیل متن طولانی، نویسندگی، کدنویسی، استدلال", url: "https://claude.ai" },
                    "LMSYS Chatbot Arena": { desc: "مقایسه و چت رایگان با تمام مدل‌های قدرتمند", url: "https://chat.lmsys.org" },
                    "Gemini": { desc: "جستجو، تحلیل تصویر، ادغام با سرویس‌های گوگل", url: "https://gemini.google.com" },
                    "Copilot": { desc: "دستیار ویندوز، جستجو، کمک در نرم‌افزارهای مایکروسافت", url: "https://copilot.microsoft.com" },
                    "Perplexity": { desc: "جستجوی هوشمند با منبع‌دهی و پاسخ‌های دقیق", url: "https://www.perplexity.ai" },
                    "Grok": { desc: "چت‌بات توییتر/X با دسترسی به اطلاعات لحظه‌ای", url: "https://x.com/i/grok" },
                    "DeepSeek": { desc: "چت‌بات چینی قوی در ریاضی و کدنویسی", url: "https://www.deepseek.com" },
                    "Mistral/Le Chat": { desc: "چت‌بات اروپایی سبک و سریع", url: "https://chat.mistral.ai" },
                    "Pi": { desc: "مکالمه دوستانه و حمایت عاطفی", url: "https://pi.ai" },
                    "Character.AI": { desc: "چت با شخصیت‌های خیالی و سفارشی", url: "https://character.ai" },
                    "Replika": { desc: "دوست مجازی و همراه عاطفی", url: "https://replika.com" }
                }
            },
            "تولید تصویر": {
                icon: "🎨",
                category: "creative",
                tools: {
                    "Midjourney": { desc: "تصاویر هنری با کیفیت بالا و سبک منحصربفرد", url: "https://www.midjourney.com" },
                    "DALL-E 3": { desc: "تولید تصویر از متن، ادغام با ChatGPT", url: "https://openai.com/dall-e-3" },
                    "Stable Diffusion": { desc: "تولید تصویر رایگان و قابل نصب روی سیستم", url: "https://stability.ai" },
                    "Leonardo.AI": { desc: "تصاویر گیم و کاراکتر با کنترل بالا", url: "https://leonardo.ai" },
                    "Ideogram": { desc: "متخصص در تصاویر با متن فارسی/انگلیسی دقیق", url: "https://ideogram.ai" },
                    "Adobe Firefly": { desc: "تولید تصویر برای طراحان، ادغام با فتوشاپ", url: "https://firefly.adobe.com" },
                    "Bing Image Creator": { desc: "تولید تصویر رایگان با DALL-E", url: "https://www.bing.com/images/create" },
                    "Playground AI": { desc: "ویرایش و تولید تصویر رایگان", url: "https://playgroundai.com" },
                    "NightCafe": { desc: "تولید تصویر هنری با سبک‌های مختلف", url: "https://nightcafe.studio" },
                    "Canva AI": { desc: "طراحی گرافیک و پوستر با هوش مصنوعی", url: "https://www.canva.com" },
                    "Flux": { desc: "تولید تصویر واقع‌گرایانه جدید و قدرتمند", url: "https://flux.1" }
                }
            },
            "تولید ویدیو": {
                icon: "🎬",
                category: "creative",
                tools: {
                    "Sora": { desc: "تولید ویدیوی سینمایی از متن (OpenAI)", url: "https://openai.com/sora" },
                    "Runway Gen-3": { desc: "تولید و ویرایش ویدیو حرفه‌ای", url: "https://runwayml.com" },
                    "Pika Labs": { desc: "ساخت ویدیوهای کوتاه از متن/تصویر", url: "https://pika.art" },
                    "Kling": { desc: "تولید ویدیو چینی با کیفیت بالا", url: "https://kling.kuaishou.com" },
                    "Luma Dream Machine": { desc: "تبدیل تصویر به ویدیو واقع‌گرایانه", url: "https://lumalabs.ai/dream-machine" },
                    "HeyGen": { desc: "ساخت ویدیو با آواتار سخنگو", url: "https://www.heygen.com" },
                    "Synthesia": { desc: "ویدیوهای آموزشی با آواتار AI", url: "https://www.synthesia.io" },
                    "D-ID": { desc: "تبدیل عکس به ویدیوی سخنگو", url: "https://www.d-id.com" },
                    "Invideo AI": { desc: "ساخت خودکار ویدیو از متن", url: "https://invideo.io" },
                    "CapCut AI": { desc: "ویرایش هوشمند ویدیو", url: "https://www.capcut.com" },
                    "Veo 2": { desc: "تولید ویدیو جدید گوگل", url: "https://deepmind.google/technologies/veo" }
                }
            },
            "موسیقی و صدا": {
                icon: "🎵",
                category: "creative",
                tools: {
                    "Suno": { desc: "ساخت آهنگ کامل با خوانندگی از متن", url: "https://suno.com" },
                    "Udio": { desc: "تولید موسیقی حرفه‌ای با سبک‌های مختلف", url: "https://www.udio.com" },
                    "Mubert": { desc: "موسیقی بی‌کلام برای ویدیو و پادکست", url: "https://mubert.com" },
                    "AIVA": { desc: "آهنگسازی کلاسیک و سینمایی", url: "https://www.aiva.ai" },
                    "Boomy": { desc: "ساخت سریع موسیقی و انتشار در اسپاتیفای", url: "https://boomy.com" },
                    "Soundraw": { desc: "موسیقی سفارشی برای تولید محتوا", url: "https://soundraw.io" },
                    "Loudly": { desc: "ساخت موسیقی برای تبلیغات", url: "https://loudly.com" }
                }
            },
            "صدا و گفتار": {
                icon: "🎙️",
                category: "content",
                tools: {
                    "ElevenLabs": { desc: "کلون صدا و تبدیل متن به گفتار واقعی", url: "https://elevenlabs.io" },
                    "Whisper": { desc: "تبدیل گفتار به متن (ترنسکرایب)", url: "https://openai.com/research/whisper" },
                    "Murf": { desc: "صداگذاری حرفه‌ای برای ویدیو", url: "https://murf.ai" },
                    "Play.ht": { desc: "تبدیل متن به صدای طبیعی", url: "https://play.ht" },
                    "Resemble AI": { desc: "کلون صدا و ساخت صدای سفارشی", url: "https://www.resemble.ai" },
                    "Descript": { desc: "ویرایش صدا و حذف کلمات", url: "https://www.descript.com" },
                    "Speechify": { desc: "تبدیل متن به صدا برای مطالعه", url: "https://speechify.com" },
                    "Adobe Podcast": { desc: "بهبود کیفیت صدای ضبط شده", url: "https://podcast.adobe.com" }
                }
            },
            "کدنویسی": {
                icon: "💻",
                category: "development",
                tools: {
                    "GitHub Copilot": { desc: "تکمیل خودکار کد در IDE", url: "https://github.com/features/copilot" },
                    "Cursor": { desc: "ویرایشگر کد با AI داخلی", url: "https://cursor.sh" },
                    "Replit AI": { desc: "کدنویسی آنلاین با کمک AI", url: "https://replit.com" },
                    "Codeium": { desc: "جایگزین رایگان Copilot", url: "https://codeium.com" },
                    "Tabnine": { desc: "پیشنهاد کد هوشمند", url: "https://www.tabnine.com" },
                    "Amazon CodeWhisperer": { desc: "کدنویسی با تمرکز روی AWS", url: "https://aws.amazon.com/codewhisperer" },
                    "Sourcegraph Cody": { desc: "جستجو و درک کدبیس", url: "https://sourcegraph.com/cody" },
                    "Blackbox AI": { desc: "کپی کد از ویدیو و تصویر", url: "https://www.blackbox.ai" },
                    "v0.dev": { desc: "ساخت UI از توضیحات متنی", url: "https://v0.dev" },
                    "Bolt.new": { desc: "ساخت کامل اپلیکیشن با AI", url: "https://bolt.new" },
                    "Lovable": { desc: "ساخت وب‌اپ بدون کدنویسی", url: "https://lovable.dev" }
                }
            },
            "نویسندگی و محتوا": {
                icon: "✍️",
                category: "content",
                tools: {
                    "Jasper": { desc: "نوشتن محتوای مارکتینگ و تبلیغات", url: "https://www.jasper.ai" },
                    "Copy.ai": { desc: "کپی‌رایتینگ و متن تبلیغاتی", url: "https://www.copy.ai" },
                    "Writesonic": { desc: "مقاله، بلاگ و محتوای SEO", url: "https://writesonic.com" },
                    "Rytr": { desc: "نویسندگی سریع و ارزان", url: "https://rytr.me" },
                    "Notion AI": { desc: "نوشتن و سازماندهی در نوشن", url: "https://www.notion.so/product/ai" },
                    "Grammarly": { desc: "اصلاح گرامر و نگارش انگلیسی", url: "https://www.grammarly.com" },
                    "QuillBot": { desc: "پارافریز و بازنویسی متن", url: "https://quillbot.com" },
                    "Sudowrite": { desc: "کمک به نوشتن داستان و رمان", url: "https://www.sudowrite.com" },
                    "Wordtune": { desc: "بهبود سبک نوشتار", url: "https://www.wordtune.com" },
                    "Hyperwrite": { desc: "دستیار نوشتن شخصی", url: "https://hyperwriteai.com" }
                }
            },
            "کسب‌وکار و بهره‌وری": {
                icon: "📊",
                category: "business",
                tools: {
                    "Microsoft 365 Copilot": { desc: "AI در Word, Excel, PowerPoint", url: "https://www.microsoft.com/en-us/microsoft-365/enterprise/copilot" },
                    "Google Workspace AI": { desc: "AI در Docs, Sheets, Gmail", url: "https://workspace.google.com/solutions/ai" },
                    "Salesforce Einstein": { desc: "هوش مصنوعی برای CRM", url: "https://www.salesforce.com/products/einstein/overview" },
                    "Zoom AI": { desc: "خلاصه جلسات و ترنسکرایب", url: "https://www.zoom.us/ai" },
                    "Otter.ai": { desc: "ضبط و خلاصه جلسات", url: "https://otter.ai" },
                    "Fireflies": { desc: "دستیار جلسات و یادداشت‌برداری", url: "https://fireflies.ai" },
                    "Beautiful.ai": { desc: "ساخت پرزنتیشن خودکار", url: "https://www.beautiful.ai" },
                    "Tome": { desc: "ساخت اسلاید از متن", url: "https://tome.app" },
                    "Gamma": { desc: "ارائه و داکیومنت هوشمند", url: "https://gamma.app" },
                    "Mem": { desc: "یادداشت‌برداری با AI", url: "https://mem.ai" },
                    "Taskade": { desc: "مدیریت پروژه با AI", url: "https://www.taskade.com" }
                }
            },
            "تحقیق و آموزش": {
                icon: "🔬",
                category: "research",
                tools: {
                    "Google NotebookLM": { desc: "تبدیل جزوات و فایل‌ها به پادکست و پرسش‌وپاسخ هوشمند", url: "https://notebooklm.google.com" },
                    "Consensus": { desc: "جستجوی مقالات علمی با AI", url: "https://consensus.app" },
                    "Elicit": { desc: "دستیار تحقیق و بررسی مقالات", url: "https://elicit.com" },
                    "Scite": { desc: "بررسی استنادات علمی", url: "https://scite.ai" },
                    "Semantic Scholar": { desc: "جستجوی هوشمند مقالات", url: "https://www.semanticscholar.org" },
                    "ResearchRabbit": { desc: "کشف مقالات مرتبط", url: "https://www.researchrabbit.ai" },
                    "Scholarcy": { desc: "خلاصه‌سازی مقالات علمی", url: "https://www.scholarcy.com" },
                    "Khan Academy Khanmigo": { desc: "معلم خصوصی AI", url: "https://www.khanacademy.org/khan-labs" },
                    "Duolingo Max": { desc: "یادگیری زبان با AI", url: "https://www.duolingo.com" },
                    "Photomath": { desc: "حل مسائل ریاضی با دوربین", url: "https://photomath.com" },
                    "Socratic": { desc: "کمک در تکالیف درسی", url: "https://socratic.org" }
                }
            },
            "گیم و سرگرمی": {
                icon: "🎮",
                category: "creative",
                tools: {
                    "NVIDIA ACE": { desc: "شخصیت‌های NPC هوشمند در بازی", url: "https://developer.nvidia.com/ace" },
                    "Inworld AI": { desc: "ساخت کاراکتر بازی با شخصیت", url: "https://inworld.ai" },
                    "Scenario": { desc: "ساخت اَست گیم با AI", url: "https://www.scenario.com" },
                    "Ludo.ai": { desc: "ایده‌پردازی برای بازی‌سازی", url: "https://ludo.ai" },
                    "Promethean AI": { desc: "طراحی محیط بازی", url: "https://www.prometheanai.com" }
                }
            },
            "سلامت و پزشکی": {
                icon: "🏥",
                category: "advanced",
                tools: {
                    "Med-PaLM": { desc: "پاسخ به سوالات پزشکی (گوگل)", url: "https://sites.research.google/med-palm" },
                    "IBM Watson Health": { desc: "تحلیل داده‌های پزشکی", url: "https://www.ibm.com/industries/healthcare" },
                    "PathAI": { desc: "تشخیص بیماری از تصاویر پاتولوژی", url: "https://www.pathai.com" },
                    "Viz.ai": { desc: "تشخیص سکته از CT اسکن", url: "https://www.viz.ai" },
                    "Ada Health": { desc: "بررسی علائم بیماری", url: "https://ada.com" },
                    "Babylon Health": { desc: "مشاوره پزشکی اولیه", url: "https://www.babylonhealth.com" }
                }
            },
            "خودرو و حمل‌ونقل": {
                icon: "🚗",
                category: "advanced",
                tools: {
                    "Tesla Autopilot/FSD": { desc: "رانندگی خودکار تسلا", url: "https://www.tesla.com/autopilot" },
                    "Waymo": { desc: "تاکسی خودران گوگل", url: "https://waymo.com" },
                    "Cruise": { desc: "خودروهای خودران GM", url: "https://getcruise.com" },
                    "Mobileye": { desc: "سیستم کمک‌راننده اینتل", url: "https://www.mobileye.com" }
                }
            },
            "ویرایش تصویر": {
                icon: "🖼️",
                category: "creative",
                tools: {
                    "Adobe Photoshop AI": { desc: "Generative Fill و ویرایش هوشمند", url: "https://www.adobe.com/products/photoshop/generative-fill.html" },
                    "Remove.bg": { desc: "حذف پس‌زمینه خودکار", url: "https://www.remove.bg" },
                    "Cleanup.pictures": { desc: "حذف اشیاء ناخواسته از عکس", url: "https://cleanup.pictures" },
                    "Topaz AI": { desc: "افزایش کیفیت و رفع نویز عکس", url: "https://www.topazlabs.com" },
                    "Remini": { desc: "بهبود کیفیت عکس‌های قدیمی", url: "https://remini.ai" },
                    "Luminar Neo": { desc: "ویرایش عکس با AI", url: "https://skylum.com/luminar" },
                    "Photoroom": { desc: "ویرایش عکس محصول برای فروشگاه", url: "https://www.photoroom.com" },
                    "Clipdrop": { desc: "مجموعه ابزار ویرایش تصویر", url: "https://clipdrop.co" },
                    "Magnific AI": { desc: "آپسکیل تصویر با جزئیات", url: "https://magnific.ai" }
                }
            },
            "ساخت آواتار و 3D": {
                icon: "🎭",
                category: "creative",
                tools: {
                    "Ready Player Me": { desc: "ساخت آواتار 3D برای متاورس", url: "https://readyplayer.me" },
                    "Lensa AI": { desc: "ساخت آواتار هنری از سلفی", url: "https://prisma-ai.com/lensa" },
                    "Wonder Dynamics": { desc: "اضافه کردن کاراکتر CGI به ویدیو", url: "https://wonderdynamics.com" },
                    "Kaedim": { desc: "تبدیل تصویر 2D به مدل 3D", url: "https://www.kaedim3d.com" },
                    "Meshy": { desc: "ساخت مدل 3D از متن", url: "https://www.meshy.ai" },
                    "Spline AI": { desc: "طراحی 3D با AI", url: "https://spline.design/ai" }
                }
            },
            "ترجمه و زبان": {
                icon: "📱",
                category: "content",
                tools: {
                    "DeepL": { desc: "ترجمه با کیفیت بالا", url: "https://www.deepl.com" },
                    "Google Translate": { desc: "ترجمه ۱۰۰+ زبان رایگان", url: "https://translate.google.com" },
                    "Papago": { desc: "ترجمه زبان‌های آسیایی", url: "https://papago.naver.com" },
                    "Rask AI": { desc: "دوبله ویدیو به زبان‌های مختلف", url: "https://rask.ai" },
                    "Captions": { desc: "زیرنویس خودکار ویدیو", url: "https://www.captions.ai" }
                }
            },
            "امنیت و حریم خصوصی": {
                icon: "🔒",
                category: "advanced",
                tools: {
                    "Darktrace": { desc: "تشخیص تهدیدات سایبری", url: "https://darktrace.com" },
                    "CrowdStrike": { desc: "محافظت از endpoint با AI", url: "https://www.crowdstrike.com" },
                    "Vectra AI": { desc: "شناسایی حملات شبکه", url: "https://www.vectra.ai" }
                }
            },
            "دیتا و تحلیل": {
                icon: "📈",
                category: "business",
                tools: {
                    "Tableau AI": { desc: "تحلیل داده بصری", url: "https://www.tableau.com" },
                    "ThoughtSpot": { desc: "جستجوی داده با زبان طبیعی", url: "https://www.thoughtspot.com" },
                    "MonkeyLearn": { desc: "تحلیل متن و احساسات", url: "https://monkeylearn.com" },
                    "Obviously AI": { desc: "پیش‌بینی بدون کد", url: "https://www.obviously.ai" },
                    "Julius AI": { desc: "تحلیل داده با چت", url: "https://julius.ai" }
                }
            },
            "تجارت الکترونیک": {
                icon: "🛒",
                category: "business",
                tools: {
                    "Shopify Magic": { desc: "نوشتن توضیحات محصول", url: "https://www.shopify.com/magic" },
                    "Nosto": { desc: "شخصی‌سازی تجربه خرید", url: "https://www.nosto.com" },
                    "Vue.ai": { desc: "مدیریت محصول خودکار", url: "https://vue.ai" },
                    "Phrasee": { desc: "نوشتن ایمیل مارکتینگ", url: "https://phrasee.co" }
                }
            },
            "رباتیک و سخت‌افزار": {
                icon: "🤖",
                category: "advanced",
                tools: {
                    "Boston Dynamics": { desc: "ربات‌های متحرک پیشرفته", url: "https://www.bostondynamics.com" },
                    "Figure": { desc: "ربات انسان‌نما برای کار", url: "https://www.figure.ai" },
                    "Sanctuary AI": { desc: "ربات با هوش عمومی", url: "https://www.sanctuary.ai" },
                    "1X": { desc: "ربات‌های خانگی", url: "https://www.1x.tech" }
                }
            },
            "پلتفرم‌های ML": {
                icon: "🧠",
                category: "development",
                tools: {
                    "Google AI Studio": { desc: "پلتفرم توسعه و پروتوتایپ سریع با مدل‌های Gemini", url: "https://aistudio.google.com" },
                    "Hugging Face": { desc: "مدل‌های آماده و دیتاست", url: "https://huggingface.co" },
                    "Google Vertex AI": { desc: "توسعه مدل روی گوگل کلود", url: "https://cloud.google.com/vertex-ai" },
                    "AWS SageMaker": { desc: "آموزش مدل روی آمازون", url: "https://aws.amazon.com/sagemaker" },
                    "Azure ML": { desc: "پلتفرم ML مایکروسافت", url: "https://azure.microsoft.com/en-us/products/machine-learning" },
                    "Weights & Biases": { desc: "ترکینگ آزمایش‌های ML", url: "https://wandb.ai" },
                    "Replicate": { desc: "اجرای مدل‌ها با API", url: "https://replicate.com" }
                }
            },
            "سوشال مدیا": {
                icon: "💬",
                category: "business",
                tools: {
                    "Lately": { desc: "ساخت پست از محتوای طولانی", url: "https://www.lately.ai" },
                    "Ocoya": { desc: "زمان‌بندی و تولید محتوا", url: "https://www.ocoya.com" },
                    "Predis.ai": { desc: "طراحی پست سوشال", url: "https://predis.ai" },
                    "Publer": { desc: "مدیریت شبکه‌های اجتماعی", url: "https://publer.io" },
                    "Taplio": { desc: "رشد در لینکدین", url: "https://taplio.com" },
                    "Tweet Hunter": { desc: "رشد در توییتر", url: "https://tweethunter.io" }
                }
            },
            "استریم و پادکست": {
                icon: "🎥",
                category: "content",
                tools: {
                    "Podcastle": { desc: "ضبط و ویرایش پادکست", url: "https://podcastle.ai" },
                    "Riverside": { desc: "ضبط ویدیو با کیفیت بالا", url: "https://riverside.fm" },
                    "Descript": { desc: "ویرایش ویدیو/پادکست با متن", url: "https://www.descript.com" },
                    "Opus Clip": { desc: "برش کلیپ از ویدیوی طولانی", url: "https://www.opus.pro" },
                    "Vizard": { desc: "تبدیل ویدیو به کلیپ کوتاه", url: "https://vizard.ai" }
                }
            },
            "طراحی داخلی": {
                icon: "🏠",
                category: "creative",
                tools: {
                    "Interior AI": { desc: "طراحی مجدد اتاق با AI", url: "https://interiorai.com" },
                    "RoomGPT": { desc: "پیشنهاد دکوراسیون", url: "https://www.roomgpt.io" },
                    "Planner 5D": { desc: "طراحی خانه با AI", url: "https://planner5d.com" }
                }
            }
        };

const defaultProjects = [
          {
            name: "Diabetes Predictor",
            url: "https://github.com/mohammad-re2004/diabetes_predictor_app",
            author: "Mohammad-Reza",
            cat: ["Python","Streamlit","Prediction"],
            desc: "اپلیکیشن پیش‌بینی دیابت."
          },
          {
            name: "BrainVision AI",
            url: "https://alij-official.github.io/BrainVision-AI/",
            author: "علی جلیلیان",
            cat: ["Computer Vision","Web App"],
            desc: "پلتفرم بینایی ماشین."
          },
          {
            name: "Medical Ruleset Visualizer",
            url: "https://mr-amirasgari.github.io/medical-ruleset-visualizer/",
            author: "امیرمحمد عسگری",
            cat: ["Medical","Ruleset","Visualization"],
            desc: "مصورسازی قوانین پزشکی."
          },
             {
            name: "Diaco-Diabetes-Screening-Tool",
            url: "https://mohammadreza-shahbazi313.github.io/Diaco-Diabetes-Screening-Tool/",
            author: "محمدرضاشهبازی",
            cat: ["Medical","Ruleset","Visualization"],
            desc: "مصورسازی قوانین پزشکی."
          },
          {
            name: "Diabetes Rule Visualizer",
            url: "https://mr-amirasgari.github.io/diabetes-rule-visualizer/",
            author: "امیرمحمد عسگری",
            cat: ["Health","Diabetes","Ruleset"],
            desc: "دموی آموزشی برای نمایش قواعد ارزیابی ریسک دیابت."
          },
            {
            name: "دکتر رباتیک",
            url: "https://abolfazlghasemi83.github.io/diabetes_screening/",
            author: "ابوالفضل قاسمی",
            cat: ["Health","Diabetes","Ruleset"],
            desc: "دموی آموزشی برای نمایش قواعد ارزیابی ریسک دیابت."
          },
          {
            name: "سیستم قانون‌محور تشخیص دیابت",
            url: "https://fatemebabaei3813-oss.github.io/diabet/",
            author: "فاطمه بابایی",
            cat: ["Health","Diabetes","Ruleset"],
            desc: "سیستم قانون‌محور برای تشخیص و غربالگری دیابت."
          }
        ];

