// AdaboostFaceDetectionDlg.cpp : implementation file
//

#include "stdafx.h"
#include "AdaboostFaceDetection.h"
#include "AdaboostFaceDetectionDlg.h"
#include "IntImage.h"
#include "SimpleClassifier.h"
#include "AdaBoostClassifier.h"
#include "CascadeClassifier.h"
#include "Global.h"
#include "learn.h"
#include "Label.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif


// CAboutDlg dialog used for App About

class CAboutDlg : public CDialog
{
public:
	CAboutDlg();

// Dialog Data
	enum { IDD = IDD_ABOUTBOX };

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	
// Implementation
protected:
	DECLARE_MESSAGE_MAP()
};

CAboutDlg::CAboutDlg() : CDialog(CAboutDlg::IDD)
{
}

void CAboutDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
}

BEGIN_MESSAGE_MAP(CAboutDlg, CDialog)
END_MESSAGE_MAP()


// CAdaboostFaceDetectionDlg dialog




CAdaboostFaceDetectionDlg::CAdaboostFaceDetectionDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CAdaboostFaceDetectionDlg::IDD, pParent)
{
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
	m_ExpReady = false;
}

void CAdaboostFaceDetectionDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
}

BEGIN_MESSAGE_MAP(CAdaboostFaceDetectionDlg, CDialog)
	ON_WM_SYSCOMMAND()
	ON_WM_PAINT()
	ON_WM_QUERYDRAGICON()
	//}}AFX_MSG_MAP
	ON_BN_CLICKED(IDC_TRAINING, &CAdaboostFaceDetectionDlg::OnBnClickedTraining)
	ON_BN_CLICKED(IDC_BTNFILENAME, &CAdaboostFaceDetectionDlg::OnBnClickedBtnfilename)
	ON_BN_CLICKED(IDC_BTNLABEL, &CAdaboostFaceDetectionDlg::OnBnClickedBtnlabel)
	ON_BN_CLICKED(IDC_BTNTESTFILE, &CAdaboostFaceDetectionDlg::OnBnClickedBtntestfile)
	ON_BN_CLICKED(IDC_BTNEXP, &CAdaboostFaceDetectionDlg::OnBnClickedBtnexp)
	ON_BN_CLICKED(IDC_BTNTEST, &CAdaboostFaceDetectionDlg::OnBnClickedBtntest)
	ON_BN_CLICKED(IDC_BTNHOME, &CAdaboostFaceDetectionDlg::OnBnClickedBtnhome)
	ON_BN_CLICKED(IDC_BTNTRAIN, &CAdaboostFaceDetectionDlg::OnBnClickedBtntrain)
END_MESSAGE_MAP()


// CAdaboostFaceDetectionDlg message handlers

BOOL CAdaboostFaceDetectionDlg::OnInitDialog()
{
	CDialog::OnInitDialog();

	// Add "About..." menu item to system menu.

	// IDM_ABOUTBOX must be in the system command range.
	ASSERT((IDM_ABOUTBOX & 0xFFF0) == IDM_ABOUTBOX);
	ASSERT(IDM_ABOUTBOX < 0xF000);

	CMenu* pSysMenu = GetSystemMenu(FALSE);
	if (pSysMenu != NULL)
	{
		CString strAboutMenu;
		strAboutMenu.LoadString(IDS_ABOUTBOX);
		if (!strAboutMenu.IsEmpty())
		{
			pSysMenu->AppendMenu(MF_SEPARATOR);
			pSysMenu->AppendMenu(MF_STRING, IDM_ABOUTBOX, strAboutMenu);
		}
	}

	// Set the icon for this dialog.  The framework does this automatically
	//  when the application's main window is not a dialog
	SetIcon(m_hIcon, TRUE);			// Set big icon
	SetIcon(m_hIcon, FALSE);		// Set small icon

	// TODO: Add extra initialization here
	SetDlgItemText(IDC_TBXFILENAME, _T("Chọn file chứa tập mẫu thực nghiệm"));
	SetDlgItemText(IDC_TBXLABEL, _T("Chọn file chứa tập nhãn khuôn mặt"));
	SetDlgItemText(IDC_TBXTESTFILE, _T("Chọn file ảnh"));

	return TRUE;  // return TRUE  unless you set the focus to a control
}

void CAdaboostFaceDetectionDlg::OnSysCommand(UINT nID, LPARAM lParam)
{
	if ((nID & 0xFFF0) == IDM_ABOUTBOX)
	{
		CAboutDlg dlgAbout;
		dlgAbout.DoModal();
	}
	else
	{
		CDialog::OnSysCommand(nID, lParam);
	}
}

