const headerData = [
    {
        name: "Home",
        id: ''
    },
    // {
    //     name: "About"
    // },
    {
        name: "Company Formation",
        subLists: [
            {
                name: "Partnership Firm",
                id: "partnership-firm"
            },
            {
                name: "Public Limited Company (PLC)",
                id: "public-limited-company"
            },
            {
                name: "One Person Company",
                id: "opc-company"
            },
            { 
                name: "Private-Limited Company",
                id: "private-limited-company"
            },
            {
                name: "Limited Liability Partnership",
                id: "limited-liability-partnership"
            },
            {
                name: "Proprietorship",
                id: "proprietorship"
            }
        ],
    },
    {
        name: "Registration",
        subLists: [
            {
                name: "GST Registration",
                id: "gst-registration"
            },
            {
                name: "Import Export Code",
                id: "import-export-code"
            },
            {
                name: "MSME Registration",
                id: "msme-registration"
            },
            {
                name: "FSSAI Registration",
                id: "fssai-registration"
            },
            {
                name: "TAN Registration",
                id: "tan-registration"
            },
            {
                name: "Shop Establishment Registration",
                id: "shop-establishment-registration"
            }
        ]
    },
    {
        name: "Compliances",
        subLists: [
            {
                name: "ITR Filling",
                id: "itr-filing"
            },
            {
                name: "GST Return Filling",
                id: "gst-return-filing"
            },
            {
                name: "TDS Return Filling",
                id: "tds-return-filing"
            }
        ]
    }
];

export const allServices = headerData
    .flatMap(data => data.subLists ? data.subLists.map(subData => subData.name) : [])
    .filter(Boolean); // Ensures no empty entries


const INCOME_TAX_IMG = "https://png.pngtree.com/png-vector/20190514/ourmid/pngtree-tax-file-format-icon-design-png-image_1040885.jpg";
const GST_IMG = "https://cdni.iconscout.com/illustration/premium/thumb/gst-illustration-download-in-svg-png-gif-file-formats--goods-and-services-tax-collection-income-return-business-illustrations-4125399.png";
const TDS_IMG = "https://5.imimg.com/data5/SELLER/Default/2022/4/VJ/XE/FO/90505249/tds-returns-consultancy-services-500x500.jpg";
const PARTNERSHIP_REGISTRATION = "https://png.pngtree.com/png-clipart/20191227/ourmid/pngtree-hand-drawn-business-handshake-png-image_2093391.jpg";
const ACCOUNTING_SERVICE = "https://png.pngitem.com/pimgs/s/246-2469317_accounting-cilpart-lofty-idea-accounting-clipart-transparent-background.png";
const COMPANY_ACCOUNTS = "https://png.pngtree.com/template/20191014/ourmid/pngtree-colorful-diagram-business-and-accounting-logo-image_318295.jpg";

export const servicesData = [
    {
        service: "Income Tax Returns",
        img: INCOME_TAX_IMG,
        desc: "Accurate and hassle-free filing for individuals and businesses"
    },
    {
        service: "GST Returns",
        img: GST_IMG,
        desc: "Seamless GST compliance with timely filing and expert support"
    },
    {
        service: "TDS Returns",
        img: TDS_IMG,
        desc: "Simplified TDS filing solutions to ensure complete compliance"
    },
    {
        service: "Partnership Registration",
        img: PARTNERSHIP_REGISTRATION,
        desc: "Streamlined partnership formation with end-to-end legal assistance"
    },
    {
        service: "Accounting Services",
        img: ACCOUNTING_SERVICE,
        desc: "Comprehensive bookkeeping and financial record management tailored for you"
    },
    {
        service: "Company Accounts",
        img: COMPANY_ACCOUNTS,
        desc: "Expert management of corporate finances for smooth operations"
    },
    {
        service: "Audit Support",
        img: "https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-audit-report-or-financial-report-study-png-image_4672458.png",
        desc: "Professional guidance for tax audits and verifications"
    },
    {
        service: "Investment Advisory",
        img: "https://static.vecteezy.com/system/resources/thumbnails/014/440/774/small_2x/financial-guru-or-expert-investment-profit-growth-financial-advisor-or-wealth-management-illustration-png.png",
        desc: "Smart investment strategies to reduce tax liabilities."
    }
];

export const reviewData = [
    {
        name: "— Rohit Sharma",
        review: "Filing my income tax returns has never been this smooth. Thanks to A&S TaxCare, I can relax knowing my finances are in expert hands",
        title: "Efficient and Reliable Service!"
    },
    {
        name: "— Priya Mehra",
        review: "I needed help with GST compliance, and A&S TaxCare delivered beyond my expectations. Clear communication and impeccable service!",
        title: "Professional and Transparent!"
    },
    {
        name: "— Amit Khurana",
        review: "Setting up my One Person Company seemed daunting, but A&S TaxCare made it effortless. Their expertise is unmatched!",
        title: "Hassle-Free OPC Registration!"
    },
    {
        name: "— Neha Joshi",
        review: "I saved a significant amount on taxes this year, all thanks to A&S TaxCare’s smart strategies. Highly recommend their services!",
        title: "Expert Advice You Can Trust!"
    },
    {
        name: "— Varun Kapoor",
        review: "I didn’t know where to start with registering my partnership firm. A&S TaxCare provided excellent guidance and quick service",
        title: "Great for Startups!"
    },
    {
        name: "— Kavita Jain",
        review: "A&S TaxCare has been handling my TDS returns flawlessly for years now. Timeliness and accuracy define their service",
        title: "Timely and Accurate!"
    }
];