// If you add a minimize button to your dialog, you will need the code below
//  to draw the icon.  For MFC applications using the document/view model,
//  this is automatically done for you by the framework.

void CAdaboostFaceDetectionDlg::OnPaint()
{
	if (IsIconic())
	{
		CPaintDC dc(this); // device context for painting

		SendMessage(WM_ICONERASEBKGND, reinterpret_cast<WPARAM>(dc.GetSafeHdc()), 0);

		// Center icon in client rectangle
		int cxIcon = GetSystemMetrics(SM_CXICON);
		int cyIcon = GetSystemMetrics(SM_CYICON);
		CRect rect;
		GetClientRect(&rect);
		int x = (rect.Width() - cxIcon + 1) / 2;
		int y = (rect.Height() - cyIcon + 1) / 2;

		// Draw the icon
		dc.DrawIcon(x, y, m_hIcon);
	}
	else
	{
		CDialog::OnPaint();
	}
}

// The system calls this function to obtain the cursor to display while the user drags
//  the minimized window.
HCURSOR CAdaboostFaceDetectionDlg::OnQueryDragIcon()
{
	return static_cast<HCURSOR>(m_hIcon);
}


void CAdaboostFaceDetectionDlg::OnOK()
{
	// TODO: Add your specialized code here and/or call the base class

	//CDialog::OnOK();
}

void CAdaboostFaceDetectionDlg::OnBnClickedTraining()
{
	// TODO: Add your control notification handler code here
}

void CAdaboostFaceDetectionDlg::OnBnClickedBtnfilename()
{
	// TODO: Add your control notification handler code here
	CFileDialog *dlg = new CFileDialog(true);
	if(dlg->DoModal() == IDOK)
	{
		SetDlgItemText(IDC_TBXFILENAME, dlg->GetPathName());
	}
}

void CAdaboostFaceDetectionDlg::OnBnClickedBtnlabel()
{
	// TODO: Add your control notification handler code here
	CFileDialog *dlg = new CFileDialog(true);
	if(dlg->DoModal() == IDOK)
	{
		SetDlgItemText(IDC_TBXLABEL, dlg->GetPathName());
	}
}

void CAdaboostFaceDetectionDlg::OnBnClickedBtntestfile()
{
	// TODO: Add your control notification handler code here
	CFileDialog *dlg = new CFileDialog(true);
	if(dlg->DoModal() == IDOK)
	{
		SetDlgItemText(IDC_TBXTESTFILE, dlg->GetPathName());
	}
}