export const serviceData_api = [
    {
        id: "partnership-firm",
        name: "Partnership Firm Registration",
        slogan: '"Simplify Your Business Journey with A&S TaxCare – Your Trusted Partner for Partnership Firm Registration!"',
        why: {
            heading: "Why Choose A&S TaxCare for Partnership Firm Registration?",
            ans: "At A&S TaxCare, we specialize in providing seamless and hassle-free registration services for Partnership Firms. With our expert guidance, transparent processes, and dedicated support, you can focus on growing your business while we handle the legalities. Our team ensures your partnership firm is registered efficiently and in compliance with the latest regulations.",
            whyBest: ["Experienced professionals with a proven track record.",
                "End-to-end support, from document preparation to final registration.",
                "Affordable, transparent pricing with no hidden fees."
            ],
        },
        what: {
            heading: "What is a Partnership Firm?",
            ans: "A Partnership Firm is a business entity where two or more individuals come together to conduct business and share profits and losses. Governed by the Indian Partnership Act, 1932, this structure is ideal for small and medium-sized businesses. It offers flexibility, ease of decision-making, and shared responsibilities among partners."
        },
        benefits: {
            heading: "Benefits of a Partnership Firm",
            points: [
                "Ease of Formation: Minimal formalities compared to other business structures.",
                "Shared Responsibilities: Workload and liabilities are divided among partners.",
                "Operational Flexibility: Quick decision-making without complex hierarchies.",
                "Profit Sharing: Clear profit-sharing ratios as agreed in the partnership deed.",
                "Legal Benefits: Registered firms enjoy legal protection and the ability to sue or be sued."
            ]
        },
        faq: {
            heading: "FAQs About Partnership Firms",
            questions: [
                {
                    ques: "Q1. Is it mandatory to register a Partnership Firm?",
                    ans: "A1. No, but registration provides legal benefits such as the ability to sue or claim disputes in court."
                },
                {
                    ques: "Q2. How many partners can a firm have?",
                    ans: "A2. A partnership firm can have a minimum of two partners and a maximum of 20 (10 for banking businesses)."
                },
                {
                    ques: "Q3. Can a Partnership Firm be converted into a Company?",
                    ans: "A3. Yes, it can be converted into a private limited company or LLP for better scalability and limited liability."
                },
                {
                    ques: "Q4. What is the cost of registering a Partnership Firm?",
                    ans: "A4. The cost varies depending on state regulations and the complexity of the partnership deed. Contact us for a detailed quote."
                }
            ]
        }
    },
    {
        "id": "private-limited-company",
        "name": "Private Limited Company Registration",
        "slogan": "\"Secure Your Business Future with A&S TaxCare – Your Trusted Partner for Private Limited Company Registration!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for Private Limited Company Registration?",
            "ans": "At A&S TaxCare, we simplify the process of Private Limited Company registration, ensuring a seamless experience for entrepreneurs and businesses. Our experts provide comprehensive assistance, from documentation to final approval, making sure your company is compliant with all regulatory requirements.",
            "whyBest": [
                "Team of experienced professionals with in-depth knowledge of company law.",
                "Streamlined process for fast and hassle-free registration.",
                "Affordable pricing with no hidden costs.",
                "Post-registration support, including compliance and filing services."
            ]
        },
        "what": {
            "heading": "What is a Private Limited Company?",
            "ans": "A Private Limited Company is a popular business structure in India, offering limited liability to its shareholders and separate legal entity status. It is ideal for small to medium-sized businesses seeking credibility, scalability, and funding opportunities. Governed by the Companies Act, 2013, it provides a perfect balance of operational flexibility and legal protection."
        },
        "benefits": {
            "heading": "Benefits of a Private Limited Company",
            "points": [
                "Limited Liability: Protects personal assets of shareholders.",
                "Separate Legal Entity: Enhances business credibility and facilitates legal processes.",
                "Ease of Fundraising: Attracts investments from venture capitalists and angel investors.",
                "Perpetual Succession: The company remains unaffected by changes in ownership.",
                "Tax Benefits: Eligible for certain tax exemptions and deductions."
            ]
        },
        "faq": {
            "heading": "FAQs About Private Limited Companies",
            "questions": [
                {
                    "ques": "Q1. How many directors are required to register a Private Limited Company?",
                    "ans": "A1. A minimum of two directors and a maximum of 15 are required."
                },
                {
                    "ques": "Q2. Can foreigners or NRIs register a Private Limited Company in India?",
                    "ans": "A2. Yes, foreigners and NRIs can register a Private Limited Company, subject to compliance with FEMA guidelines."
                },
                {
                    "ques": "Q3. How long does it take to register a Private Limited Company?",
                    "ans": "A3. The registration process typically takes 10-15 working days, depending on document verification and approvals."
                },
                {
                    "ques": "Q4. What is the minimum capital requirement for a Private Limited Company?",
                    "ans": "A4. There is no minimum capital requirement; you can register with any authorized capital."
                },
                {
                    "ques": "Q5. Do Private Limited Companies need to file annual returns?",
                    "ans": "A5. Yes, annual filing of returns and financial statements with the ROC is mandatory."
                }
            ]
        }
    },
    {
        "id": "opc-company",
        "name": "One Person Company Registration",
        "slogan": "\"Empower Solo Entrepreneurs with A&S TaxCare – Simplified OPC Registration!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for OPC Registration?",
            "ans": "At A&S TaxCare, we make One Person Company registration hassle-free and straightforward for aspiring entrepreneurs. Our expert team ensures compliance with legal requirements while delivering personalized support throughout the process.",
            "whyBest": [
                "Specialized in assisting solo entrepreneurs with customized solutions.",
                "Transparent and affordable pricing with no hidden charges.",
                "Comprehensive post-registration support, including compliance and filings."
            ]
        },
        "what": {
            "heading": "What is a One Person Company (OPC)?",
            "ans": "A One Person Company (OPC) is a type of company that allows a single individual to own and operate a business with limited liability. Introduced under the Companies Act, 2013, OPC provides the benefits of a private limited company while maintaining the simplicity of sole proprietorship."
        },
        "benefits": {
            "heading": "Benefits of a One Person Company",
            "points": [
                "Limited Liability: Protects personal assets of the sole owner.",
                "Separate Legal Entity: The OPC enjoys its own legal identity, separate from the owner.",
                "Ease of Management: No complexities of a multi-owner structure.",
                "Credibility: Builds trust among clients and investors as a corporate entity.",
                "Tax Benefits: Access to specific exemptions and deductions."
            ]
        },
        "faq": {
            "heading": "FAQs About One Person Companies",
            "questions": [
                {
                    "ques": "Q1. Who can register a One Person Company?",
                    "ans": "A1. Only an Indian citizen and resident can register an OPC, with no prior company ownership."
                },
                {
                    "ques": "Q2. Can an OPC have multiple directors?",
                    "ans": "A2. Yes, an OPC can have up to 15 directors, but only one shareholder."
                },
                {
                    "ques": "Q3. What is the maximum turnover for an OPC?",
                    "ans": "A3. The turnover limit for an OPC is ₹2 crore; exceeding this requires conversion into a Private Limited Company."
                },
                {
                    "ques": "Q4. How is an OPC different from a sole proprietorship?",
                    "ans": "A4. An OPC offers limited liability and a separate legal entity, unlike sole proprietorships."
                },
                {
                    "ques": "Q5. Can an OPC convert into another company structure?",
                    "ans": "A5. Yes, an OPC can be converted into a Private Limited or Public Limited Company upon meeting regulatory criteria."
                }
            ]
        }
    },
    {
        "id": "public-limited-company",
        "name": "Public Limited Company Registration",
        "slogan": "\"Transforming Aspirations into Reality with A&S TaxCare – Your Expert Guide for Public Limited Company Registration!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for Public Limited Company Registration?",
            "ans": "A&S TaxCare specializes in guiding businesses through the complex process of Public Limited Company registration. With our expert assistance, you can ensure compliance with all legal requirements while focusing on your company's growth and public investment opportunities.",
            "whyBest": [
                "Experienced professionals with expertise in corporate laws and regulations.",
                "End-to-end support, from documentation to final incorporation.",
                "Affordable and transparent services tailored to your business needs.",
                "Post-registration assistance, including compliance, filings, and investor relations."
            ]
        },
        "what": {
            "heading": "What is a Public Limited Company?",
            "ans": "A Public Limited Company is a business entity that allows the public to invest by offering shares. Governed by the Companies Act, 2013, it provides limited liability, separate legal status, and access to a broad pool of investors, making it ideal for large-scale businesses aiming to expand and raise capital."
        },
        "benefits": {
            "heading": "Benefits of a Public Limited Company",
            "points": [
                "Access to Capital: Raise funds through public investment and IPOs.",
                "Separate Legal Entity: Operates as an independent legal entity.",
                "Limited Liability: Protects the personal assets of shareholders.",
                "Enhanced Credibility: Preferred by investors, lenders, and stakeholders.",
                "Perpetual Succession: Unaffected by changes in ownership or management."
            ]
        },
        "faq": {
            "heading": "FAQs About Public Limited Companies",
            "questions": [
                {
                    "ques": "Q1. How many members are required to form a Public Limited Company?",
                    "ans": "A1. A minimum of 7 members and 3 directors are required to form a Public Limited Company."
                },
                {
                    "ques": "Q2. Can a Public Limited Company be listed on the stock exchange?",
                    "ans": "A2. Yes, Public Limited Companies can list their shares on stock exchanges to raise public capital."
                },
                {
                    "ques": "Q3. What is the minimum capital requirement for a Public Limited Company?",
                    "ans": "A3. The minimum authorized capital is ₹5 lakh, but there is no upper limit."
                },
                {
                    "ques": "Q4. Are Public Limited Companies required to hold annual meetings?",
                    "ans": "A4. Yes, holding an Annual General Meeting (AGM) is mandatory under the Companies Act, 2013."
                },
                {
                    "ques": "Q5. What are the compliance requirements for a Public Limited Company?",
                    "ans": "A5. Public Limited Companies must adhere to stricter compliance, including filing annual returns, financial statements, and meeting SEBI guidelines if listed."
                }
            ]
        }
    },
    {
        "id": "limited-liability-partnership",
        "name": "Limited Liability Partnership Registration",
        "slogan": "\"Partner with Confidence – A&S TaxCare Simplifies Your LLP Registration!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for LLP Registration?",
            "ans": "A&S TaxCare brings unparalleled expertise in Limited Liability Partnership (LLP) registration, ensuring a seamless and efficient process. With our professional team, we handle every step of the registration process, allowing you to focus on your business goals.",
            "whyBest": [
                "Experienced professionals with in-depth knowledge of LLP compliance.",
                "Streamlined processes for quick and efficient registration.",
                "Affordable, transparent pricing with no hidden costs.",
                "Post-registration compliance support for hassle-free operations."
            ]
        },
        "what": {
            "heading": "What is a Limited Liability Partnership (LLP)?",
            "ans": "A Limited Liability Partnership (LLP) is a hybrid business structure that combines the advantages of a partnership and a company. Governed by the Limited Liability Partnership Act, 2008, LLPs offer the flexibility of a partnership along with limited liability for the partners, making it a popular choice for professionals and small businesses."
        },
        "benefits": {
            "heading": "Benefits of a Limited Liability Partnership (LLP)",
            "points": [
                "Limited Liability: Protects personal assets of the partners.",
                "Separate Legal Entity: Operates as a distinct legal entity from its partners.",
                "Operational Flexibility: Less compliance compared to private limited companies.",
                "Ease of Formation: Minimal legal requirements and lower costs.",
                "Tax Efficiency: LLPs are not subject to Dividend Distribution Tax (DDT)."
            ]
        },
        "faq": {
            "heading": "FAQs About Limited Liability Partnerships",
            "questions": [
                {
                    "ques": "Q1. How many partners are required to form an LLP?",
                    "ans": "A1. An LLP requires a minimum of two partners, with no upper limit on the maximum number."
                },
                {
                    "ques": "Q2. Can a company or foreign national be a partner in an LLP?",
                    "ans": "A2. Yes, companies, LLPs, and foreign nationals can be partners, subject to compliance with relevant laws."
                },
                {
                    "ques": "Q3. Is an LLP required to file annual returns?",
                    "ans": "A3. Yes, LLPs must file annual returns and a statement of accounts and solvency with the Registrar."
                },
                {
                    "ques": "Q4. What is the capital requirement for forming an LLP?",
                    "ans": "A4. There is no minimum capital requirement for forming an LLP; partners can contribute as per mutual agreement."
                },
                {
                    "ques": "Q5. How is an LLP different from a traditional partnership?",
                    "ans": "A5. Unlike traditional partnerships, LLPs provide limited liability protection and are recognized as separate legal entities."
                }
            ]
        }
    },
    {
        "id": "proprietorship",
        "name": "Proprietorship Registration",
        "slogan": "\"Your Business, Simplified – A&S TaxCare for Sole Proprietorship Registration!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for Sole Proprietorship Registration?",
            "ans": "A&S TaxCare simplifies Sole Proprietorship registration, providing end-to-end support tailored to individual entrepreneurs. We ensure a smooth and efficient process, allowing you to focus on growing your business while we handle the legal and compliance requirements.",
            "whyBest": [
                "Expert guidance tailored to your unique business needs.",
                "Quick and efficient registration with minimal paperwork.",
                "Transparent and competitive pricing.",
                "Post-registration compliance and advisory support."
            ]
        },
        "what": {
            "heading": "What is a Sole Proprietorship?",
            "ans": "A Sole Proprietorship is the simplest and most common form of business in India, where an individual owns, manages, and controls the business. It is ideal for small-scale businesses and freelancers, offering ease of operation with minimal compliance requirements."
        },
        "benefits": {
            "heading": "Benefits of a Sole Proprietorship",
            "points": [
                "Ease of Formation: No complex registration processes or legal formalities.",
                "Complete Control: The proprietor has full control over the business operations and profits.",
                "Minimal Compliance: Simple tax filings and minimal regulatory requirements.",
                "Cost-Effective: Low setup and maintenance costs compared to other business structures.",
                "Quick Decision-Making: No need for approvals from partners or boards."
            ]
        },
        "faq": {
            "heading": "FAQs About Sole Proprietorship",
            "questions": [
                {
                    "ques": "Q1. Is it mandatory to register a Sole Proprietorship?",
                    "ans": "A1. Registration is not mandatory but advisable for legal recognition and tax compliance."
                },
                {
                    "ques": "Q2. Can I open a bank account for my Sole Proprietorship?",
                    "ans": "A2. Yes, you can open a current account by providing a GST registration, Shop Act license, or any other business proof."
                },
                {
                    "ques": "Q3. What are the tax implications for a Sole Proprietorship?",
                    "ans": "A3. The income of a sole proprietorship is taxed as the personal income of the proprietor under the Income Tax Act."
                },
                {
                    "ques": "Q4. Can a Sole Proprietorship be converted into a Private Limited Company?",
                    "ans": "A4. Yes, a Sole Proprietorship can be converted into a Private Limited Company as the business grows."
                },
                {
                    "ques": "Q5. What is the liability of a Sole Proprietor?",
                    "ans": "A5. The liability is unlimited, meaning the proprietor is personally responsible for all business debts and obligations."
                }
            ]
        }
    },
    {
        "id": "gst-registration",
        "name": "GST Registration",
        "slogan": "\"Simplifying Taxes for Your Business – A&S TaxCare for GST Registration!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for GST Registration?",
            "ans": "A&S TaxCare provides a hassle-free GST registration process tailored to your business needs. Our team of experts ensures a quick, accurate, and transparent registration experience while guiding you through all legal formalities.",
            "whyBest": [
                "Expert consultation to determine GST applicability for your business.",
                "Efficient registration process with minimal documentation.",
                "Transparent and competitive pricing with no hidden charges.",
                "Dedicated support for post-registration compliance and filings."
            ]
        },
        "what": {
            "heading": "What is GST Registration?",
            "ans": "GST Registration is the process of registering your business under the Goods and Services Tax (GST) system. It is a mandatory requirement for businesses whose turnover exceeds the prescribed threshold or those engaged in inter-state transactions. Once registered, businesses receive a unique GST Identification Number (GSTIN) for tax compliance."
        },
        "benefits": {
            "heading": "Benefits of GST Registration",
            "points": [
                "Legal Compliance: Mandatory for businesses to operate within the law.",
                "Input Tax Credit: Claim credit for GST paid on purchases, reducing overall tax liability.",
                "Enhanced Credibility: Builds trust among customers and partners with a valid GSTIN.",
                "Ease of Doing Business: Simplifies tax filing and compliance processes.",
                "Nationwide Recognition: Enables inter-state transactions without additional taxes."
            ]
        },
        "faq": {
            "heading": "FAQs About GST Registration",
            "questions": [
                {
                    "ques": "Q1. Who needs to register for GST?",
                    "ans": "A1. Businesses with annual turnover exceeding ₹20 lakh (₹10 lakh for special category states) or those involved in inter-state trade must register for GST."
                },
                {
                    "ques": "Q2. Is GST registration mandatory for small businesses?",
                    "ans": "A2. GST registration is not mandatory for businesses below the turnover threshold unless they voluntarily opt for it to avail benefits like Input Tax Credit."
                },
                {
                    "ques": "Q3. What is the penalty for not registering under GST?",
                    "ans": "A3. Non-registration attracts a penalty of 10% of the tax amount, subject to a minimum of ₹10,000."
                },
                {
                    "ques": "Q4. Can an individual register for GST?",
                    "ans": "A4. Yes, individuals providing taxable goods or services can register under GST."
                },
                {
                    "ques": "Q5. How long does it take to get a GSTIN?",
                    "ans": "A5. The GST registration process typically takes 7-10 working days, provided all documents are in order."
                }
            ]
        }
    },
    {
        "id": "import-export-code",
        "name": "Import Export Code Registration",
        "slogan": "\"Expand Your Global Reach – A&S TaxCare for IEC Registration!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for IEC Registration?",
            "ans": "A&S TaxCare offers a seamless process for obtaining your Import Export Code (IEC). Our expertise ensures hassle-free documentation and swift approval, enabling your business to venture into international markets confidently.",
            "whyBest": [
                "End-to-end assistance with documentation and application.",
                "Quick and efficient processing of your IEC application.",
                "Affordable pricing with no hidden costs.",
                "Post-registration support for import-export compliance."
            ]
        },
        "what": {
            "heading": "What is an Import Export Code (IEC)?",
            "ans": "An Import Export Code (IEC) is a unique 10-digit code issued by the Directorate General of Foreign Trade (DGFT). It is mandatory for businesses or individuals engaging in import or export activities. This code is a one-time registration required for all international trade transactions."
        },
        "benefits": {
            "heading": "Benefits of IEC Registration",
            "points": [
                "Legal Requirement: Mandatory for import-export businesses in India.",
                "Global Expansion: Enables businesses to trade internationally.",
                "No Annual Compliance: No renewal or annual compliance required once issued.",
                "Government Benefits: Access to schemes like duty exemptions and export incentives.",
                "Ease of Transactions: Smooth processing of international payments and shipments."
            ]
        },
        "faq": {
            "heading": "FAQs About Import Export Code (IEC)",
            "questions": [
                {
                    "ques": "Q1. Who needs an IEC?",
                    "ans": "A1. Businesses or individuals engaged in the import or export of goods and services require an IEC."
                },
                {
                    "ques": "Q2. Is there an expiry date for an IEC?",
                    "ans": "A2. No, IEC is valid for a lifetime and does not require renewal."
                },
                {
                    "ques": "Q3. Can an individual obtain an IEC?",
                    "ans": "A3. Yes, individuals involved in import-export activities can apply for an IEC."
                },
                {
                    "ques": "Q4. Are there any penalties for not having an IEC?",
                    "ans": "A4. Yes, conducting import-export activities without an IEC can lead to legal complications and fines."
                },
                {
                    "ques": "Q5. How long does it take to get an IEC?",
                    "ans": "A5. IEC registration typically takes 5-7 working days after submitting all required documents."
                }
            ]
        }
    },
    {
        "id": "msme-registration",
        "name": "MSME Registration",
        "slogan": "\"Empowering Small Businesses – A&S TaxCare for MSME Registration!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for MSME Registration?",
            "ans": "A&S TaxCare ensures a seamless MSME registration process for your business. With our expertise and attention to detail, we help you unlock the benefits of being a recognized Micro, Small, or Medium Enterprise under the MSME Development Act.",
            "whyBest": [
                "Expert guidance to simplify the registration process.",
                "Quick turnaround with minimal paperwork.",
                "Affordable pricing with no hidden costs.",
                "Support in availing post-registration benefits like subsidies and loans."
            ]
        },
        "what": {
            "heading": "What is MSME Registration?",
            "ans": "MSME Registration is the process of registering a business under the Micro, Small, and Medium Enterprises Development (MSMED) Act, 2006. This registration provides businesses with government benefits, such as subsidies, tax incentives, and access to financial assistance, aimed at promoting growth and sustainability."
        },
        "benefits": {
            "heading": "Benefits of MSME Registration",
            "points": [
                "Financial Assistance: Easy access to loans at lower interest rates.",
                "Government Subsidies: Eligibility for subsidies and tax rebates.",
                "Market Protection: Support in receiving payments from buyers and government entities.",
                "Ease of Business: Preference in government tenders and contracts.",
                "Technology Support: Assistance in upgrading technology for business improvement."
            ]
        },
        "faq": {
            "heading": "FAQs About MSME Registration",
            "questions": [
                {
                    "ques": "Q1. Who can apply for MSME registration?",
                    "ans": "A1. Businesses classified as Micro, Small, or Medium Enterprises in manufacturing or service sectors can apply."
                },
                {
                    "ques": "Q2. Is MSME registration mandatory?",
                    "ans": "A2. It is not mandatory but highly beneficial for accessing government schemes and incentives."
                },
                {
                    "ques": "Q3. What is the validity of MSME registration?",
                    "ans": "A3. MSME registration is valid as long as the business meets the eligibility criteria for its category."
                },
                {
                    "ques": "Q4. Can a trader apply for MSME registration?",
                    "ans": "A4. No, only businesses involved in manufacturing, production, or services are eligible."
                },
                {
                    "ques": "Q5. How long does it take to get MSME registration?",
                    "ans": "A5. The process usually takes 2-3 working days, provided all documents are submitted correctly."
                }
            ]
        }
    },
    {
        "id": "fssai-registration",
        "name": "FSSAI Registration",
        "slogan": "\"Ensure Safe and Hygienic Food Practices – A&S TaxCare for FSSAI Registration!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for FSSAI Registration?",
            "ans": "A&S TaxCare simplifies FSSAI Registration for your food business, ensuring compliance with food safety regulations. Our expertise guarantees a hassle-free experience, enabling you to focus on delivering quality and safe food products.",
            "whyBest": [
                "Expert assistance to navigate FSSAI regulations.",
                "Quick and smooth registration process.",
                "Affordable pricing with transparent fees.",
                "Support for maintaining compliance post-registration."
            ]
        },
        "what": {
            "heading": "What is FSSAI Registration?",
            "ans": "FSSAI Registration is a mandatory process for businesses involved in food manufacturing, processing, storage, distribution, and sale. It ensures compliance with the Food Safety and Standards Act, 2006, aiming to maintain food safety standards and protect public health."
        },
        "benefits": {
            "heading": "Benefits of FSSAI Registration",
            "points": [
                "Legal Compliance: Operate legally in the food business industry.",
                "Consumer Trust: Boosts customer confidence in food safety and hygiene.",
                "Government Benefits: Access to government schemes and funding for food businesses.",
                "Business Expansion: Required for exports and expanding into new markets.",
                "Brand Value: Enhances the credibility and reputation of your food products."
            ]
        },
        "faq": {
            "heading": "FAQs About FSSAI Registration",
            "questions": [
                {
                    "ques": "Q1. Who needs FSSAI registration?",
                    "ans": "A1. All food business operators, including manufacturers, traders, transporters, and storage facilities, must register with FSSAI."
                },
                {
                    "ques": "Q2. What is the difference between FSSAI registration and a license?",
                    "ans": "A2. Registration is for small-scale food businesses, while licenses are required for larger businesses based on turnover and operations."
                },
                {
                    "ques": "Q3. How long is the FSSAI registration valid?",
                    "ans": "A3. FSSAI registration is valid for 1 to 5 years, depending on the period chosen during the application."
                },
                {
                    "ques": "Q4. Can I operate a food business without FSSAI registration?",
                    "ans": "A4. No, operating without FSSAI registration is illegal and can attract heavy penalties."
                },
                {
                    "ques": "Q5. How long does it take to complete FSSAI registration?",
                    "ans": "A5. The process usually takes 7-10 working days after submitting all required documents."
                }
            ]
        }
    },
    {
        "id": "tan-registration",
        "name": "TAN Registration",
        "slogan": "\"Stay Compliant with Tax Deduction – A&S TaxCare for TAN Registration!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for TAN Registration?",
            "ans": "A&S TaxCare provides a streamlined and efficient process for obtaining your Tax Deduction and Collection Account Number (TAN). Our expert team ensures quick registration, accuracy in documentation, and compliance with all legal requirements, allowing you to focus on your core business operations.",
            "whyBest": [
                "Expert guidance on TAN application and tax deduction compliance.",
                "Efficient and hassle-free registration process.",
                "Transparent pricing with no hidden fees.",
                "Ongoing support for all tax-related matters."
            ]
        },
        "what": {
            "heading": "What is TAN Registration?",
            "ans": "TAN (Tax Deduction and Collection Account Number) is a unique 10-digit number issued by the Income Tax Department for businesses or individuals who are required to deduct or collect tax at source. TAN is essential for remitting the tax deducted or collected to the government."
        },
        "benefits": {
            "heading": "Benefits of TAN Registration",
            "points": [
                "Legal Requirement: Mandatory for all entities deducting or collecting tax at source.",
                "Avoid Penalties: Helps avoid penalties for non-compliance with TDS regulations.",
                "Simplified Tax Remittance: Enables proper submission of TDS/TCS payments to the government.",
                "Improves Credibility: Being registered for TAN enhances business credibility in financial dealings.",
                "Streamlined Tax Filing: Easier reconciliation of tax deducted and collected with government records."
            ]
        },
        "faq": {
            "heading": "FAQs About TAN Registration",
            "questions": [
                {
                    "ques": "Q1. Who is required to obtain a TAN?",
                    "ans": "A1. Any individual or entity deducting or collecting tax at source (TDS/TCS), such as employers, banks, or businesses making payments to contractors or professionals, must obtain a TAN."
                },
                {
                    "ques": "Q2. Is TAN registration mandatory?",
                    "ans": "A2. Yes, TAN registration is mandatory for any person or entity involved in tax deduction or collection at source under the Income Tax Act."
                },
                {
                    "ques": "Q3. How long does it take to get a TAN?",
                    "ans": "A3. The process typically takes 7-10 working days, depending on the completeness of your application and documents."
                },
                {
                    "ques": "Q4. Can TAN be applied online?",
                    "ans": "A4. Yes, TAN registration can be done online through the official Income Tax Department portal."
                },
                {
                    "ques": "Q5. What happens if a business does not apply for TAN?",
                    "ans": "A5. Failure to obtain TAN can result in penalties for non-compliance, and TDS/TCS payments may be rejected."
                }
            ]
        }
    },
    {
        "id": "shop-establishment-registration",
        "name": "Shop & Establishment Registration",
        "slogan": "\"Ensure Legal Compliance for Your Business – A&S TaxCare for Shop Establishment Registration!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for Shop & Establishment Registration?",
            "ans": "A&S TaxCare helps you register your shop or commercial establishment with ease, ensuring compliance with local labor laws and regulations. Our expert team guides you through the registration process, ensuring your business stays compliant and operates smoothly.",
            "whyBest": [
                "Expert guidance on shop and establishment registration.",
                "Quick and efficient processing for timely compliance.",
                "Transparent pricing with no hidden charges.",
                "Post-registration support for ongoing compliance and renewals."
            ]
        },
        "what": {
            "heading": "What is Shop & Establishment Registration?",
            "ans": "Shop & Establishment Registration is mandatory for businesses operating in the commercial sector, such as shops, hotels, restaurants, and other establishments. It is governed by the Shop and Establishment Act of each state in India. This registration ensures that the business complies with local labor laws regarding working hours, wages, and conditions."
        },
        "benefits": {
            "heading": "Benefits of Shop & Establishment Registration",
            "points": [
                "Legal Requirement: Ensures compliance with labor laws and local regulations.",
                "Employee Welfare: Ensures that businesses follow proper work conditions and provide statutory benefits to employees.",
                "Government Benefits: Access to schemes related to labor welfare and ease of conducting business.",
                "Credibility: Adds legitimacy to your business, increasing trust among customers and employees.",
                "Avoid Penalties: Prevents legal consequences and penalties due to non-compliance with state regulations."
            ]
        },
        "faq": {
            "heading": "FAQs About Shop & Establishment Registration",
            "questions": [
                {
                    "ques": "Q1. Who needs Shop & Establishment Registration?",
                    "ans": "A1. Any business that operates a shop, commercial establishment, or any other similar business, including factories, offices, and restaurants, needs to register under the Shop and Establishment Act."
                },
                {
                    "ques": "Q2. Is Shop & Establishment Registration mandatory?",
                    "ans": "A2. Yes, it is mandatory under the Shop and Establishment Act for businesses to register with the local authorities in order to comply with labor laws and regulations."
                },
                {
                    "ques": "Q3. How long does it take to complete Shop & Establishment Registration?",
                    "ans": "A3. The process generally takes 7-10 working days, depending on the state and the completeness of your documentation."
                },
                {
                    "ques": "Q4. What documents are required for registration?",
                    "ans": "A4. Typically, documents like proof of business address, identity proof of the owner, and details of employees are required. The exact documents may vary by state."
                },
                {
                    "ques": "Q5. Is Shop & Establishment Registration valid for a lifetime?",
                    "ans": "A5. No, the registration needs to be renewed periodically, as per the local rules of the respective state."
                }
            ]
        }
    },
    {
        "id": "itr-filing",
        "name": "ITR Filing",
        "slogan": "\"Simplify Your Tax Filing – A&S TaxCare for Hassle-Free ITR Filing!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for ITR Filing?",
            "ans": "At A&S TaxCare, we provide expert assistance with Income Tax Return (ITR) filing, ensuring accuracy and compliance with the latest tax laws. Whether you're an individual, a business, or a freelancer, we make sure your tax filings are timely, efficient, and error-free.",
            "whyBest": [
                "Experienced tax professionals to guide you through the filing process.",
                "Ensure maximum tax benefits and refunds with expert advice.",
                "Seamless online filing with minimal paperwork.",
                "Affordable pricing with no hidden charges."
            ]
        },
        "what": {
            "heading": "What is ITR Filing?",
            "ans": "ITR (Income Tax Return) filing is the process of submitting a declaration of your income and tax paid to the Income Tax Department. It is a legal requirement for individuals, businesses, and other entities earning taxable income. Filing ITR allows you to pay taxes due and claim any eligible refunds."
        },
        "benefits": {
            "heading": "Benefits of ITR Filing",
            "points": [
                "Legal Compliance: Helps avoid penalties and legal consequences for non-compliance.",
                "Tax Refunds: Eligible individuals and businesses can receive refunds for excess tax paid.",
                "Financial Record: A proper ITR serves as an official record of income for loans and other financial services.",
                "Carry Forward Losses: You can carry forward business or capital loss to offset future tax liabilities.",
                "Avoid Penalties: Timely filing ensures you avoid interest and penalties for late submission."
            ]
        },
        "faq": {
            "heading": "FAQs About ITR Filing",
            "questions": [
                {
                    "ques": "Q1. Who needs to file an ITR?",
                    "ans": "A1. Any individual or entity with taxable income above the exempted threshold needs to file ITR."
                },
                {
                    "ques": "Q2. What documents are needed for ITR filing?",
                    "ans": "A2. You need documents such as your PAN card, Form 16/16A (for salaried individuals), bank statements, proof of deductions, and other income documents."
                },
                {
                    "ques": "Q3. Can I file my ITR myself?",
                    "ans": "A3. Yes, you can file your ITR yourself, but it's recommended to seek professional help to avoid errors and maximize deductions."
                },
                {
                    "ques": "Q4. What happens if I file ITR late?",
                    "ans": "A4. Late filing of ITR may incur penalties and interest on unpaid taxes. It is important to file on time to avoid these costs."
                },
                {
                    "ques": "Q5. How long does it take to get a refund after filing ITR?",
                    "ans": "A5. The refund process typically takes 2-3 months after the filing date, depending on the accuracy of your return and the department’s workload."
                }
            ]
        }
    },
    {
        "id": "gst-return-filing",
        "name": "GST Return Filing",
        "slogan": "\"Simplify Your GST Compliance – A&S TaxCare for Accurate GST Return Filing!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for GST Return Filing?",
            "ans": "A&S TaxCare offers expert assistance in filing GST returns, ensuring your business complies with the Goods and Services Tax regulations. Our experienced team helps you prepare accurate GST returns, minimizing the risk of errors and penalties. With our support, you can focus on growing your business while we handle your tax compliance.",
            "whyBest": [
                "Expert guidance on GST filing and compliance.",
                "Seamless and timely filing of GST returns.",
                "Maximize input tax credit and ensure accurate reporting.",
                "Affordable pricing with no hidden charges."
            ]
        },
        "what": {
            "heading": "What is GST Return Filing?",
            "ans": "GST Return filing is the process of submitting details about your business’s sales, purchases, and tax liabilities under the Goods and Services Tax (GST) regime. It is mandatory for businesses to file GST returns monthly, quarterly, and annually, depending on the type of business and turnover."
        },
        "benefits": {
            "heading": "Benefits of GST Return Filing",
            "points": [
                "Legal Compliance: Ensures that your business complies with GST regulations and avoids penalties.",
                "Timely Filing: Helps in avoiding late fees and interest charges on unpaid taxes.",
                "Claim Input Tax Credit (ITC): Filing accurate returns allows you to claim ITC on eligible purchases.",
                "Business Growth: Maintaining proper GST records ensures smooth operations and better tax management.",
                "Avoid Legal Issues: Regular and accurate filing reduces the risk of legal actions and audits."
            ]
        },
        "faq": {
            "heading": "FAQs About GST Return Filing",
            "questions": [
                {
                    "ques": "Q1. Who needs to file GST returns?",
                    "ans": "A1. All businesses registered under GST, including service providers and goods traders, must file GST returns regularly based on their turnover and business type."
                },
                {
                    "ques": "Q2. How many types of GST returns are there?",
                    "ans": "A2. There are various types of GST returns, including GSTR-1 (sales), GSTR-2 (purchases), GSTR-3B (summary return), and annual returns (GSTR-9)."
                },
                {
                    "ques": "Q3. What happens if GST returns are filed late?",
                    "ans": "A3. Late filing of GST returns results in penalties, interest on late payments, and potential legal actions. Timely filing is crucial to avoid these issues."
                },
                {
                    "ques": "Q4. Can I file GST returns manually?",
                    "ans": "A4. GST returns can be filed electronically through the GST portal. The process involves submitting details about your sales, purchases, and tax liabilities."
                },
                {
                    "ques": "Q5. What documents are required for GST return filing?",
                    "ans": "A5. Documents required include invoices for sales and purchases, payment receipts, and GST payment challans."
                }
            ]
        }
    },
    {
        "id": "tds-return-filing",
        "name": "TDS Return Filing",
        "slogan": "\"Ensure Accurate Tax Deduction Compliance – A&S TaxCare for Timely TDS Return Filing!\"",
        "why": {
            "heading": "Why Choose A&S TaxCare for TDS Return Filing?",
            "ans": "A&S TaxCare offers expert support for filing TDS returns, ensuring your business complies with tax deduction regulations and avoids penalties. Our team helps you with accurate TDS reporting, timely filing, and proper reconciliation of tax deducted at source.",
            "whyBest": [
                "Comprehensive assistance with TDS return preparation and filing.",
                "Ensure timely and accurate filing to avoid penalties and interest.",
                "Dedicated professionals to ensure compliance with the latest TDS regulations.",
                "Affordable pricing with transparent and clear terms."
            ]
        },
        "what": {
            "heading": "What is TDS Return Filing?",
            "ans": "TDS (Tax Deducted at Source) Return Filing is the process of submitting a report to the Income Tax Department detailing the amount of tax deducted by an employer or payer on behalf of the taxpayer. Businesses are required to file TDS returns on a quarterly basis and ensure that tax deductions are reported accurately."
        },
        "benefits": {
            "heading": "Benefits of TDS Return Filing",
            "points": [
                "Compliance with Tax Laws: Ensures that you comply with the TDS provisions and avoid penalties.",
                "Timely Filing: Helps avoid interest and late filing fees for non-compliance.",
                "Accurate Reporting: Ensures all tax deducted at source is reported and deposited correctly.",
                "E-filing Convenience: Easy and quick electronic filing of TDS returns through the government portal.",
                "Transparency: Proper filing prevents errors and discrepancies in tax deductions."
            ]
        },
        "faq": {
            "heading": "FAQs About TDS Return Filing",
            "questions": [
                {
                    "ques": "Q1. Who is required to file TDS returns?",
                    "ans": "A1. Any business or individual who deducts tax at source, such as employers or companies making payments to contractors, is required to file TDS returns."
                },
                {
                    "ques": "Q2. What is the frequency of filing TDS returns?",
                    "ans": "A2. TDS returns must be filed quarterly, and businesses must submit the returns for each quarter within the prescribed due dates."
                },
                {
                    "ques": "Q3. What happens if TDS returns are filed late?",
                    "ans": "A3. Late filing of TDS returns can lead to penalties, interest on unpaid taxes, and potential legal consequences."
                },
                {
                    "ques": "Q4. Can I file TDS returns manually?",
                    "ans": "A4. TDS returns must be filed online through the Income Tax Department’s portal, where all relevant details of deductions and payments are submitted."
                },
                {
                    "ques": "Q5. What documents are needed for TDS return filing?",
                    "ans": "A5. Documents required include challans for tax payments, TDS certificates, and details of deductions made during the quarter."
                }
            ]
        }
    }    
];

export const faqs = [
    {
      "ques": "What is the purpose of tax consulting?",
      "ans": "Tax consulting provides expert advice to individuals and businesses on tax planning, compliance, and optimization to minimize liabilities while adhering to legal regulations."
    },
    {
      "ques": "How can a tax consultant help my business?",
      "ans": "A tax consultant can assist in filing tax returns, managing GST, ensuring regulatory compliance, and identifying opportunities for tax savings to improve financial efficiency."
    },
    {
      "ques": "Do I need a tax consultant if I file taxes online?",
      "ans": "While online tax filing is straightforward, a tax consultant can ensure accuracy, maximize deductions, and provide insights on complex tax issues that automated tools might miss."
    },
    {
      "ques": "What documents are required for tax consultation?",
      "ans": "Typically, you'll need income proofs, bank statements, investment details, and previous tax returns. Specific documents depend on the services required, such as GST or income tax filing."
    }
  ];

export default headerData;