void CAdaboostFaceDetectionDlg::OnExperiment() 
{
	
	
	CString pathFile, pathLabel;
	GetDlgItemTextW(IDC_TBXFILENAME, pathFile);
	GetDlgItemTextW(IDC_TBXLABEL, pathLabel);
	if(pathFile != _T("Chọn file chứa tập mẫu thực nghiệm") && pathLabel != _T("Chọn file chứa tập nhãn khuôn mặt"))
	{
		ifstream inFile, inLabel;
		
		int i,count;
		char buf[256];
		DWORD t1,t2;
		// region add
		if(!m_ExpReady)
		{
			LoadOptions();
			gCascade = new CascadeClassifier;
			ASSERT(gCascade != NULL);
			gCascade->LoadDefaultCascade();
			ReadRangeFile();
			m_ExpReady = true;
		}

		BeginWaitCursor();
		gNumRightLabel = 0;
		gNumWrongDetectedFace = 0;
		inFile.open(pathFile);
		inLabel.open(pathLabel);
		inLabel >> gTotalLabel;
		inFile >> count; 
		inFile.ignore(256,'\n');

		gTotal_fp = 0;

		t1 = timeGetTime();
		for(i=0;i<count;i++)
		{
			int nFaces;
			inFile.getline(buf,255,' ');
			inFile >> nFaces;
			inFile.ignore(256,'\n');
			gFaceLabels.resize(nFaces);
			for(int j = 0;j < nFaces;j++)
			{
				inLabel.ignore(256,'\n');
				inLabel >> gFaceLabels.at(j).m_LeftEye.x;
				inLabel >> gFaceLabels.at(j).m_LeftEye.y;
				inLabel >> gFaceLabels.at(j).m_RightEye.x;
				inLabel >> gFaceLabels.at(j).m_RightEye.y;
				inLabel >> gFaceLabels.at(j).m_CenterMouth.x;
				inLabel >> gFaceLabels.at(j).m_CenterMouth.y;

			}
			if(gCascade->m_iCount>0)
			{
				CString path = gHomePath + buf;
				wcstombs(buf,(LPCTSTR)path, 256);
				m_Image.Load(buf);
				gCascade->ApplyOriginalSize(m_Image, buf, true);
			}
		}

		inLabel.close();
		inFile.close();
		t2 = timeGetTime();
		EndWaitCursor();

		CString s;
		s.Format(_T("Total label: %d.\n Number of faces detected: %d"),gTotalLabel, gNumRightLabel);
		AfxMessageBox(s);
		s.Format(_T("Total label: %d.\n False positive detected: %d"),gTotalLabel, gNumWrongDetectedFace);
		AfxMessageBox(s);
		s.Format(_T("%d"), gTotalLabel);
		SetDlgItemText(IDC_TBXTOTAL, s);
		s.Format(_T("%d"), gNumRightLabel);
		SetDlgItemText(IDC_TBXTP, s);
		s.Format(_T("%d"), gNumWrongDetectedFace);
		SetDlgItemText(IDC_TBXFP, s);
	}
	else
	{
		AfxMessageBox(_T("Where is your input!"));
	}
	// xử lý tập dữ liệu test
	//s.Format("Total Label: %d milliseconds.\n",t2-t1);
	//AfxMessageBox(s);
	/*ifstream fi;
	fstream fo, fof;
	char buf[300][256];
	char comp[256] = " ";
	float point[300][6][2];
	int count = 0;
	int nfile = 0;
	fo.open("testsetB_label.txt", ios_base::out);
	fof.open("testsetB_filename.txt", ios_base::out);
	fi.open("testsetB.txt");
	while(!fi.eof())
	{
		fi.getline(buf[count], 256, ' ');
		if(strcmp(comp, buf[count]))
		{
			strcpy_s(comp, buf[count]);
			nfile ++;
		}
		int len = strlen(buf[count]);
		for(int i = 0;i < 6;i++)
			for(int j = 0;j < 2;j++)
			{
				fi >> point[count][i][j];
			}
			fi.ignore();
		count ++;
	}
	fo << count << endl;
	fof << nfile;
	nfile = 0;
	for(int i = 0; i < count;i++)
	{
		nfile ++;
		if( i == count - 1)
		{
			fof << " " << nfile + 1;
			fof << endl;
		}
		if(strcmp(comp, buf[i]))
		{
			fof << " " << nfile;
			fof << endl;
			strcpy_s(comp, buf[i]);
			fof << "testB\\";
			fof.write(comp, strlen(comp));
			nfile = 0;
		}
		//fo << "testD\\";
		//fo.write(buf[i], strlen(buf[i]));
		//fo << " ";
		for(int j = 0;j < 2;j++)
		{
			fo << point[i][0][j]<< " ";
		}
		for(int j = 0;j < 2;j++)
		{
			fo << point[i][1][j]<< " ";
		}
		for(int j = 0;j < 2;j++)
		{
			fo << point[i][4][j];
			if(j == 0)
			{
				fo << " ";

			}
			else
			{
				fo << endl;
			}
		}
	}
	fo.close();
	int stop = 0;*/
}
void CAdaboostFaceDetectionDlg::OnBnClickedBtnexp()
{
	// TODO: Add your control notification handler code here
	OnExperiment();
}

void CAdaboostFaceDetectionDlg::OnBnClickedBtntest()
{
	// TODO: Add your control notification handler code here
	if(!m_ExpReady)
	{
		LoadOptions();
		gCascade = new CascadeClassifier;
		ASSERT(gCascade != NULL);
		gCascade->LoadDefaultCascade();
		ReadRangeFile();
		m_ExpReady = true;
	}
	CString pathFile;
	GetDlgItemTextW(IDC_TBXTESTFILE, pathFile);
	if(pathFile != _T("Chọn file ảnh"))
	{
		char buf[256];
		wcstombs(buf,(LPCTSTR)pathFile, 256);
		m_Image.Load(buf);
		if(gCascade->m_iCount>0)
		{

			gCascade->ApplyOriginalSize(m_Image, buf, false);
		}
	}
	else
	{
		AfxMessageBox(_T("Where is your input!"));
	}
}

void CAdaboostFaceDetectionDlg::OnBnClickedBtnhome()
{
	// TODO: Add your control notification handler code here
	CFileDialog *dlg = new CFileDialog(true);
	if(dlg->DoModal() == IDOK)
	{
		CString path = dlg->GetPathName();
		gSetup_Filename = path;
		//CString.Replace()
		path.Replace(dlg->GetFileName(), _T(""));
		gHomePath = path;
		
	}
}

void CAdaboostFaceDetectionDlg::OnBnClickedBtntrain()
{
	// TODO: Add your control notification handler code here
	ClearUpGlobalData();
	InitGlobalData();
	InitTrain();
}
